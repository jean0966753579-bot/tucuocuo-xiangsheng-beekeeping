// 新增收藏時，只要在這個陣列複製一組資料並修改內容即可。
const collections = [
  {
    id: "001",
    name: "小龍龜",
    material: "開門的小籽",
    size: "約 35 × 2 × 15 mm",
    weight: "約 19 克",
    description: "開門的小籽。",
    price: "NT$ 15,000",
    thumbnail: "assets/collections/001/001-0.jpg",
    photos: [
      "assets/collections/001/001-0.jpg",
      "assets/collections/001/001-1.jpg",
      "assets/collections/001/001-2.jpg",
      "assets/collections/001/001-3.jpg",
      "assets/collections/001/001-4.jpg",
      "assets/collections/001/001-5.jpg",
      "assets/collections/001/001-6.jpg",
      "assets/collections/001/001-7.jpg",
      "assets/collections/001/001-8.jpg",
      "assets/collections/001/001-9.jpg",
      "assets/collections/001/001-10.jpg",
      "assets/collections/001/001-11.jpg"
    ]
  },
  {
    id: "002",
    name: "紅皮沁龍龜",
    material: "紅皮沁玉雕",
    size: "未提供",
    weight: "未提供",
    description: "可見明顯紅沁入肉，肢體雕工細緻，肌理有力。",
    price: "NT$ 15,000",
    thumbnail: "assets/collections/002/002-0.jpg",
    photos: [
      "assets/collections/002/002-0.jpg",
      "assets/collections/002/002-1.jpg",
      "assets/collections/002/002-2.jpg",
      "assets/collections/002/002-3.jpg",
      "assets/collections/002/002-4.jpg",
      "assets/collections/002/002-5.jpg",
      "assets/collections/002/002-6.jpg",
      "assets/collections/002/002-7.jpg",
      "assets/collections/002/002-8.jpg",
      "assets/collections/002/002-9.jpg",
      "assets/collections/002/002-10.jpg"
    ]
  },
  {
    id: "009",
    name: "貔貅",
    material: "新疆且末老油料",
    size: "未提供",
    weight: "39 克",
    description: "精品新疆且末老油料，玉質細膩油潤、糯性好；純手工摘色雕刻招財貔貅，圓潤飽滿，是招財守財的好夥伴，精品掛件值得擁有。",
    price: "NT$ 6,600",
    thumbnail: "assets/collections/009/009-0.jpg",
    photos: [
      "assets/collections/009/009-0.jpg",
      "assets/collections/009/009-1.jpg",
      "assets/collections/009/009-2.jpg"
    ]
  },
  {
    id: "025",
    name: "腰纏萬貫",
    material: "青花三色籽料巧雕",
    size: "約 40 × 81 × 26 mm",
    weight: "130 克",
    description: "青花籽料，三色籽料巧雕，工藝與料子皆有特色。",
    price: "NT$ 29,000",
    thumbnail: "assets/collections/025/025-0.jpg",
    photos: [
      "assets/collections/025/025-0.jpg",
      "assets/collections/025/025-1.jpg",
      "assets/collections/025/025-2.jpg",
      "assets/collections/025/025-3.jpg",
      "assets/collections/025/025-4.jpg",
      "assets/collections/025/025-5.jpg",
      "assets/collections/025/025-6.jpg"
    ]
  },
  {
    id: "026",
    name: "青玉獾",
    material: "新疆和闐籽料",
    size: "約 42.3 × 22 × 22 mm",
    weight: "含繩約 28.6 克",
    description: "早期作品，型制古樸、十分有味，皮殼包漿漂亮，整體品項完整。獾音同歡，取其吉意。「提油」用意於摹古及顯色，使用的是純天然原料；一般經過提油的玉器，會較為光澤油潤。",
    price: "NT$ 8,600",
    thumbnail: "assets/collections/026/026-0.jpg",
    photos: [
      "assets/collections/026/026-0.jpg",
      "assets/collections/026/026-1.jpg",
      "assets/collections/026/026-2.jpg",
      "assets/collections/026/026-3.jpg",
      "assets/collections/026/026-4.jpg"
    ]
  },
  {
    id: "031",
    name: "白玉松鼠葡萄",
    material: "脂白和田玉鏤空雕件",
    size: "未提供",
    weight: "未提供",
    description: "玉必有工，工必有意，意必吉祥。松寓蒼松長壽；鼠有「數來寶」之意，松鼠合寓財壽雙收、身體健康、財源滾滾。葡萄多籽，加上鼠的繁衍寓意，象徵多子多孫、子孫滿堂。以現代觀點來看，松鼠葡萄也象徵聚財與長壽，顆顆葡萄如同錢滾錢、錢母生錢子。",
    price: "NT$ 20,000",
    thumbnail: "assets/collections/031/031-0.jpg",
    photos: [
      "assets/collections/031/031-0.jpg",
      "assets/collections/031/031-1.jpg",
      "assets/collections/031/031-2.jpg",
      "assets/collections/031/031-3.jpg",
      "assets/collections/031/031-4.jpg",
      "assets/collections/031/031-5.jpg",
      "assets/collections/031/031-6.jpg",
      "assets/collections/031/031-7.jpg",
      "assets/collections/031/031-8.jpg",
      "assets/collections/031/031-9.jpg"
    ]
  },
  {
    id: "043",
    name: "帶子上朝",
    material: "新疆和闐籽料・雙貔貅",
    size: "約 48 × 32 × 20 mm",
    weight: "38.7 克",
    description: "鴻運當頭、帶子上朝。自然光拍攝，高青白上看二級，白度佳、料子好，肉眼略見結構；開門黑紅皮三色料，獨籽蘇州工藝，配戴合適。",
    price: "NT$ 18,000",
    thumbnail: "assets/collections/043/043-0.jpg",
    photos: [
      "assets/collections/043/043-0.jpg",
      "assets/collections/043/043-1.jpg",
      "assets/collections/043/043-2.jpg",
      "assets/collections/043/043-3.jpg",
      "assets/collections/043/043-4.jpg",
      "assets/collections/043/043-5.jpg",
      "assets/collections/043/043-6.jpg",
      "assets/collections/043/043-7.jpg",
      "assets/collections/043/043-8.jpg"
    ]
  },
  {
    id: "080",
    name: "籽料花貓",
    material: "新疆和田籽料・白底褐皮巧雕",
    size: "未提供",
    weight: "45 克",
    description: "白底褐皮巧雕，屁股處有兩條不明顯的籽綹紋，並由皮色自然掩映。",
    price: "NT$ 4,300",
    thumbnail: "assets/collections/080/080-0.jpg",
    photos: [
      "assets/collections/080/080-0.jpg",
      "assets/collections/080/080-1.jpg",
      "assets/collections/080/080-2.jpg"
    ]
  },
  {
    id: "081",
    name: "春水連珠帶飾",
    material: "玉雕連珠帶飾",
    size: "未提供",
    weight: "未提供",
    description: "觸覺感十分油潤，雕刻意境富有特色，適合腰掛盤玩。",
    price: "NT$ 4,800",
    thumbnail: "assets/collections/081/081-0.jpg",
    photos: [
      "assets/collections/081/081-0.jpg",
      "assets/collections/081/081-1.jpg"
    ]
  },
  {
    id: "171",
    name: "觀音（黑紅黃料巧雕）",
    material: "新疆和闐黃沁籽料・多色獨籽雕",
    size: "約 51 × 40 × 21 mm",
    weight: "61.4 克",
    description: "吉祥如意、逢凶化吉。黃沁籽料，黑、紅、黃、白多色料巧雕，獨籽雕刻，做工細緻好看；料上有硬僵，適合作為掛件。",
    price: "NT$ 16,000",
    thumbnail: "assets/collections/171/171-0.jpg",
    photos: [
      "assets/collections/171/171-0.jpg",
      "assets/collections/171/171-1.jpg",
      "assets/collections/171/171-2.jpg",
      "assets/collections/171/171-3.jpg",
      "assets/collections/171/171-4.jpg",
      "assets/collections/171/171-5.jpg"
    ]
  },
  {
    id: "172",
    name: "文玩核桃",
    material: "核桃",
    size: "未提供",
    weight: "未提供",
    description: "一對文玩核桃，僅供欣賞。",
    price: "僅供欣賞",
    thumbnail: "assets/collections/172/172-0.jpg",
    photos: [
      "assets/collections/172/172-0.jpg",
      "assets/collections/172/172-1.jpg",
      "assets/collections/172/172-2.jpg",
      "assets/collections/172/172-3.jpg",
      "assets/collections/172/172-4.jpg",
      "assets/collections/172/172-5.jpg",
      "assets/collections/172/172-6.jpg"
    ]
  }
];

const grid = document.querySelector("#collectionGrid");
const search = document.querySelector("#collectionSearch");
const resultCount = document.querySelector("#resultCount");
const modal = document.querySelector("#detailModal");
const image = document.querySelector("#detailImage");
let activeItem = null;
let activePhoto = 0;
let lastFocused = null;

function renderCollections(query = "") {
  const keyword = query.trim().toLowerCase();
  const items = collections.filter((item) => `${item.id} ${item.name} ${item.material} ${item.size} ${item.weight} ${item.description}`.toLowerCase().includes(keyword));
  resultCount.textContent = `共 ${items.length} 件收藏`;
  grid.innerHTML = items.length ? items.map((item) => `
    <article class="collection-card">
      <button class="card-open" type="button" data-id="${item.id}" aria-label="查看 No.${item.id} ${item.name} 詳細資料">
        <div class="thumb"><img src="${item.thumbnail}" alt="${item.name}縮圖" loading="lazy"></div>
        <div class="card-copy"><span class="item-number">NO. ${item.id}</span><h3>${item.name}</h3><p>${item.description}</p><div class="price"><span>參考價格</span><span>${item.price}</span></div></div>
      </button>
    </article>`).join("") : '<p class="empty">找不到符合的收藏，請換一個關鍵字。</p>';
}

function updatePhoto() {
  const source = activeItem.photos[activePhoto];
  image.src = source;
  image.alt = `${activeItem.name}，第 ${activePhoto + 1} 張照片`;
  document.querySelector("#photoCount").textContent = `${activePhoto + 1} / ${activeItem.photos.length}`;
  const hasMultiple = activeItem.photos.length > 1;
  document.querySelector("#prevPhoto").hidden = !hasMultiple;
  document.querySelector("#nextPhoto").hidden = !hasMultiple;
}

function openDetail(item, trigger) {
  activeItem = item; activePhoto = 0; lastFocused = trigger;
  document.querySelector("#detailNumber").textContent = `NO. ${item.id}`;
  document.querySelector("#detailName").textContent = item.name;
  document.querySelector("#detailMaterial").textContent = item.material;
  document.querySelector("#detailSize").textContent = item.size;
  document.querySelector("#detailWeight").textContent = item.weight;
  document.querySelector("#detailPrice").textContent = item.price;
  document.querySelector("#detailDescription").textContent = item.description;
  updatePhoto(); modal.hidden = false; document.body.classList.add("modal-open");
  modal.querySelector(".close").focus();
}

function closeDetail() {
  modal.hidden = true; document.body.classList.remove("modal-open");
  image.removeAttribute("src"); lastFocused?.focus();
}

function movePhoto(step) {
  activePhoto = (activePhoto + step + activeItem.photos.length) % activeItem.photos.length;
  updatePhoto();
}

grid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-id]");
  if (!trigger) return;
  openDetail(collections.find((item) => item.id === trigger.dataset.id), trigger);
});
search.addEventListener("input", () => renderCollections(search.value));
modal.addEventListener("click", (event) => { if (event.target.closest("[data-close]")) closeDetail(); });
document.querySelector("#prevPhoto").addEventListener("click", () => movePhoto(-1));
document.querySelector("#nextPhoto").addEventListener("click", () => movePhoto(1));
document.addEventListener("keydown", (event) => {
  if (modal.hidden) return;
  if (event.key === "Escape") closeDetail();
  if (event.key === "ArrowLeft") movePhoto(-1);
  if (event.key === "ArrowRight") movePhoto(1);
});

renderCollections();
