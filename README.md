# Guide du Bleu 🇫🇷

> Votre guide complet pour réussir vos études en France

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)

## 📖 À propos

**Guide du Bleu** est une plateforme dédiée aux étudiants internationaux arrivant en France. Nous proposons des guides détaillés, une barre de recherche intelligente et un assistant IA pour vous accompagner dans toutes vos démarches administratives.

**Créé par** [Diversité Alternative](https://diversitealternative.org/)

## ✨ Fonctionnalités

- 🔍 **Recherche intelligente** - Recherche instantanée avec Fuse.js (⌘K)
- 📚 **Guides détaillés** - Titre de séjour, sécurité sociale, logement, etc.
- 🤖 **Assistant IA** - Chatbot disponible 24/7
- 📱 **Responsive** - Optimisé mobile et desktop
- 🌐 **Multilingue** - Interface en français
- ♿ **Accessible** - Navigation au clavier, contraste élevé

## 🚀 Installation

### Prérequis

- Node.js 18+ et npm
- Git

### Étapes

```sh
# 1. Cloner le repository
git clone git@github.com:Diversite-Alternative/guide-du-bleu-v5.git

# 2. Naviguer dans le dossier
cd guide-du-bleu-v5

# 3. Installer les dépendances
npm install

# 4. Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:8080`

**Edit a file directly in GitHub**


## 🛠️ Technologies

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router
- **Search**: Fuse.js
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── guide/          # Composants des pages guides
│   ├── layout/         # Header, Footer, Layout
│   ├── search/         # Barre de recherche
│   └── ui/             # Composants shadcn/ui
├── data/               # Configuration des guides
├── lib/                # Utilitaires et index de recherche
└── pages/              # Pages de l'application
    └── guides/         # Pages des guides détaillés
```

## 🚢 Déploiement

### Netlify / Vercel

```sh
# Build de production
npm run build

# Le dossier dist/ contient les fichiers statiques
```

Configuration recommandée:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18+

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Équipe

Créé avec ❤️ par [Diversité Alternative](https://diversitealternative.org/)

---

**Guide du Bleu** - Votre guide pour réussir vos études en France 🇫🇷

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
