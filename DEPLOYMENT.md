# Guide de déploiement

## 🚀 Déploiement sur Netlify

### Via l'interface Netlify

1. **Connectez votre repository GitHub**
   - Allez sur [app.netlify.com](https://app.netlify.com)
   - Cliquez sur "Add new site" > "Import an existing project"
   - Sélectionnez GitHub et autorisez l'accès
   - Choisissez `Diversite-Alternative/guide-du-bleu-v5`

2. **Configuration du build**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Variables d'environnement** (optionnel)
   ```
   NODE_VERSION=18
   ```

4. **Déployez !**
   - Cliquez sur "Deploy site"
   - Le site sera disponible sur un sous-domaine Netlify

5. **Domaine personnalisé**
   - Allez dans "Domain settings"
   - Ajoutez `guidedubleu.fr`
   - Configurez les DNS selon les instructions Netlify

### Via Netlify CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter
netlify login

# Déployer
netlify deploy --prod
```

## 🔷 Déploiement sur Vercel

### Via l'interface Vercel

1. **Connectez votre repository**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "Add New" > "Project"
   - Importez depuis GitHub
   - Sélectionnez `guide-du-bleu-v5`

2. **Configuration automatique**
   Vercel détecte automatiquement Vite et configure :
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

3. **Déployez**
   - Cliquez sur "Deploy"
   - Chaque push sur `main` déclenchera un déploiement automatique

### Via Vercel CLI

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel --prod
```

## 🐳 Déploiement avec Docker

### Créer un Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Créer nginx.conf

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # Gestion du routing React
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache des assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Compression gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

### Build et run

```bash
# Build l'image
docker build -t guide-du-bleu .

# Run le container
docker run -p 8080:80 guide-du-bleu
```

## 📊 Variables d'environnement

Si vous ajoutez des variables d'environnement dans le futur, créez un fichier `.env.example` :

```env
# API
VITE_API_URL=https://api.guidedubleu.fr

# Analytics (optionnel)
VITE_GA_TRACKING_ID=
VITE_HOTJAR_ID=

# Feature flags
VITE_ENABLE_CHATBOT=true
```

## 🔍 SEO et performance

### Après déploiement, vérifiez :

- ✅ **Google Search Console** - Indexation et erreurs
- ✅ **PageSpeed Insights** - Performance
- ✅ **Lighthouse** - Accessibilité, SEO, meilleures pratiques
- ✅ **Open Graph** - Aperçus sur réseaux sociaux

### Checklist post-déploiement

- [ ] Tester tous les liens de navigation
- [ ] Vérifier la recherche (⌘K)
- [ ] Tester sur mobile/tablette
- [ ] Vérifier les 3 pages de guides
- [ ] Tester les liens externes (ChatGPT, Ameli, etc.)
- [ ] Vérifier les meta tags Open Graph
- [ ] Soumettre le sitemap à Google
- [ ] Configurer les redirections si nécessaire

## 🔐 Sécurité

### Headers de sécurité (à configurer sur Netlify/Vercel)

Créer `netlify.toml` ou `vercel.json` :

**netlify.toml**
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
```

**vercel.json**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## 📈 Monitoring

### Outils recommandés

- **Sentry** - Error tracking
- **Google Analytics** - Analytiques
- **Hotjar** - Heatmaps et recordings
- **Uptime Robot** - Monitoring uptime

## 🆘 Troubleshooting

### Le site ne s'affiche pas correctement

1. Vérifiez les logs de build
2. Testez en local : `npm run build && npm run preview`
3. Vérifiez que tous les chemins sont relatifs (pas d'URL absolues)

### Les routes ne fonctionnent pas

- Configurez la redirection pour le SPA (Single Page Application)
- Sur Netlify : créer `public/_redirects` avec `/* /index.html 200`
- Sur Vercel : c'est automatique

### Images manquantes

- Vérifiez que les images sont dans `public/`
- Utilisez des chemins relatifs : `/image.png` et non `./image.png`

---

**Besoin d'aide ?** Ouvrez une issue sur [GitHub](https://github.com/Diversite-Alternative/guide-du-bleu-v5/issues)
