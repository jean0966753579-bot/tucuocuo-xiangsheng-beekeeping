from pathlib import Path

from PIL import Image, ImageOps


BASE = Path("assets/flora")
PLANTS = (
    ("red-hot-cattail", 2),
    ("purple-billygoat-weed", 0),
    ("purple-joyweed", 0),
    ("angelonia", 2),
    ("cape-mallow", 1),
)


for name, thumb_index in PLANTS:
    folder = BASE / name
    originals = sorted(folder.glob("*-original.jpg"))
    for index, source in enumerate(originals, 1):
        image = ImageOps.exif_transpose(Image.open(source)).convert("RGB")
        image.thumbnail((1800, 1800))
        image.save(
            folder / f"{name}-{index:02d}-web.jpg",
            "JPEG",
            quality=86,
            optimize=True,
            progressive=True,
        )

    thumbnail = ImageOps.exif_transpose(Image.open(originals[thumb_index])).convert("RGB")
    thumbnail = ImageOps.fit(
        thumbnail,
        (720, 480),
        method=Image.Resampling.LANCZOS,
        centering=(0.5, 0.48),
    )
    thumbnail.save(
        folder / f"{name}-thumb.jpg",
        "JPEG",
        quality=84,
        optimize=True,
        progressive=True,
    )
