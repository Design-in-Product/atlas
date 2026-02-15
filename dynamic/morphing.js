// ============================================================
// POLYGON MORPHING ENGINE
// Geometry utilities, color interpolation, morph preparation,
// and frame rendering for smooth transitions between keyframes
// ============================================================

// ---- Geometry Utilities ----

function ringLength(ring) {
  let len = 0;
  for (let i = 1; i < ring.length; i++) {
    const dx = ring[i][0] - ring[i-1][0];
    const dy = ring[i][1] - ring[i-1][1];
    len += Math.sqrt(dx * dx + dy * dy);
  }
  return len;
}

function dist(a, b) {
  const dx = a[0] - b[0], dy = a[1] - b[1];
  return Math.sqrt(dx * dx + dy * dy);
}

function ringCentroid(ring) {
  let cx = 0, cy = 0;
  for (const p of ring) { cx += p[0]; cy += p[1]; }
  return [cx / ring.length, cy / ring.length];
}

// Compute signed area of a ring (positive = CCW, negative = CW)
function ringSignedArea(ring) {
  let area = 0;
  const n = ring.length;
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    area += ring[i][0] * ring[j][1];
    area -= ring[j][0] * ring[i][1];
  }
  return area / 2;
}

// Ensure ring is counter-clockwise (standard GeoJSON exterior ring winding)
function ensureCCW(ring) {
  if (ringSignedArea(ring) < 0) {
    return ring.slice().reverse();
  }
  return ring;
}

function resampleRing(ring, targetCount) {
  if (ring.length < 2 || targetCount < 3) return ring;
  const totalLen = ringLength(ring);
  if (totalLen === 0) return ring;

  const step = totalLen / targetCount;
  const result = [ring[0]];
  let accumulated = 0;
  let ri = 1;

  for (let i = 1; i < targetCount; i++) {
    const targetDist = i * step;
    while (ri < ring.length && accumulated + dist(ring[ri-1], ring[ri]) < targetDist) {
      accumulated += dist(ring[ri-1], ring[ri]);
      ri++;
    }
    if (ri >= ring.length) { result.push(ring[ring.length - 1]); continue; }
    const segLen = dist(ring[ri-1], ring[ri]);
    const t = segLen > 0 ? (targetDist - accumulated) / segLen : 0;
    result.push([
      ring[ri-1][0] + t * (ring[ri][0] - ring[ri-1][0]),
      ring[ri-1][1] + t * (ring[ri][1] - ring[ri-1][1])
    ]);
  }
  return result;
}

function alignRings(source, target) {
  // Try both the target ring AND its reverse, find best rotation for each,
  // then pick whichever direction+rotation gives minimum total displacement.
  const n = target.length;
  if (n !== source.length || n < 3) return target;

  const targetReversed = target.slice().reverse();

  function findBestOffset(tgt) {
    let bestOffset = 0, bestDist = Infinity;
    const step = Math.max(1, Math.floor(n / 20));
    for (let off = 0; off < n; off += step) {
      let totalDist = 0;
      for (let i = 0; i < n; i++) {
        totalDist += dist(source[i], tgt[(i + off) % n]);
        if (totalDist > bestDist) break;
      }
      if (totalDist < bestDist) { bestDist = totalDist; bestOffset = off; }
    }
    const lo = Math.max(0, bestOffset - step), hi = Math.min(n - 1, bestOffset + step);
    for (let off = lo; off <= hi; off++) {
      let totalDist = 0;
      for (let i = 0; i < n; i++) {
        totalDist += dist(source[i], tgt[(i + off) % n]);
        if (totalDist > bestDist) break;
      }
      if (totalDist < bestDist) { bestDist = totalDist; bestOffset = off; }
    }
    return { offset: bestOffset, dist: bestDist };
  }

  const fwd = findBestOffset(target);
  const rev = findBestOffset(targetReversed);

  let bestTarget, bestOffset;
  if (rev.dist < fwd.dist * 0.95) {
    bestTarget = targetReversed;
    bestOffset = rev.offset;
  } else {
    bestTarget = target;
    bestOffset = fwd.offset;
  }

  if (bestOffset === 0) return bestTarget;
  return bestTarget.slice(bestOffset).concat(bestTarget.slice(0, bestOffset));
}

function normalizePolygonPair(sourceRing, targetRing) {
  const srcCCW = ensureCCW(sourceRing);
  const tgtCCW = ensureCCW(targetRing);
  const count = Math.max(srcCCW.length, tgtCCW.length, 40);
  const srcResampled = resampleRing(srcCCW, count);
  const tgtResampled = resampleRing(tgtCCW, count);
  const tgtAligned = alignRings(srcResampled, tgtResampled);
  return { source: srcResampled, target: tgtAligned, count };
}

function makePointRing(center, count) {
  const result = [];
  const radius = 0.05;
  for (let i = 0; i < count; i++) {
    const angle = (2 * Math.PI * i) / count;
    result.push([
      center[0] + radius * Math.cos(angle),
      center[1] + radius * Math.sin(angle)
    ]);
  }
  return result;
}

function inflateRing(ring, centroid, scale) {
  return ring.map(p => [
    centroid[0] + (p[0] - centroid[0]) * scale,
    centroid[1] + (p[1] - centroid[1]) * scale
  ]);
}

// ---- Color Interpolation ----

function hexToHSL(hex) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16) / 255;
  const g = parseInt(hex.substr(2, 2), 16) / 255;
  const b = parseInt(hex.substr(4, 2), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) { h = s = 0; }
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }
  return [h * 360, s, l];
}

function hslToHex(h, s, l) {
  h /= 360;
  function hue2rgb(p, q, t) {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  }
  let r, g, b;
  if (s === 0) { r = g = b = l; }
  else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return '#' + [r, g, b].map(x => Math.round(x * 255).toString(16).padStart(2, '0')).join('');
}

function lerpColor(hex1, hex2, t) {
  const [h1, s1, l1] = hexToHSL(hex1);
  const [h2, s2, l2] = hexToHSL(hex2);
  let dh = h2 - h1;
  if (dh > 180) dh -= 360;
  if (dh < -180) dh += 360;
  const h = ((h1 + dh * t) % 360 + 360) % 360;
  const s = s1 + (s2 - s1) * t;
  const l = l1 + (l2 - l1) * t;
  return hslToHex(h, s, l);
}

// ---- Easing ----

function easeInOutCubic(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

// ---- Feature Ring Extraction ----

function getFeatureMainRing(feat) {
  if (feat.isMulti) {
    let best = feat.coords[0], bestArea = 0;
    for (const ring of feat.coords) {
      let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
      for (const c of ring) {
        if (c[0] < minX) minX = c[0]; if (c[0] > maxX) maxX = c[0];
        if (c[1] < minY) minY = c[1]; if (c[1] > maxY) maxY = c[1];
      }
      const area = (maxX - minX) * (maxY - minY);
      if (area > bestArea) { bestArea = area; best = ring; }
    }
    return best;
  }
  return feat.coords[0];
}

// ---- Cross-fade Detection ----

function getBBox(ring) {
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const p of ring) {
    if (p[0] < minX) minX = p[0]; if (p[0] > maxX) maxX = p[0];
    if (p[1] < minY) minY = p[1]; if (p[1] > maxY) maxY = p[1];
  }
  return { minX, maxX, minY, maxY, w: maxX - minX, h: maxY - minY };
}

function bboxOverlapFraction(a, b) {
  const overlapX = Math.max(0, Math.min(a.maxX, b.maxX) - Math.max(a.minX, b.minX));
  const overlapY = Math.max(0, Math.min(a.maxY, b.maxY) - Math.max(a.minY, b.minY));
  const overlapArea = overlapX * overlapY;
  const areaA = a.w * a.h;
  const areaB = b.w * b.h;
  const maxArea = Math.max(areaA, areaB);
  return maxArea > 0 ? overlapArea / maxArea : 0;
}

function shouldCrossFade(srcRing, tgtRing, itemType) {
  // Always cross-fade secondary split targets
  if (itemType === 'split-appear') return true;

  const srcBB = getBBox(srcRing);
  const tgtBB = getBBox(tgtRing);

  // Low bounding box overlap means shapes are in very different locations
  const overlap = bboxOverlapFraction(srcBB, tgtBB);
  if (overlap < 0.25) return true;

  // Large centroid displacement relative to shape size
  const srcC = ringCentroid(srcRing);
  const tgtC = ringCentroid(tgtRing);
  const displacement = dist(srcC, tgtC);
  const avgDiag = (Math.sqrt(srcBB.w*srcBB.w + srcBB.h*srcBB.h) +
                   Math.sqrt(tgtBB.w*tgtBB.w + tgtBB.h*tgtBB.h)) / 2;
  if (avgDiag > 0 && displacement / avgDiag > 0.7) return true;

  return false;
}

// ---- Morph Preparation ----

function prepareMorph(fromIndex, toIndex) {
  const fromKf = KEYFRAMES[fromIndex];
  const toKf = KEYFRAMES[toIndex];
  const transKey = fromKf.year + '_' + toKf.year;
  const mapping = ENTITY_TRANSITIONS[transKey] || {};

  const fromMap = {};
  fromKf.features.forEach(f => { fromMap[f.name] = f; });
  const toMap = {};
  toKf.features.forEach(f => { toMap[f.name] = f; });

  const claimedTargets = new Set();
  const morphItems = [];

  // 1. Process mapped transitions (renames, splits)
  for (const [fromName, toSpec] of Object.entries(mapping)) {
    const srcFeat = fromMap[fromName];
    if (!srcFeat) continue;

    if (typeof toSpec === 'string') {
      const tgtFeat = toMap[toSpec];
      if (!tgtFeat) continue;
      claimedTargets.add(toSpec);
      const srcRing = getFeatureMainRing(srcFeat);
      const tgtRing = getFeatureMainRing(tgtFeat);
      const pair = normalizePolygonPair(srcRing, tgtRing);
      const xfade = shouldCrossFade(srcRing, tgtRing, 'morph');
      morphItems.push({
        type: 'morph', name: fromName, toName: toSpec,
        srcColor: srcFeat.color, tgtColor: tgtFeat.color,
        srcRing: pair.source, tgtRing: pair.target, count: pair.count,
        srcFeat, tgtFeat, useCrossFade: xfade
      });
      delete fromMap[fromName];
    } else if (Array.isArray(toSpec)) {
      // Split: morph source to each target from source shape
      const srcRing = getFeatureMainRing(srcFeat);
      for (let si = 0; si < toSpec.length; si++) {
        const tgtName = toSpec[si];
        const tgtFeat = toMap[tgtName];
        if (!tgtFeat) continue;
        claimedTargets.add(tgtName);
        const tgtRing = getFeatureMainRing(tgtFeat);
        const itemType = si === 0 ? 'morph' : 'split-appear';
        const pair = normalizePolygonPair(srcRing, tgtRing);
        const xfade = shouldCrossFade(srcRing, tgtRing, itemType);
        morphItems.push({
          type: itemType,
          name: si === 0 ? fromName : tgtName,
          toName: tgtName,
          srcColor: srcFeat.color, tgtColor: tgtFeat.color,
          srcRing: pair.source, tgtRing: pair.target, count: pair.count,
          srcFeat, tgtFeat, useCrossFade: xfade
        });
      }
      delete fromMap[fromName];
    }
  }

  // 2. Exact name matches (persisting entities)
  for (const name of Object.keys(fromMap)) {
    if (toMap[name] && !claimedTargets.has(name)) {
      claimedTargets.add(name);
      const srcFeat = fromMap[name];
      const tgtFeat = toMap[name];
      const srcRing = getFeatureMainRing(srcFeat);
      const tgtRing = getFeatureMainRing(tgtFeat);
      const pair = normalizePolygonPair(srcRing, tgtRing);
      const xfade = shouldCrossFade(srcRing, tgtRing, 'morph');
      morphItems.push({
        type: 'morph', name, toName: name,
        srcColor: srcFeat.color, tgtColor: tgtFeat.color,
        srcRing: pair.source, tgtRing: pair.target, count: pair.count,
        srcFeat, tgtFeat, useCrossFade: xfade
      });
      delete fromMap[name];
    }
  }

  // 3. Remaining source features: disappear
  for (const name of Object.keys(fromMap)) {
    const srcFeat = fromMap[name];
    const srcRing = getFeatureMainRing(srcFeat);
    const centroid = ringCentroid(srcRing);
    const count = Math.max(srcRing.length, 40);
    const resampled = resampleRing(srcRing, count);
    morphItems.push({
      type: 'disappear', name,
      srcColor: srcFeat.color, tgtColor: srcFeat.color,
      srcRing: resampled, tgtRing: makePointRing(centroid, count), count,
      srcFeat
    });
  }

  // 4. Remaining target features: appear
  for (const name of Object.keys(toMap)) {
    if (claimedTargets.has(name)) continue;
    const tgtFeat = toMap[name];
    const tgtRing = getFeatureMainRing(tgtFeat);
    const centroid = ringCentroid(tgtRing);
    const count = Math.max(tgtRing.length, 40);
    const resampled = resampleRing(tgtRing, count);
    morphItems.push({
      type: 'appear', name,
      srcColor: tgtFeat.color, tgtColor: tgtFeat.color,
      srcRing: makePointRing(centroid, count), tgtRing: resampled, count,
      tgtFeat
    });
  }

  return morphItems;
}

// ---- Morph Rendering ----

function renderMorphFrame(morphItems, t, toIndex) {
  const et = easeInOutCubic(t);
  const inflationAmount = 1.0 + 0.03 * Math.sin(Math.PI * t);

  morphItems.forEach((item) => {
    if (item.useCrossFade) {
      // Cross-fade: just animate opacity on both layers
      const srcLayer = item._srcLayer;
      const tgtLayer = item._tgtLayer;
      if (srcLayer) {
        srcLayer.setStyle({
          fillOpacity: targetOpacity * (1 - et),
          opacity: 0.8 * (1 - et)
        });
      }
      if (tgtLayer) {
        tgtLayer.setStyle({
          fillOpacity: targetOpacity * et,
          opacity: 0.8 * et
        });
      }
      return;
    }

    // Standard morph: interpolate vertices
    const morphedLngLat = [];
    for (let i = 0; i < item.count; i++) {
      morphedLngLat.push([
        item.srcRing[i][0] + et * (item.tgtRing[i][0] - item.srcRing[i][0]),
        item.srcRing[i][1] + et * (item.tgtRing[i][1] - item.srcRing[i][1])
      ]);
    }

    let finalLngLat = morphedLngLat;
    if (item.type === 'morph' && inflationAmount > 1.001) {
      const c = ringCentroid(morphedLngLat);
      finalLngLat = inflateRing(morphedLngLat, c, inflationAmount);
    }

    const morphed = finalLngLat.map(p => [p[1], p[0]]);
    const color = lerpColor(item.srcColor, item.tgtColor, et);

    let opacity = targetOpacity;
    if (item.type === 'disappear') opacity = targetOpacity * (1 - et);
    else if (item.type === 'appear') opacity = targetOpacity * et;

    const layer = item._layer;
    if (layer) {
      layer.setLatLngs(morphed);
      layer.setStyle({
        fillColor: color,
        fillOpacity: opacity,
        opacity: item.type === 'disappear' ? 0.8 * (1 - et) :
                 item.type === 'appear' ? 0.8 * et : 0.8
      });
    }

    // Update label position
    const label = item._label;
    if (label) {
      const centroid = ringCentroid(morphedLngLat);
      label.setLatLng([centroid[1], centroid[0]]);
      const el = label.getElement();
      if (el) {
        if (item.type === 'disappear') el.style.opacity = 1 - et;
        else if (item.type === 'appear') el.style.opacity = et;
        else el.style.opacity = 1;
      }
    }
  });
}

// ---- Transition Duration Scaling ----

function getTransitionDuration(fromIndex, toIndex) {
  const fromYear = KEYFRAMES[fromIndex].year;
  const toYear = KEYFRAMES[toIndex].year;
  const gap = Math.abs(toYear - fromYear);
  if (gap < 50) return 600;
  if (gap < 150) return 800;
  return 1000;
}

// ---- Main Transition Function ----

function transitionToKeyframe(newIndex, duration) {
  if (isTransitioning || newIndex === currentKeyframeIndex) {
    if (newIndex !== currentKeyframeIndex) {
      currentKeyframeIndex = newIndex;
      renderKeyframe(newIndex, targetOpacity);
    }
    return;
  }

  isTransitioning = true;
  duration = duration || getTransitionDuration(currentKeyframeIndex, newIndex);

  try {
    const startTime = performance.now();
    const morphItems = prepareMorph(currentKeyframeIndex, newIndex);

    clearLayers();
    const legendEl = document.getElementById('legend-items');
    legendEl.innerHTML = '';

    morphItems.forEach((item, idx) => {
      if (item.useCrossFade) {
        // Cross-fade: create TWO polygon layers (src fading out, tgt fading in)
        const srcLatLngs = item.srcRing.map(c => [c[1], c[0]]);
        const tgtLatLngs = item.tgtRing.map(c => [c[1], c[0]]);

        const srcPoly = L.polygon(srcLatLngs, {
          color: 'rgba(20, 20, 40, 0.6)', fillColor: item.srcColor,
          fillOpacity: targetOpacity, weight: 1.5, opacity: 0.8, smoothFactor: 0
        });
        srcPoly.addTo(map);

        const tgtPoly = L.polygon(tgtLatLngs, {
          color: 'rgba(20, 20, 40, 0.6)', fillColor: item.tgtColor,
          fillOpacity: 0, weight: 1.5, opacity: 0, smoothFactor: 0
        });
        tgtPoly.addTo(map);

        // Store both layers; renderMorphFrame will use item._srcLayer / item._tgtLayer
        item._srcLayer = srcPoly;
        item._tgtLayer = tgtPoly;
        currentLayers.push(srcPoly);
        currentLayers.push(tgtPoly);  // push both so clearLayers removes them

        // Label: show target name, position at target centroid
        const tgtCentroid = ringCentroid(item.tgtRing);
        const label = L.marker([tgtCentroid[1], tgtCentroid[0]], {
          icon: L.divIcon({
            className: 'empire-label medium',
            html: '<span style="color:' + item.tgtColor + '">' + (item.toName || item.name) + '</span>',
            iconSize: null, iconAnchor: [0, 0]
          }),
          interactive: false, pane: 'tooltipPane'
        });
        if (labelsVisible) label.addTo(map);
        item._label = label;
        currentLabels.push(label);
      } else {
        // Standard morph: single polygon layer
        const initialLatLngs = item.srcRing.map(c => [c[1], c[0]]);
        const initialOpacity = (item.type === 'appear') ? 0 : targetOpacity;

        const polygon = L.polygon(initialLatLngs, {
          color: 'rgba(20, 20, 40, 0.6)', fillColor: item.srcColor,
          fillOpacity: initialOpacity, weight: 1.5, opacity: 0.8, smoothFactor: 0
        });
        polygon.addTo(map);
        item._layer = polygon;
        currentLayers.push(polygon);

        const centroid = ringCentroid(item.srcRing);
        const displayName = item.type === 'disappear' ? item.name : (item.toName || item.name);
        const displayColor = item.type === 'disappear' ? item.srcColor : item.tgtColor;
        const label = L.marker([centroid[1], centroid[0]], {
          icon: L.divIcon({
            className: 'empire-label medium',
            html: '<span style="color:' + displayColor + '">' + displayName + '</span>',
            iconSize: null, iconAnchor: [0, 0]
          }),
          interactive: false, pane: 'tooltipPane'
        });
        if (labelsVisible) label.addTo(map);
        item._label = label;
        currentLabels.push(label);
      }
    });

    function animateMorph(now) {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);

      try {
        renderMorphFrame(morphItems, t, newIndex);
      } catch (e) {
        console.error('Morph frame error:', e);
        currentKeyframeIndex = newIndex;
        isTransitioning = false;
        renderKeyframe(newIndex, targetOpacity);
        return;
      }

      if (t < 1) {
        requestAnimationFrame(animateMorph);
      } else {
        currentKeyframeIndex = newIndex;
        isTransitioning = false;
        renderKeyframe(newIndex, targetOpacity);
      }
    }

    requestAnimationFrame(animateMorph);
  } catch (e) {
    console.error('Morph preparation error:', e);
    currentKeyframeIndex = newIndex;
    isTransitioning = false;
    renderKeyframe(newIndex, targetOpacity);
  }
}
