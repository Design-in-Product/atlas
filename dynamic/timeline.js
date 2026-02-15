// ============================================================
// TIMELINE CONTROLS — play/pause, slider, speed, tick marks
// ============================================================

const slider = document.getElementById('timeline-slider');
const dateDisplay = document.getElementById('date-display');
const playBtn = document.getElementById('play-btn');
const speedSelect = document.getElementById('speed-select');

function formatYear(year) {
  if (year < 0) return Math.abs(year) + ' BCE';
  if (year === 0) return '1 CE';
  return year + ' CE';
}

function updateDateDisplay(year) {
  dateDisplay.textContent = formatYear(Math.round(year));
}

// Keyframe tick marks
const markersEl = document.getElementById('keyframe-markers');
KEYFRAMES.forEach(function(kf) {
  const pct = ((kf.year - minYear) / (maxYear - minYear)) * 100;
  const tick = document.createElement('div');
  tick.className = 'keyframe-tick';
  tick.style.left = pct + '%';
  markersEl.appendChild(tick);

  const lbl = document.createElement('div');
  lbl.className = 'keyframe-label';
  lbl.style.left = pct + '%';
  lbl.textContent = kf.label;
  markersEl.appendChild(lbl);
});

// Slider input
slider.addEventListener('input', function() {
  currentYear = parseInt(this.value);
  updateDateDisplay(currentYear);
  var idx = getKeyframeForYear(currentYear);
  if (idx !== currentKeyframeIndex) {
    transitionToKeyframe(idx, 400);
  }
});

// Play/Pause
playBtn.addEventListener('click', function() {
  isPlaying = !isPlaying;
  this.innerHTML = isPlaying ? '&#9646;&#9646;' : '&#9654;';
  this.classList.toggle('active', isPlaying);
  if (isPlaying) {
    if (currentYear >= maxYear) {
      currentYear = minYear;
      slider.value = currentYear;
    }
    lastPlayTime = performance.now();
    playAnimation();
  }
});

speedSelect.addEventListener('change', function() {
  playSpeed = parseFloat(this.value);
});

var lastPlayTime = 0;

function playAnimation() {
  if (!isPlaying) return;

  var now = performance.now();
  var delta = now - lastPlayTime;
  lastPlayTime = now;

  var yearsPerMs = 100 / 1000;
  currentYear += delta * yearsPerMs * playSpeed;

  if (currentYear >= maxYear) {
    currentYear = maxYear;
    isPlaying = false;
    playBtn.innerHTML = '&#9654;';
    playBtn.classList.remove('active');
  }

  slider.value = currentYear;
  updateDateDisplay(currentYear);

  var idx = getKeyframeForYear(currentYear);
  if (idx !== currentKeyframeIndex) {
    transitionToKeyframe(idx);
  }

  if (isPlaying) {
    animationId = requestAnimationFrame(playAnimation);
  }
}
