const endDate = new Date('2026-05-23T18:00:00').getTime();

const els = {
  w: document.getElementById('w'),
  d: document.getElementById('d'),
  h: document.getElementById('h'),
  m: document.getElementById('m'),
  s: document.getElementById('s')
};

function animate(el, value) {
  if (el.textContent !== value) {
    el.classList.add('flip');
    setTimeout(() => {
      el.textContent = value;
      el.classList.remove('flip');
    }, 200);
  }
}

function updateTimer() {
  const now = new Date().getTime();
  let diff = endDate - now;

  if (diff <= 0) return;

  const seconds = Math.floor(diff / 1000);
  const weeks = Math.floor(seconds / (7 * 24 * 60 * 60));
  const days = Math.floor((seconds % (7 * 24 * 60 * 60)) / (24 * 60 * 60));
  const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  const secs = Math.floor(seconds % 60);

  animate(els.w, String(weeks).padStart(2, '0'));
  animate(els.d, String(days).padStart(2, '0'));
  animate(els.h, String(hours).padStart(2, '0'));
  animate(els.m, String(minutes).padStart(2, '0'));
  animate(els.s, String(secs).padStart(2, '0'));
}

setInterval(updateTimer, 1000);
updateTimer();