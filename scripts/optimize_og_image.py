#!/usr/bin/env python3
"""
Script pour optimiser l'image de preview pour les réseaux sociaux.
Redimensionne gdb-illustration.png aux dimensions optimales : 1200x630px
"""

from PIL import Image
import os

# Dimensions recommandées pour Open Graph (Facebook, WhatsApp, LinkedIn)
TARGET_WIDTH = 1200
TARGET_HEIGHT = 630

# Chemins des fichiers
INPUT_PATH = "public/gdb-illustration.png"
OUTPUT_PATH = "public/gdb-illustration.png"
BACKUP_PATH = "public/gdb-illustration-original.png"

def optimize_og_image():
    """
    Redimensionne l'image pour les previews des réseaux sociaux.
    - Ratio 1.91:1 (1200x630px)
    - Conserve l'aspect ratio original en ajoutant un fond bleu
    """
    
    # Vérifier que le fichier existe
    if not os.path.exists(INPUT_PATH):
        print(f"❌ Erreur : {INPUT_PATH} n'existe pas")
        return
    
    # Sauvegarder l'original
    print(f"📦 Sauvegarde de l'original vers {BACKUP_PATH}...")
    img = Image.open(INPUT_PATH)
    img.save(BACKUP_PATH)
    print(f"✅ Original sauvegardé (dimensions: {img.size[0]}x{img.size[1]}px)")
    
    # Créer un nouveau canvas avec le fond bleu Guide du Bleu
    print(f"\n🎨 Création du canvas {TARGET_WIDTH}x{TARGET_HEIGHT}px...")
    canvas = Image.new('RGB', (TARGET_WIDTH, TARGET_HEIGHT), color='#2563eb')  # Bleu Guide du Bleu
    
    # Calculer les dimensions pour garder l'aspect ratio
    img_ratio = img.size[0] / img.size[1]
    target_ratio = TARGET_WIDTH / TARGET_HEIGHT
    
    if img_ratio > target_ratio:
        # L'image est plus large, on ajuste la largeur
        new_width = TARGET_WIDTH
        new_height = int(TARGET_WIDTH / img_ratio)
    else:
        # L'image est plus haute, on ajuste la hauteur
        new_height = TARGET_HEIGHT
        new_width = int(TARGET_HEIGHT * img_ratio)
    
    print(f"📐 Redimensionnement à {new_width}x{new_height}px (conserve l'aspect ratio)")
    img_resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
    
    # Convertir en RGB si nécessaire (pour gérer la transparence)
    if img_resized.mode == 'RGBA':
        # Créer un fond blanc pour la transparence
        background = Image.new('RGB', img_resized.size, (255, 255, 255))
        background.paste(img_resized, mask=img_resized.split()[3])  # 3 est le canal alpha
        img_resized = background
    
    # Centrer l'image sur le canvas
    x = (TARGET_WIDTH - new_width) // 2
    y = (TARGET_HEIGHT - new_height) // 2
    canvas.paste(img_resized, (x, y))
    
    # Sauvegarder l'image optimisée
    print(f"\n💾 Sauvegarde de l'image optimisée vers {OUTPUT_PATH}...")
    canvas.save(OUTPUT_PATH, 'PNG', optimize=True, quality=95)
    
    # Vérifier la taille du fichier
    file_size = os.path.getsize(OUTPUT_PATH) / 1024  # En Ko
    print(f"✅ Image optimisée sauvegardée !")
    print(f"   Dimensions: {TARGET_WIDTH}x{TARGET_HEIGHT}px")
    print(f"   Taille: {file_size:.1f} Ko")
    
    if file_size > 8000:  # 8 Mo
        print(f"⚠️  Attention : L'image est grande ({file_size:.1f} Ko). Facebook/WhatsApp recommandent < 8 Mo")
    
    print(f"\n🎉 Terminé ! L'image est prête pour WhatsApp, Facebook, LinkedIn, etc.")
    print(f"\n📝 N'oubliez pas de mettre à jour index.html avec les nouvelles dimensions :")
    print(f"   <meta property=\"og:image:width\" content=\"{TARGET_WIDTH}\" />")
    print(f"   <meta property=\"og:image:height\" content=\"{TARGET_HEIGHT}\" />")

if __name__ == "__main__":
    print("🚀 Optimisation de l'image Open Graph pour Guide du Bleu\n")
    print("=" * 60)
    optimize_og_image()
    print("=" * 60)
