// ============================================================
// MAIN — map initialization, global state
// ============================================================

// Map setup
var map = L.map('map', {
  center: [34, 30],
  zoom: 4,
  minZoom: 3,
  maxZoom: 8,
  zoomControl: true,
  attributionControl: true
});

L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>) &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
  maxZoom: 17,
  subdomains: 'abc'
}).addTo(map);

// Modern reference layer (off by default)
var modernLabelsLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png', {
  subdomains: 'abcd',
  maxZoom: 20,
  opacity: 0.3,
  pane: 'shadowPane'
});

// ============================================================
// GLOBAL STATE
// ============================================================

var currentLayers = [];
var currentLabels = [];
var labelsVisible = true;
var currentKeyframeIndex = 0;
var isPlaying = false;
var playSpeed = 0.5;
var animationId = null;
var currentYear = KEYFRAMES[0].year;
var targetOpacity = 0.5;
var isTransitioning = false;

var keyframeDates = KEYFRAMES.map(function(k) { return k.year; });
var minYear = KEYFRAMES[0].year;
var maxYear = KEYFRAMES[KEYFRAMES.length - 1].year;

// Update slider range to match actual data
document.getElementById('timeline-slider').min = minYear;
document.getElementById('timeline-slider').max = maxYear;
document.getElementById('timeline-slider').value = minYear;
