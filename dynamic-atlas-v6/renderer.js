// ============================================================
// KEYFRAME RENDERING — renders a static keyframe with polygons,
// labels, tooltips, popups, and legend
// ============================================================

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

  kf.features.forEach(feat => {
    let latLngs;
    if (feat.isMulti) {
      latLngs = feat.coords.map(ring => ring.map(c => [c[1], c[0]]));
    } else {
      latLngs = feat.coords[0].map(c => [c[1], c[0]]);
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

    const bounds = polygon.getBounds();
    const center = bounds.getCenter();
    const sizeClass = getPolygonSizeClass(bounds);
    if (sizeClass) {
      const label = L.marker(center, {
        icon: L.divIcon({
          className: 'empire-label ' + sizeClass,
          html: '<span style="color:' + feat.color + '">' + feat.name + '</span>',
          iconSize: null,
          iconAnchor: [0, 0]
        }),
        interactive: false,
        pane: 'tooltipPane'
      });
      label._empireBounds = bounds;
      if (labelsVisible) label.addTo(map);
      currentLabels.push(label);
    }

    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = '<span class="legend-color" style="background:' + feat.color + '"></span><span>' + feat.name + '</span>';
    legendEl.appendChild(item);
  });

  updateLabelVisibility();
  document.getElementById('timeline-context').textContent = kf.context;
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
  if (!labelsVisible) return;
  currentLabels.forEach(label => {
    const sizeClass = getPolygonSizeClass(label._empireBounds);
    if (sizeClass) {
      if (!map.hasLayer(label)) label.addTo(map);
    } else {
      if (map.hasLayer(label)) map.removeLayer(label);
    }
  });
}
