const shares = [
  {
    id: "S01",
    name: "玉珠串微距攝影",
    description: "以自然光與微距鏡頭記錄玉珠的形制、光澤與搭配細節。",
    folder: "jade-bead-strand",
    count: 8
  },
  {
    id: "S02",
    name: "巧雕玉件微距攝影",
    description: "近距離欣賞俏色巧雕、立體層次與局部線條。",
    folder: "carved-jade",
    count: 6
  },
  {
    id: "S03",
    name: "原籽隨形珠特寫",
    description: "逐顆記錄隨形玉珠的皮色、質地、天然紋理與表面光感。",
    folder: "seed-jade-bracelet",
    count: 20
  },
  {
    id: "S04",
    name: "彌勒玉件微距攝影",
    description: "以微距鏡頭記錄彌勒玉件的雕工、玉質、皮色與自然紋理。",
    folder: "maitreya-jade",
    count: 5
  }
].map((item) => ({
  ...item,
  photos: Array.from({ length: item.count }, (_, index) => `assets/shares/${item.folder}/${String(index + 1).padStart(2, "0")}.jpg`)
}));

const grid = document.querySelector("#shareGrid");
const modal = document.querySelector("#shareModal");
const image = document.querySelector("#shareImage");
const thumbs = document.querySelector("#shareThumbs");
let activeItem = null;
let activePhoto = 0;
let lastFocused = null;

function renderShares() {
  document.querySelector("#shareCount").textContent = `共 ${shares.length} 組收藏影像`;
  grid.innerHTML = shares.map((item) => `
    <article class="collection-card share-card">
      <button class="card-open" type="button" data-id="${item.id}" aria-label="瀏覽${item.name}全部照片">
        <div class="thumb"><img src="${item.photos[0]}" alt="${item.name}縮圖" loading="lazy"></div>
        <div class="card-copy"><span class="item-number">${item.id}</span><h3>${item.name}</h3><p>${item.description}</p><div class="photo-total"><span>查看特寫</span><span>${item.count} 張</span></div></div>
      </button>
    </article>`).join("");
}

function renderThumbs() {
  thumbs.innerHTML = activeItem.photos.map((source, index) => `
    <button class="share-thumb${index === activePhoto ? " active" : ""}" type="button" data-photo="${index}" aria-label="查看第 ${index + 1} 張照片">
      <img src="${source}" alt="" loading="lazy">
    </button>`).join("");
}

function updatePhoto(refreshThumbs = true) {
  image.src = activeItem.photos[activePhoto];
  image.alt = `${activeItem.name}，第 ${activePhoto + 1} 張照片`;
  document.querySelector("#sharePhotoCount").textContent = `${activePhoto + 1} / ${activeItem.count}`;
  if (refreshThumbs) renderThumbs();
}

function openShare(item, trigger) {
  activeItem = item;
  activePhoto = 0;
  lastFocused = trigger;
  document.querySelector("#shareName").textContent = item.name;
  document.querySelector("#shareDescription").textContent = item.description;
  updatePhoto();
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".close").focus();
}

function closeShare() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  image.removeAttribute("src");
  lastFocused?.focus();
}

function movePhoto(step) {
  activePhoto = (activePhoto + step + activeItem.count) % activeItem.count;
  updatePhoto();
}

grid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-id]");
  if (trigger) openShare(shares.find((item) => item.id === trigger.dataset.id), trigger);
});
thumbs.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-photo]");
  if (!trigger) return;
  activePhoto = Number(trigger.dataset.photo);
  updatePhoto();
});
modal.addEventListener("click", (event) => { if (event.target.closest("[data-close]")) closeShare(); });
document.querySelector("#prevShare").addEventListener("click", () => movePhoto(-1));
document.querySelector("#nextShare").addEventListener("click", () => movePhoto(1));
document.addEventListener("keydown", (event) => {
  if (modal.hidden) return;
  if (event.key === "Escape") closeShare();
  if (event.key === "ArrowLeft") movePhoto(-1);
  if (event.key === "ArrowRight") movePhoto(1);
});

renderShares();
