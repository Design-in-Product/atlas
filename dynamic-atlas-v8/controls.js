// ============================================================
// LAYERS PANEL — open / close
// ============================================================

var layersPanel = document.getElementById('layers-panel');
var layersToggle = document.getElementById('layers-toggle');

function openLayersPanel() {
  layersPanel.classList.add('open');
  layersToggle.classList.add('panel-open');
}

function closeLayersPanel() {
  layersPanel.classList.remove('open');
  layersToggle.classList.remove('panel-open');
}

layersToggle.addEventListener('click', openLayersPanel);
document.getElementById('layers-panel-close').addEventListener('click', closeLayersPanel);

// Close panel on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && layersPanel.classList.contains('open')) {
    closeLayersPanel();
  }
});

// ============================================================
// LAYER CONTROLS — visibility toggles and opacity sliders
// Labels are tied to their parent layer: political labels show
// when political is on, religion labels show when religion is on.
// ============================================================

// Political layer controls
document.getElementById('layer-political').addEventListener('change', function() {
  politicalVisible = this.checked;
  document.getElementById('political-legend').style.display = politicalVisible ? 'block' : 'none';
  // Re-render: this properly adds or removes all political layers and labels
  renderKeyframe(currentKeyframeIndex, targetOpacity);
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

// Religion layer controls
document.getElementById('layer-religion').addEventListener('change', function() {
  religionVisible = this.checked;
  document.getElementById('religion-legend').style.display = religionVisible ? 'block' : 'none';
  if (religionVisible) {
    renderReligionKeyframe(currentReligionIndex, religionOpacity);
  } else {
    clearReligionLayers();
  }
});

document.getElementById('opacity-religion').addEventListener('input', function() {
  religionOpacity = parseFloat(this.value);
  if (religionVisible) {
    religionLayers.forEach(function(layer) {
      layer.setStyle({ fillOpacity: religionOpacity });
    });
  }
});

// Language layer controls
document.getElementById('layer-language').addEventListener('change', function() {
  languageVisible = this.checked;
  document.getElementById('language-legend').style.display = languageVisible ? 'block' : 'none';
  if (languageVisible) {
    renderLanguageKeyframe(currentLanguageIndex, languageOpacity);
  } else {
    clearLanguageLayers();
  }
});

document.getElementById('opacity-language').addEventListener('input', function() {
  languageOpacity = parseFloat(this.value);
  if (languageVisible) {
    languageLayers.forEach(function(layer) {
      layer.setStyle({ fillOpacity: languageOpacity });
    });
  }
});

// Trade routes layer controls
document.getElementById('layer-trade').addEventListener('change', function() {
  tradeRoutesVisible = this.checked;
  document.getElementById('trade-legend').style.display = tradeRoutesVisible ? 'block' : 'none';
  if (tradeRoutesVisible) {
    renderTradeRouteKeyframe(currentTradeRouteIndex, tradeRouteOpacity);
  } else {
    clearTradeRouteLayers();
  }
});

document.getElementById('opacity-trade').addEventListener('input', function() {
  tradeRouteOpacity = parseFloat(this.value);
  if (tradeRoutesVisible) {
    // Re-render with new opacity scale
    renderTradeRouteKeyframe(currentTradeRouteIndex, tradeRouteOpacity);
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

// ============================================================
// INITIALIZATION — must be at bottom since this is the last
// script loaded and all globals/functions are now available
// ============================================================

// ============================================================
// FULLSCREEN — uses Fullscreen API with iOS Safari fallback
// ============================================================

var fullscreenBtn = document.getElementById('fullscreen-btn');

function isFullscreen() {
  return !!(document.fullscreenElement || document.webkitFullscreenElement);
}

function enterFullscreen() {
  var el = document.documentElement;
  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen(); // Safari
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

function updateFullscreenIcon() {
  fullscreenBtn.innerHTML = isFullscreen() ? '&#x2716;' : '&#x26F6;';
  fullscreenBtn.title = isFullscreen() ? 'Exit Fullscreen' : 'Fullscreen';
}

if (fullscreenBtn) {
  fullscreenBtn.addEventListener('click', function() {
    if (isFullscreen()) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  });

  document.addEventListener('fullscreenchange', function() {
    updateFullscreenIcon();
    // Leaflet needs a nudge after resize
    setTimeout(function() { map.invalidateSize(); }, 100);
  });
  document.addEventListener('webkitfullscreenchange', function() {
    updateFullscreenIcon();
    setTimeout(function() { map.invalidateSize(); }, 100);
  });
}

// ============================================================
// INITIALIZATION — must be at bottom since this is the last
// script loaded and all globals/functions are now available
// ============================================================

map.on('zoomend', updateLabelVisibility);
renderKeyframe(0, targetOpacity);
updateDateDisplay(minYear);
