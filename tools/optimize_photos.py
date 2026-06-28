from pathlib import Path

from PIL import Image, ImageOps


SOURCE = Path("assets/photos")
OUTPUT = SOURCE / "web"

FILES = [
    "old-house-2012-before-wall.jpg",
    "old-house-2012-courtyard.jpg",
    "old-house-2015-wood-windows.jpg",
    "old-house-2016-restoration-work.jpg",
    "old-house-2016-restored-front.jpg",
    "old-house-restored-front-wide.jpg",
    "old-house-restored-wall-detail.jpg",
    "old-house-restored-side-view.jpg",
    "old-house-restored-rainy-eaves.jpg",
    "old-house-meiren-mountain-composite.jpg",
    "meiren-mountain-sky.jpg",
    "jinshan-fields-sea-view.jpg",
    "old-house-panorama.jpg",
    "jinshan-night-view.jpg",
    "engineering-site-measurement.jpg",
    "tea-house-table.jpg",
    "tea-shop-display.jpg",
    "metro-tunnel-portrait.jpg",
    "metro-steel-structure-01.jpg",
    "metro-steel-structure-02.jpg",
    "metro-tunnel-track.jpg",
    "tea-service-portrait.jpg",
    "beekeeping-frame-family.jpg",
    "beekeeping-honey-extractor.jpg",
    "beekeeping-xiangsheng-boxes.jpg",
    "nanxi-honey-harvest-2018.jpg",
]


def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for name in FILES:
        image = Image.open(SOURCE / name)
        image = ImageOps.exif_transpose(image).convert("RGB")
        image.thumbnail((1800, 1800))
        image.save(OUTPUT / name, "JPEG", quality=86, optimize=True, progressive=True)
        print(f"{name}: {image.size[0]}x{image.size[1]}")


if __name__ == "__main__":
    main()
