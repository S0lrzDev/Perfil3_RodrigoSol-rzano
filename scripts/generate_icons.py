"""Genera los iconos de la app a partir de assets/masterball.png."""
from pathlib import Path

from PIL import Image

ASSETS = Path(__file__).resolve().parent.parent / "assets"
SOURCE = ASSETS / "masterball.png"
BG = (27, 22, 58, 255)


def place(ball, size, diameter, background=(0, 0, 0, 0)):
    canvas = Image.new("RGBA", (size, size), background)
    scaled = ball.resize((diameter, diameter), Image.LANCZOS)
    offset = (size - diameter) // 2
    canvas.alpha_composite(scaled, (offset, offset))
    return canvas


def silhouette(img):
    white = Image.new("RGBA", img.size, (255, 255, 255, 255))
    white.putalpha(img.getchannel("A"))
    return white


def main():
    ball = Image.open(SOURCE).convert("RGBA")
    ball = ball.crop(ball.getbbox())

    place(ball, 1024, 820, BG).save(ASSETS / "icon.png")
    place(ball, 1024, 620).save(ASSETS / "android-icon-foreground.png")
    Image.new("RGBA", (1024, 1024), BG).save(ASSETS / "android-icon-background.png")
    silhouette(place(ball, 1024, 620)).save(ASSETS / "android-icon-monochrome.png")
    place(ball, 1024, 1000).save(ASSETS / "splash-icon.png")
    place(ball, 48, 46).save(ASSETS / "favicon.png")
    print("Iconos generados en", ASSETS)


if __name__ == "__main__":
    main()
