// ============================================================
// LAYER CONTROLS — visibility toggles and opacity sliders
// ============================================================

document.getElementById('layer-political').addEventListener('change', function() {
  var visible = this.checked;
  currentLayers.forEach(function(layer) {
    if (visible) {
      layer.setStyle({ fillOpacity: targetOpacity, opacity: 0.8 });
    } else {
      layer.setStyle({ fillOpacity: 0, opacity: 0 });
    }
  });
});

document.getElementById('opacity-political').addEventListener('input', function() {
  targetOpacity = parseFloat(this.value);
  var isVisible = document.getElementById('layer-political').checked;
  if (isVisible) {
    currentLayers.forEach(function(layer) {
      layer.setStyle({ fillOpacity: targetOpacity });
    });
  }
});

// Modern borders reference layer
document.getElementById('layer-modern').addEventListener('change', function() {
  if (this.checked) {
    modernLabelsLayer.addTo(map);
  } else {
    map.removeLayer(modernLabelsLayer);
  }
});

document.getElementById('opacity-modern').addEventListener('input', function() {
  modernLabelsLayer.setOpacity(parseFloat(this.value));
});

// Empire labels toggle
document.getElementById('layer-labels').addEventListener('change', function() {
  labelsVisible = this.checked;
  if (labelsVisible) {
    currentLabels.forEach(function(label) { label.addTo(map); });
    updateLabelVisibility();
  } else {
    currentLabels.forEach(function(label) { map.removeLayer(label); });
  }
});

// ============================================================
// INITIALIZATION — runs after all scripts are loaded
// ============================================================

map.on('zoomend', updateLabelVisibility);
renderKeyframe(0, targetOpacity);
updateDateDisplay(minYear);
