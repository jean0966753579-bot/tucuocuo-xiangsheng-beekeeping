from pathlib import Path
import sys

from PIL import Image, ImageOps


BASE = Path("assets/flora")
SELECTED = set(sys.argv[1:])
PLANTS = (
    ("red-hot-cattail", 2),
    ("purple-billygoat-weed", 0),
    ("purple-joyweed", 0),
    ("angelonia", 2),
    ("cape-mallow", 1),
    ("french-marigold", 0),
    ("dahlberg-daisy", 0),
    ("brazilian-glory-bush", 0),
    ("creeping-torenia", 1),
    ("wishbone-flower", 2),
    ("golden-trumpet-vine", 0),
    ("flamingo-flower", 0),
    ("coral-vine", 1),
    ("asparagus-fern", 1),
    ("blackberry-lily", 0),
    ("welsh-onion", 0),
    ("beggarticks", 1),
    ("longan", 7),
    ("marguerite-daisy", 2),
    ("pentas", 1),
    ("american-black-nightshade", 2),
    ("radish", 0),
    ("celery-leaved-buttercup", 0),
    ("oriental-hawksbeard", 0),
    ("haircap-moss", 3),
    ("bengal-clockvine", 4),
    ("waterweed", 0),
)


for name, thumb_index in PLANTS:
    if SELECTED and name not in SELECTED:
        continue

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
