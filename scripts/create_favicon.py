#!/usr/bin/env python3
"""
Script pour créer un favicon personnalisé pour Guide du Bleu.
Génère un favicon avec les initiales "GDB" sur fond bleu.
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Couleurs Guide du Bleu
BLUE = "#2563eb"
WHITE = "#ffffff"

# Taille du favicon
SIZES = [16, 32, 48, 256]  # Tailles multiples pour le .ico

def create_favicon():
    """
    Crée un favicon avec les initiales GDB sur fond bleu.
    """
    
    print("🎨 Création du favicon Guide du Bleu...")
    
    # Créer une image de base de 256x256 (haute résolution)
    size = 256
    img = Image.new('RGBA', (size, size), BLUE)
    draw = ImageDraw.Draw(img)
    
    # Dessiner un cercle blanc au centre (optionnel, pour un effet plus moderne)
    # Ou simplement mettre les lettres directement
    
    # Essayer de charger une police système
    try:
        # Essayer différentes polices selon le système
        font_paths = [
            "/System/Library/Fonts/Helvetica.ttc",  # macOS
            "/System/Library/Fonts/SFNSDisplay.ttf",  # macOS
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",  # Linux
            "C:\\Windows\\Fonts\\arial.ttf",  # Windows
        ]
        
        font = None
        for font_path in font_paths:
            if os.path.exists(font_path):
                font = ImageFont.truetype(font_path, 120)
                break
        
        if font is None:
            font = ImageFont.load_default()
            print("⚠️  Police système non trouvée, utilisation de la police par défaut")
    except Exception as e:
        font = ImageFont.load_default()
        print(f"⚠️  Erreur lors du chargement de la police: {e}")
    
    # Dessiner le texte "GDB" centré
    text = "GDB"
    
    # Obtenir la taille du texte pour le centrer
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (size - text_width) // 2
    y = (size - text_height) // 2 - 10  # Ajustement vertical
    
    # Dessiner le texte en blanc
    draw.text((x, y), text, fill=WHITE, font=font)
    
    # Sauvegarder les différentes tailles dans un fichier .ico
    icons = []
    for icon_size in SIZES:
        icon = img.resize((icon_size, icon_size), Image.Resampling.LANCZOS)
        icons.append(icon)
    
    output_path = "public/favicon.ico"
    
    # Sauvegarder en tant que .ico avec plusieurs tailles
    icons[0].save(
        output_path,
        format='ICO',
        sizes=[(s, s) for s in SIZES],
        append_images=icons[1:]
    )
    
    print(f"✅ Favicon créé : {output_path}")
    print(f"   Tailles incluses : {', '.join([f'{s}x{s}' for s in SIZES])}")
    
    # Créer aussi une version PNG 32x32 pour le web moderne
    png_path = "public/favicon-32x32.png"
    icons[1].save(png_path, 'PNG')
    print(f"✅ Favicon PNG créé : {png_path} (32x32)")
    
    # Créer une version 16x16 PNG
    png_path_16 = "public/favicon-16x16.png"
    icons[0].save(png_path_16, 'PNG')
    print(f"✅ Favicon PNG créé : {png_path_16} (16x16)")
    
    print("\n🎉 Favicon Guide du Bleu créé avec succès !")
    print("\n📝 Pour une meilleure qualité, vous pouvez :")
    print("   1. Créer un favicon personnalisé avec Figma/Illustrator")
    print("   2. Utiliser https://realfavicongenerator.net/")
    print("   3. Ajouter un logo SVG pour les navigateurs modernes")

if __name__ == "__main__":
    print("🚀 Génération du favicon Guide du Bleu\n")
    print("=" * 60)
    create_favicon()
    print("=" * 60)
