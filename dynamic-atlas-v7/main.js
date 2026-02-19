// ============================================================
// MAIN — map initialization, global state
// ============================================================

// Map setup
var map = L.map('map', {
  center: [32, 70],
  zoom: 3,
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

// Political layer state
var currentLayers = [];
var currentLabels = [];
var politicalVisible = true;
var currentKeyframeIndex = 0;
var isPlaying = false;
var playSpeed = 0.5;
var animationId = null;
var currentYear = KEYFRAMES[0].year;
var targetOpacity = 0.5;
var isTransitioning = false;

// Religion layer state
var religionLayers = [];
var religionLabels = [];
var religionVisible = false;
var religionOpacity = 0.2;
var currentReligionIndex = 0;

// Trade routes layer state
var tradeRouteLayers = [];
var tradeRouteLabels = [];
var tradeRoutesVisible = false;
var tradeRouteOpacity = 1.0;
var currentTradeRouteIndex = 0;

// Language layer state
var languageLayers = [];
var languageLabels = [];
var languageVisible = false;
var languageOpacity = 0.15;
var currentLanguageIndex = 0;

var keyframeDates = KEYFRAMES.map(function(k) { return k.year; });
var minYear = KEYFRAMES[0].year;
var maxYear = KEYFRAMES[KEYFRAMES.length - 1].year;

// Update slider range to match actual data
document.getElementById('timeline-slider').min = minYear;
document.getElementById('timeline-slider').max = maxYear;
document.getElementById('timeline-slider').value = minYear;
