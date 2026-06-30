from pathlib import Path

from PIL import Image, ImageOps


SOURCE = Path("assets/photos")
OUTPUT = SOURCE / "web"

FILES = [
    "old-house-before-2004-collapsed-courtyard.jpg",
    "old-house-before-2004-window-bars.jpg",
    "old-house-before-2004-side-wall.jpg",
    "old-house-before-2004-sepia-front-wall.jpg",
    "old-house-before-2004-sepia-side-wall.jpg",
    "old-house-before-2004-sepia-roof-entry.jpg",
    "old-house-before-2004-gable-roof.jpg",
    "old-house-before-2004-moss-roof-window.jpg",
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
    "tea-shop-xufeng-img-1055.jpg",
    "tea-shop-xufeng-img-1054.jpg",
    "tea-shop-xufeng-img-9136.jpg",
    "tea-shop-xufeng-fil26214.jpg",
    "tea-shop-xufeng-2019-11-11.jpg",
    "tea-shop-xufeng-5.jpg",
    "tea-shop-xufeng-img-0244.jpg",
    "tea-shop-xufeng-img-0247.jpg",
    "tea-shop-xufeng-img-0248.jpg",
    "tea-shop-xufeng-img-0250.jpg",
    "tea-shop-xufeng-img-0240.jpg",
    "metro-tunnel-portrait.jpg",
    "metro-steel-structure-01.jpg",
    "metro-steel-structure-02.jpg",
    "metro-tunnel-track.jpg",
    "tea-service-portrait.jpg",
    "beekeeping-frame-family.jpg",
    "beekeeping-honey-extractor.jpg",
    "beekeeping-xiangsheng-boxes.jpg",
    "beekeeping-xiangsheng-honey-drum-delivery.jpg",
    "beekeeping-xiangsheng-honeycomb-frame-portrait.jpg",
    "beekeeping-xiangsheng-open-hive-frame.jpg",
    "beekeeping-xiangsheng-carrying-hive-boxes.jpg",
    "beekeeping-xiangsheng-checking-frames.jpg",
    "beekeeping-xiangsheng-apiary-work.jpg",
    "beekeeping-xiangsheng-smoker-and-frames.jpg",
    "beekeeping-xiangsheng-three-person-harvest.jpg",
    "beekeeping-xiangsheng-honeycomb-close-portrait.jpg",
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
