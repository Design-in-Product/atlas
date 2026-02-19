// ============================================================
// KEYFRAME RENDERING — renders static keyframes with polygons,
// labels, tooltips, popups, and legend
// ============================================================

// ---- Fractal roughness for inland borders ----
// Deterministic seeded random from string (entity name + edge index)
function seedHash(str) {
  var h = 0;
  for (var i = 0; i < str.length; i++) {
    h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  }
  return h;
}

function seededRandom(seed) {
  // Simple LCG
  seed = (seed * 1664525 + 1013904223) & 0x7fffffff;
  return { value: (seed / 0x7fffffff) * 2 - 1, next: seed }; // -1 to 1
}

// Roughen a polygon ring: insert midpoints with jitter on long edges
// seed: string for deterministic randomness
// scale: max jitter in degrees (default 0.3)
function roughenRing(ring, seed, scale) {
  if (!scale) scale = 0.25;
  var result = [];
  var s = seedHash(seed);
  for (var i = 0; i < ring.length - 1; i++) {
    var p1 = ring[i], p2 = ring[i + 1];
    result.push(p1);
    // Edge length in degrees
    var dx = p2[0] - p1[0], dy = p2[1] - p1[1];
    var edgeLen = Math.sqrt(dx * dx + dy * dy);
    // Only roughen edges longer than 2 degrees (short edges are already detailed)
    if (edgeLen > 2.0) {
      // Number of midpoints proportional to edge length
      var nMid = Math.min(Math.floor(edgeLen / 1.5), 4);
      // Perpendicular direction
      var perpX = -dy / edgeLen, perpY = dx / edgeLen;
      for (var j = 1; j <= nMid; j++) {
        var t = j / (nMid + 1);
        var r = seededRandom(s); s = r.next;
        var jitter = r.value * scale * (edgeLen / 8);
        // Also add small along-edge randomness
        var r2 = seededRandom(s); s = r2.next;
        var along = r2.value * 0.15;
        var mx = p1[0] + dx * (t + along * 0.1) + perpX * jitter;
        var my = p1[1] + dy * (t + along * 0.1) + perpY * jitter;
        result.push([mx, my]);
      }
    }
  }
  result.push(ring[ring.length - 1]); // close
  return result;
}

// Apply roughness to all rings in a feature's coords
function roughenCoords(coords, entityName) {
  return coords.map(function(ring, ri) {
    return roughenRing(ring, entityName + '_' + ri, 0.25);
  });
}

function clearLayers() {
  currentLayers.forEach(layer => map.removeLayer(layer));
  currentLayers = [];
  currentLabels.forEach(label => map.removeLayer(label));
  currentLabels = [];
}

function getKeyframeForYear(year) {
  let best = 0;
  for (let i = 0; i < KEYFRAMES.length; i++) {
    if (KEYFRAMES[i].year <= year) best = i;
  }
  return best;
}

function renderKeyframe(index, opacity) {
  clearLayers();
  const kf = KEYFRAMES[index];
  if (!kf) return;

  const legendEl = document.getElementById('legend-items');
  legendEl.innerHTML = '';

  // Always update legend and context, but only add map layers if political is visible
  kf.features.forEach(feat => {
    if (politicalVisible) {
      let latLngs;
      const roughened = roughenCoords(feat.coords, feat.name);
      if (feat.isMulti) {
        latLngs = roughened.map(ring => ring.map(c => [c[1], c[0]]));
      } else {
        latLngs = roughened[0].map(c => [c[1], c[0]]);
      }

      const polygon = L.polygon(latLngs, {
        color: 'rgba(20, 20, 40, 0.6)',
        fillColor: feat.color,
        fillOpacity: opacity,
        weight: 1.5,
        opacity: 0.8,
        smoothFactor: 1.5
      });

      polygon.bindTooltip(feat.name, {
        className: 'empire-tooltip',
        sticky: true,
        direction: 'top',
        offset: [0, -10]
      });

      polygon.bindPopup(
        '<div class="popup-title" style="color:' + feat.color + '">' + feat.name + '</div>' +
        '<div class="popup-desc">' + feat.desc + '</div>',
        { maxWidth: 280 }
      );

      polygon.on('mouseover', function() {
        this.setStyle({ fillOpacity: Math.min(opacity + 0.2, 0.9), weight: 2.5, color: 'rgba(255,255,255,0.8)' });
        this.bringToFront();
      });
      polygon.on('mouseout', function() {
        this.setStyle({ fillOpacity: opacity, weight: 1.5, color: 'rgba(20, 20, 40, 0.6)' });
      });

      polygon.addTo(map);
      currentLayers.push(polygon);
    }

    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = '<span class="legend-color" style="background:' + feat.color + '"></span><span>' + feat.name + '</span>';
    legendEl.appendChild(item);
  });

  document.getElementById('timeline-context').textContent = kf.context;
}

// ============================================================
// RELIGION LAYER RENDERING
// ============================================================

function getReligionKeyframeForYear(year) {
  let best = 0;
  for (let i = 0; i < RELIGION_KEYFRAMES.length; i++) {
    if (RELIGION_KEYFRAMES[i].year <= year) best = i;
  }
  return best;
}

function clearReligionLayers() {
  religionLayers.forEach(layer => map.removeLayer(layer));
  religionLayers = [];
  religionLabels.forEach(label => map.removeLayer(label));
  religionLabels = [];
}

function renderReligionKeyframe(index, opacity) {
  clearReligionLayers();
  if (!religionVisible) return;

  const kf = RELIGION_KEYFRAMES[index];
  if (!kf) return;

  const legendEl = document.getElementById('religion-legend-items');
  legendEl.innerHTML = '';

  kf.features.forEach(feat => {
    // Religion coords are always single-ring: [[lng,lat], ...]
    const ring = feat.coords[0];
    const latLngs = ring.map(c => [c[1], c[0]]);

    const polygon = L.polygon(latLngs, {
      color: feat.color,
      fillColor: feat.color,
      fillOpacity: opacity,
      weight: 2,
      opacity: 0.6,
      dashArray: '6, 4',
      smoothFactor: 1.5
    });

    polygon.bindTooltip(feat.name, {
      className: 'empire-tooltip',
      sticky: true,
      direction: 'top',
      offset: [0, -10]
    });

    polygon.bindPopup(
      '<div class="popup-title" style="color:' + feat.color + '">' + feat.name + '</div>' +
      '<div class="popup-desc">' + feat.desc + '</div>',
      { maxWidth: 280 }
    );

    polygon.addTo(map);
    religionLayers.push(polygon);

    // Religion labels — slightly different style class
    const bounds = polygon.getBounds();
    const center = bounds.getCenter();
    const sizeClass = getPolygonSizeClass(bounds);
    if (sizeClass) {
      const label = L.marker(center, {
        icon: L.divIcon({
          className: 'religion-label ' + sizeClass,
          html: '<span style="color:' + feat.color + '">' + feat.name + '</span>',
          iconSize: null,
          iconAnchor: [0, 0]
        }),
        interactive: false,
        pane: 'tooltipPane'
      });
      label._empireBounds = bounds;
      label.addTo(map);
      religionLabels.push(label);
    }

    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = '<span class="legend-color" style="background:' + feat.color + '"></span><span>' + feat.name + '</span>';
    legendEl.appendChild(item);
  });
}

function updateReligionForYear(year) {
  var idx = getReligionKeyframeForYear(year);
  if (idx !== currentReligionIndex || religionLayers.length === 0) {
    currentReligionIndex = idx;
    if (religionVisible) {
      renderReligionKeyframe(idx, religionOpacity);
    }
  }
}

// ============================================================
// TRADE ROUTE RENDERING
// ============================================================

function getTradeRouteKeyframeForYear(year) {
  let best = 0;
  for (let i = 0; i < TRADE_ROUTE_KEYFRAMES.length; i++) {
    if (TRADE_ROUTE_KEYFRAMES[i].year <= year) best = i;
  }
  return best;
}

function clearTradeRouteLayers() {
  tradeRouteLayers.forEach(layer => map.removeLayer(layer));
  tradeRouteLayers = [];
  tradeRouteLabels.forEach(label => map.removeLayer(label));
  tradeRouteLabels = [];
}

function renderTradeRouteKeyframe(index, opacityScale) {
  clearTradeRouteLayers();
  if (!tradeRoutesVisible) return;

  const kf = TRADE_ROUTE_KEYFRAMES[index];
  if (!kf) return;

  const legendEl = document.getElementById('trade-legend-items');
  legendEl.innerHTML = '';

  kf.features.forEach(feat => {
    // Trade routes are polylines: waypoints are [lng, lat], Leaflet needs [lat, lng]
    const latLngs = feat.waypoints.map(c => [c[1], c[0]]);

    const polyline = L.polyline(latLngs, {
      color: feat.color,
      weight: feat.weight * opacityScale,
      opacity: feat.opacity * opacityScale,
      smoothFactor: 1.5,
      lineCap: 'round',
      lineJoin: 'round',
      dashArray: feat.status === 'minor' ? '4, 6' : null
    });

    polyline.bindTooltip(feat.name + ' (' + feat.status + ')', {
      className: 'empire-tooltip',
      sticky: true,
      direction: 'top',
      offset: [0, -10]
    });

    polyline.bindPopup(
      '<div class="popup-title" style="color:' + feat.color + '">' + feat.name + '</div>' +
      '<div class="popup-desc">' + feat.desc + '</div>',
      { maxWidth: 280 }
    );

    polyline.on('mouseover', function() {
      this.setStyle({ weight: feat.weight * opacityScale + 2, opacity: 1.0 });
      this.bringToFront();
    });
    polyline.on('mouseout', function() {
      this.setStyle({ weight: feat.weight * opacityScale, opacity: feat.opacity * opacityScale });
    });

    polyline.addTo(map);
    tradeRouteLayers.push(polyline);

    // Route labels — placed at midpoint of route
    const midIdx = Math.floor(latLngs.length / 2);
    const midPt = latLngs[midIdx];
    if (feat.status !== 'minor') {
      const label = L.marker(midPt, {
        icon: L.divIcon({
          className: 'trade-label',
          html: '<span style="color:' + feat.color + '">' + feat.name + '</span>',
          iconSize: null,
          iconAnchor: [0, 0]
        }),
        interactive: false,
        pane: 'tooltipPane'
      });
      label.addTo(map);
      tradeRouteLabels.push(label);
    }

    const item = document.createElement('div');
    item.className = 'legend-item';
    const lineStyle = feat.status === 'peak' ? '━━━' : feat.status === 'active' ? '──' : '╌╌╌';
    item.innerHTML = '<span class="legend-line" style="color:' + feat.color + '">' + lineStyle + '</span><span>' + feat.name + '</span>';
    legendEl.appendChild(item);
  });
}

function updateTradeRoutesForYear(year) {
  var idx = getTradeRouteKeyframeForYear(year);
  if (idx !== currentTradeRouteIndex || tradeRouteLayers.length === 0) {
    currentTradeRouteIndex = idx;
    if (tradeRoutesVisible) {
      renderTradeRouteKeyframe(idx, tradeRouteOpacity);
    }
  }
}

// ============================================================
// LANGUAGE LAYER RENDERING
// ============================================================

function getLanguageKeyframeForYear(year) {
  let best = 0;
  for (let i = 0; i < LANGUAGE_KEYFRAMES.length; i++) {
    if (LANGUAGE_KEYFRAMES[i].year <= year) best = i;
  }
  return best;
}

function clearLanguageLayers() {
  languageLayers.forEach(layer => map.removeLayer(layer));
  languageLayers = [];
  languageLabels.forEach(label => map.removeLayer(label));
  languageLabels = [];
}

function renderLanguageKeyframe(index, opacity) {
  clearLanguageLayers();
  if (!languageVisible) return;

  const kf = LANGUAGE_KEYFRAMES[index];
  if (!kf) return;

  const legendEl = document.getElementById('language-legend-items');
  legendEl.innerHTML = '';

  kf.features.forEach(feat => {
    let latLngs;
    if (feat.isMulti) {
      latLngs = feat.coords.map(ring => ring.map(c => [c[1], c[0]]));
    } else {
      latLngs = feat.coords[0].map(c => [c[1], c[0]]);
    }

    const polygon = L.polygon(latLngs, {
      color: feat.color,
      fillColor: feat.color,
      fillOpacity: opacity,
      weight: 1.5,
      opacity: 0.5,
      dashArray: '3, 5',
      smoothFactor: 1.5
    });

    polygon.bindTooltip(feat.name, {
      className: 'empire-tooltip',
      sticky: true,
      direction: 'top',
      offset: [0, -10]
    });

    polygon.bindPopup(
      '<div class="popup-title" style="color:' + feat.color + '">' + feat.name + '</div>' +
      '<div class="popup-desc">' + feat.desc + '</div>',
      { maxWidth: 280 }
    );

    polygon.addTo(map);
    languageLayers.push(polygon);

    // Language labels — small-caps style
    const bounds = polygon.getBounds();
    const center = bounds.getCenter();
    const sizeClass = getPolygonSizeClass(bounds);
    if (sizeClass) {
      const label = L.marker(center, {
        icon: L.divIcon({
          className: 'language-label ' + sizeClass,
          html: '<span style="color:' + feat.color + '">' + feat.name + '</span>',
          iconSize: null,
          iconAnchor: [0, 0]
        }),
        interactive: false,
        pane: 'tooltipPane'
      });
      label._empireBounds = bounds;
      label.addTo(map);
      languageLabels.push(label);
    }

    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = '<span class="legend-color" style="background:' + feat.color + '"></span><span>' + feat.name + '</span>';
    legendEl.appendChild(item);
  });
}

function updateLanguageForYear(year) {
  var idx = getLanguageKeyframeForYear(year);
  if (idx !== currentLanguageIndex || languageLayers.length === 0) {
    currentLanguageIndex = idx;
    if (languageVisible) {
      renderLanguageKeyframe(idx, languageOpacity);
    }
  }
}

// ============================================================
// LABEL UTILITIES
// ============================================================

function getPolygonSizeClass(bounds) {
  const ne = map.latLngToContainerPoint(bounds.getNorthEast());
  const sw = map.latLngToContainerPoint(bounds.getSouthWest());
  const pixelWidth = Math.abs(ne.x - sw.x);
  const pixelHeight = Math.abs(ne.y - sw.y);
  const pixelSize = Math.max(pixelWidth, pixelHeight);
  if (pixelSize > 150) return 'large';
  if (pixelSize > 80) return 'medium';
  if (pixelSize > 40) return 'small';
  return null;
}

function updateLabelVisibility() {
  // Political labels removed — too cluttered; use legend + hover instead
  // Religion labels — only if religion layer is visible
  if (religionVisible) {
    religionLabels.forEach(label => {
      const sizeClass = getPolygonSizeClass(label._empireBounds);
      if (sizeClass) {
        if (!map.hasLayer(label)) label.addTo(map);
      } else {
        if (map.hasLayer(label)) map.removeLayer(label);
      }
    });
  }
  // Language labels — only if language layer is visible
  if (languageVisible) {
    languageLabels.forEach(label => {
      const sizeClass = getPolygonSizeClass(label._empireBounds);
      if (sizeClass) {
        if (!map.hasLayer(label)) label.addTo(map);
      } else {
        if (map.hasLayer(label)) map.removeLayer(label);
      }
    });
  }
}
