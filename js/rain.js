// ===========================================
// Rain + Lightning — unheaded.org
// Rain falls top-down. Lightning strikes once
// per round, random interval 13-23 seconds.
// ===========================================

const canvas = document.getElementById('rain-canvas');
const ctx = canvas.getContext('2d');

let drops = [];
const DROP_COUNT = 280;
const DROP_COLOR = 'rgba(180, 200, 240,';

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = document.body.scrollHeight;
}

function createDrops() {
  drops = [];
  for (let i = 0; i < DROP_COUNT; i++) {
    drops.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      len: Math.random() * 18 + 8,
      speed: Math.random() * 9 + 6,
      opacity: Math.random() * 0.22 + 0.08,
      drift: (Math.random() - 0.5) * 0.3
    });
  }
}

function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drops.forEach(d => {
    ctx.beginPath();
    ctx.moveTo(d.x, d.y);
    ctx.lineTo(d.x + d.drift * d.len, d.y + d.len);
    ctx.strokeStyle = DROP_COLOR + d.opacity + ')';
    ctx.lineWidth = 1;
    ctx.stroke();

    d.y += d.speed;
    d.x += d.drift;

    if (d.y > canvas.height) {
      d.y = -d.len;
      d.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawRain);
}

// ===========================================
// Lightning
// ===========================================
let flashTimer = null;

function bolt(x, y1, y2, branches) {
  const segments = 12 + Math.floor(Math.random() * 8);
  const dy = (y2 - y1) / segments;
  let cx = x;
  let cy = y1;

  ctx.beginPath();
  ctx.moveTo(cx, cy);

  for (let i = 0; i < segments; i++) {
    cx += (Math.random() - 0.5) * 60;
    cy += dy + (Math.random() - 0.5) * 10;
    ctx.lineTo(cx, cy);

    // branch
    if (branches > 0 && Math.random() < 0.25) {
      const bx = cx;
      const by = cy;
      const bLen = 40 + Math.random() * 80;
      const bDir = Math.random() < 0.5 ? -1 : 1;
      ctx.moveTo(bx, by);
      const bSegs = 4 + Math.floor(Math.random() * 4);
      let bcx = bx, bcy = by;
      for (let j = 0; j < bSegs; j++) {
        bcx += bDir * (10 + Math.random() * 20);
        bcy += bLen / bSegs + (Math.random() - 0.5) * 8;
        ctx.lineTo(bcx, bcy);
      }
      ctx.moveTo(cx, cy);
    }
  }

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.lineWidth = 1.5;
  ctx.shadowColor = 'rgba(255, 255, 255, 0.6)';
  ctx.shadowBlur = 12;
  ctx.stroke();
  ctx.shadowBlur = 0;
}

function flash() {
  // white flash overlay
  const overlay = document.getElementById('lightning-overlay');
  overlay.style.opacity = '0.08';
  setTimeout(() => { overlay.style.opacity = '0.03'; }, 60);
  setTimeout(() => { overlay.style.opacity = '0'; }, 150);

  // draw bolt
  const x = Math.random() * canvas.width;
  bolt(x, 0, canvas.height * (0.4 + Math.random() * 0.4), 2);

  // second strike sometimes
  if (Math.random() < 0.3) {
    setTimeout(() => {
      overlay.style.opacity = '0.05';
      setTimeout(() => { overlay.style.opacity = '0'; }, 100);
      const x2 = x + (Math.random() - 0.5) * 200;
      bolt(x2, 0, canvas.height * (0.3 + Math.random() * 0.4), 1);
    }, 80 + Math.random() * 120);
  }

  scheduleFlash();
}

function scheduleFlash() {
  // 13-23 seconds, random
  const delay = (13 + Math.random() * 10) * 1000;
  flashTimer = setTimeout(flash, delay);
}

// ===========================================
// Init
// ===========================================
resize();
createDrops();
drawRain();
scheduleFlash();

window.addEventListener('resize', () => {
  resize();
  createDrops();
});
