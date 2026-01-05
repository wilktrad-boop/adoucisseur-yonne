# Dossier Public - Images et fichiers statiques

Ce dossier contient tous les fichiers statiques de votre site Next.js, notamment les images.

## 📁 Structure recommandée

Vous pouvez organiser vos images comme vous le souhaitez dans ce dossier. Voici quelques suggestions :

```
public/
  ├── images/
  │   ├── hero/          # Images pour les sections hero
  │   ├── services/      # Images pour les services
  │   ├── villes/        # Images spécifiques aux villes
  │   └── guides/        # Images pour les articles de blog
  ├── logo.png           # Logo du site
  └── icon.png           # Favicon
```

## 🖼️ Comment utiliser les images

### Dans les composants React avec Next.js Image

```tsx
import Image from 'next/image'

// Image dans public/images/hero/adoucisseur.jpg
<Image 
  src="/images/hero/adoucisseur.jpg" 
  alt="Adoucisseur d'eau"
  width={800}
  height={600}
/>
```

### Dans les balises HTML classiques

```tsx
// Image dans public/logo.png
<img src="/logo.png" alt="Logo" />
```

### Dans les styles CSS

```css
.hero {
  background-image: url('/images/hero/background.jpg');
}
```

## 📝 Notes importantes

- Les fichiers dans `public/` sont accessibles depuis la racine du site avec le préfixe `/`
- Utilisez `next/image` pour optimiser automatiquement les images
- Les formats recommandés : WebP, AVIF, PNG, JPG
- Pensez à optimiser vos images avant de les ajouter (compression, redimensionnement)

