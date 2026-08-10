document.querySelectorAll(".plant-list").forEach((list) => {
  const entries = Array.from(list.querySelectorAll("[data-plant-gallery]"));
  entries
    .sort((first, second) => Number(second.dataset.plantNumber) - Number(first.dataset.plantNumber))
    .forEach((entry) => list.append(entry));
});

document.querySelectorAll("[data-plant-gallery]").forEach((entry) => {
  const gallery = entry.querySelector(".plant-gallery");
  const mainImage = entry.querySelector(".plant-gallery__main");
  const caption = entry.querySelector("figcaption");
  const thumbnails = Array.from(entry.querySelectorAll(".plant-gallery__thumbs button"));
  const previous = entry.querySelector(".plant-gallery__nav--prev");
  const next = entry.querySelector(".plant-gallery__nav--next");
  let currentIndex = 0;

  const showImage = (index) => {
    currentIndex = (index + thumbnails.length) % thumbnails.length;
    const selected = thumbnails[currentIndex];
    mainImage.src = selected.dataset.full;
    mainImage.alt = selected.dataset.alt;
    caption.textContent = `${selected.dataset.caption}（第 ${currentIndex + 1} 張，共 ${thumbnails.length} 張）`;

    thumbnails.forEach((button, buttonIndex) => {
      if (buttonIndex === currentIndex) {
        button.setAttribute("aria-current", "true");
      } else {
        button.removeAttribute("aria-current");
      }
    });
  };

  thumbnails.forEach((button, index) => {
    button.addEventListener("click", () => showImage(index));
  });

  previous.addEventListener("click", () => showImage(currentIndex - 1));
  next.addEventListener("click", () => showImage(currentIndex + 1));

  gallery.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showImage(currentIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showImage(currentIndex + 1);
    }
  });
});
