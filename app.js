import { WEAPONS, CHAPTERS } from './data.js';

const TRAILER_ITEM = [
  {
    id: 'trailer',
    file: 'trailer',
    name: 'Trailer Gameplay 3D',
    tag: 'Showcase Oficial · Pixel Shooter 3D',
    desc: 'Veja o combate frenético em arena 3D, efeitos de armas, habilidades especiais e batalhas contra chefões gigantescos.',
    features: [
      '25 missões em 5 biomas + Modo Infinito',
      '18+ armas desbloqueáveis com efeitos únicos',
      'Combates intensos contra hordas e chefões gigantes'
    ],
    pal: ['#38bdf8', '#a855f7', '#4ade80']
  }
];

let activeCategory = 'weapons';

const videoEl = document.getElementById('showcase-video');
const fallbackEl = document.getElementById('video-fallback');
const fallbackFileEl = document.getElementById('video-fallback-file');
const canvasWrap = document.getElementById('canvas-wrap');

const selectorEl = document.getElementById('model-selector');
const tagEl = document.getElementById('inspector-tag');
const titleEl = document.getElementById('inspector-title');
const descEl = document.getElementById('inspector-desc');
const statsEl = document.getElementById('inspector-stats');
const featuresEl = document.getElementById('inspector-features');
const paletteEl = document.getElementById('inspector-palette');

function loadVideo(fileKey, accentHex = '#38bdf8', ext = 'webm') {
  const videoPath = `./assets/videos/${fileKey}.${ext}`;
  const isTrailer = activeCategory === 'trailer';
  canvasWrap.style.boxShadow = `inset 0 0 80px ${accentHex}22`;
  fallbackEl.classList.add('hidden');
  fallbackFileEl.textContent = `website/assets/videos/${fileKey}.${ext}`;

  videoEl.controls = isTrailer;
  videoEl.muted = true;
  videoEl.loop = true;
  videoEl.style.pointerEvents = isTrailer ? 'auto' : 'none';
  videoEl.innerHTML = '';
  videoEl.src = videoPath;
  videoEl.load();
  videoEl.play().catch(() => {
    // Autoplay pode ser pausado pelo navegador se tiver som; sem problemas
  });
}

videoEl.addEventListener('error', () => {
  fallbackEl.classList.remove('hidden');
});

videoEl.addEventListener('loadeddata', () => {
  fallbackEl.classList.add('hidden');
});

function getActiveList() {
  if (activeCategory === 'trailer') return TRAILER_ITEM;
  return WEAPONS;
}

function selectItem(index) {
  const list = getActiveList();
  const item = list[index];

  document.querySelectorAll('.model-pill').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });

  tagEl.textContent = item.tag;
  titleEl.textContent = item.name;
  descEl.textContent = item.desc;

  if (activeCategory === 'weapons') {
    statsEl.style.display = 'grid';
    featuresEl.style.display = 'none';
    paletteEl.style.display = 'none';

    const priceText = item.price === 0 ? 'Grátis' : `${item.price} moedas`;
    statsEl.innerHTML = `
      <div class="stat-box"><span class="label">Dano Base</span><span class="val">${item.dmg}</span></div>
      <div class="stat-box"><span class="label">Cadência</span><span class="val">${item.rate}/s</span></div>
      <div class="stat-box"><span class="label">Alcance</span><span class="val">${item.range} px</span></div>
      <div class="stat-box"><span class="label">Loja</span><span class="val">${priceText}</span></div>
    `;
    loadVideo(item.id, item.color, 'webm');
  } else {
    statsEl.style.display = 'none';
    featuresEl.style.display = 'flex';
    paletteEl.style.display = 'flex';

    featuresEl.innerHTML = item.features.map((f) => `<li>${f}</li>`).join('');
    paletteEl.innerHTML = `<span>Paleta:</span>` + item.pal.map((c) => `<span class="swatch" style="background:${c}"></span>`).join('');

    loadVideo(item.file || item.id, item.pal[0], 'mp4');
  }
}

function renderSelector() {
  const list = getActiveList();
  selectorEl.innerHTML = list
    .map((item, i) => {
      const dotColor = item.color || (item.pal && item.pal[0]) || '#38bdf8';
      return `<button class="model-pill ${i === 0 ? 'active' : ''}" data-index="${i}">
        <span class="pill-dot" style="background:${dotColor}"></span>
        ${item.name}
      </button>`;
    })
    .join('');

  selectorEl.querySelectorAll('.model-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      selectItem(Number(btn.dataset.index));
    });
  });

  selectItem(0);
}

document.querySelectorAll('.tab-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.category;
    renderSelector();
  });
});

// Render Chapters
const chaptersGrid = document.getElementById('chapters-grid');
chaptersGrid.innerHTML = CHAPTERS.map(
  (ch) => `
  <article class="chapter-card" style="border-top: 3px solid ${ch.color}">
    <span class="chapter-num" style="color:${ch.color}">CAPÍTULO ${ch.num}</span>
    <h3>${ch.name}</h3>
    <div class="chapter-missions">${ch.missions}</div>
    <p class="chapter-desc">${ch.desc}</p>
    <div class="chapter-boss"><strong>Chefes:</strong> ${ch.boss}</div>
  </article>
`
).join('');

// Download Modal
const modal = document.getElementById('download-modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalFile = document.getElementById('modal-file');
const modalClose = document.getElementById('modal-close');

function openDownloadModal(platform) {
  if (platform === 'pc') {
    modalTitle.textContent = 'Download para Windows (PC)';
    modalText.textContent = 'Versão desktop gerada em Godot 4. Para publicar online, hospede o executável (ou .zip da pasta builds) e aponte este botão para o link de download.';
    modalFile.textContent = 'builds/Pixel Shooter 3D pc v4.exe';
  } else {
    modalTitle.textContent = 'Download para Android (APK)';
    modalText.textContent = 'Versão mobile arm64-v8a com controles por toque e mira configurável. Exporte o APK no Godot e hospede-o para liberar o download direto.';
    modalFile.textContent = 'PixelShooter3D v6.1.apk';
  }
  modal.classList.add('open');
}

document.querySelectorAll('[data-download]').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    openDownloadModal(btn.dataset.download);
  });
});

modalClose.addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('open');
});

renderSelector();
