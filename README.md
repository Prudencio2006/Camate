# Tchakaloké-Camaté — Site institutionnel & culturel

## 1. Présentation

Ce projet est une **application web institutionnelle monopage** conçue pour valoriser le patrimoine, la culture, l'histoire, les initiatives et la vie communautaire de **Tchakaloké-Camaté**.

L'objectif est de proposer une interface suffisamment moderne pour une soutenance académique tout en restant réaliste : aucune donnée historique sensible ou coordonnée géographique n'est inventée comme donnée officielle. Les éléments marqués « à documenter » ou « démonstration » doivent être remplacés par des informations validées localement.

## 2. Stack technique

- HTML5 sémantique
- CSS3 moderne : variables CSS, Grid, Flexbox, animations, media queries
- JavaScript Vanilla ES6+
- Leaflet.js 1.9.4 pour la carte
- Swiper.js 11 pour la galerie
- OpenStreetMap pour le fond cartographique
- Aucun framework lourd : pas de React, Vue, Bootstrap ou Tailwind

## 3. Structure

```text
tchakaloke-camate/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 4. Installation

### Méthode simple

1. Décompresser le dossier.
2. Ouvrir `index.html` dans un navigateur moderne.

### Méthode recommandée pour la soutenance

Lancer un serveur local afin d'obtenir un environnement plus proche d'un hébergement réel.

Avec Python :

```bash
python -m http.server 8000
```

Puis ouvrir :

```text
http://localhost:8000
```

Les bibliothèques Leaflet et Swiper sont chargées par CDN : une connexion Internet est donc nécessaire pour leur chargement.

## 5. Fonctionnalités JavaScript à présenter au jury

### Navigation responsive
Le menu devient un hamburger sur petit écran. L'état `aria-expanded` est mis à jour pour améliorer l'accessibilité.

### Mode clair / sombre
Le bouton de thème modifie l'attribut `data-theme` de l'élément `<html>` et sauvegarde le choix dans :

```text
localStorage
```

Clé utilisée :

```text
tchakaloke-theme
```

### Recherche patrimoine
La barre de recherche parcourt en temps réel les mots-clés présents dans les cartes du patrimoine. Aucun rechargement de page n'est nécessaire.

### Galerie
Swiper fournit :
- navigation précédente/suivante ;
- pagination ;
- navigation clavier ;
- adaptation du nombre de cartes selon la largeur d'écran.

Les boutons « Tout », « Culture », « Paysages » et « Fêtes » utilisent JavaScript pour filtrer les cartes.

### Carte interactive
Leaflet affiche une carte et plusieurs marqueurs. Les boutons de la légende permettent de déplacer la carte vers un point précis.

**Important : les coordonnées du projet sont volontairement des coordonnées de démonstration. Elles doivent être remplacées par les coordonnées GPS vérifiées de Tchakaloké-Camaté avant publication.**

### Validation des formulaires
La validation est effectuée côté client :
- champs obligatoires ;
- e-mail ;
- longueur minimale ;
- montant numérique ;
- messages d'erreur ;
- message de confirmation sans rechargement.

Le projet ne réalise pas encore de véritable paiement ni d'envoi serveur. Pour une version de production, connecter les formulaires à une API/backend sécurisé et un prestataire de paiement reconnu.

### Animations
`IntersectionObserver` déclenche les animations lorsque les sections entrent dans la zone visible. Le code tient compte de `prefers-reduced-motion`.

## 6. Accessibilité

Le projet inclut notamment :

- structure HTML sémantique ;
- lien « Aller au contenu » ;
- labels associés aux champs ;
- attributs ARIA pour les composants interactifs ;
- navigation clavier ;
- contrastes travaillés ;
- prise en compte de `prefers-reduced-motion`.

Avant une publication réelle, effectuer un audit WCAG avec un outil comme Lighthouse ou axe DevTools.

## 7. SEO

Le document inclut :

- `<title>`
- meta description
- keywords
- auteur
- Open Graph
- viewport
- theme-color

Pour une vraie mise en production, ajouter également :

- URL canonique ;
- `sitemap.xml` ;
- `robots.txt` ;
- favicon ;
- données structurées Schema.org adaptées ;
- URLs et contenus définitifs ;
- image Open Graph réelle.

## 8. Personnalisation avant la soutenance

### Données historiques
Remplacer les textes génériques par :
- origine réelle du village ;
- dates importantes ;
- noms et périodes des chefs traditionnels ;
- légendes validées ;
- patrimoine matériel et immatériel ;
- activités économiques réelles.

### Carte
Dans `script.js`, modifier :

```javascript
const center = [9.307, 2.315];
```

et les objets du tableau `points`.

Utiliser uniquement des coordonnées GPS vérifiées.

### Galerie
Dans `index.html`, remplacer les blocs visuels de démonstration par des balises `<img>` optimisées, par exemple :

```html
<img src="assets/photo-fete.webp"
     alt="Description précise de la scène photographiée"
     width="900"
     height="600"
     loading="lazy">
```

Il est conseillé d'utiliser WebP/AVIF et de compresser les images.

### Contact
Remplacer l'adresse de démonstration :

```text
contact@tchakaloke-camate.example
```

par une adresse officielle.

## 9. Architecture de production conseillée

Pour aller plus loin après la soutenance :

```text
frontend/
├── index.html
├── style.css
├── script.js
└── assets/

backend/
├── API
├── base de données
└── authentification administrateur
```

Le backend pourra gérer :
- actualités ;
- agenda ;
- propositions de projets ;
- modération ;
- galerie ;
- contacts ;
- statistiques ;
- dons.

## 10. Argumentaire technique pour la soutenance

### Pourquoi HTML5 ?
Pour construire une structure sémantique, accessible et favorable au référencement.

### Pourquoi CSS3 sans framework ?
Pour démontrer la maîtrise réelle de Grid, Flexbox, variables CSS, responsive design, animations et architecture de styles.

### Pourquoi JavaScript Vanilla ?
Pour montrer la compréhension des événements, du DOM, de la validation, de `localStorage`, de `IntersectionObserver` et des composants dynamiques sans dépendre d'un framework.

### Pourquoi Leaflet ?
Leaflet est léger, adapté aux cartes interactives et suffisamment flexible pour afficher les lieux d'intérêt d'un territoire.

### Pourquoi Swiper ?
Swiper fournit une galerie tactile et responsive avec navigation clavier, pagination et gestion des breakpoints.

## 11. Limites volontaires du prototype

Ce projet est un **prototype front-end complet**. Les fonctions suivantes nécessitent un serveur avant production :

- envoi réel des formulaires ;
- authentification ;
- stockage en base de données ;
- modération des suggestions ;
- paiement/don ;
- administration des actualités ;
- téléchargement sécurisé de médias.

Cela permet de présenter clairement au jury la frontière entre **interface front-end** et **services back-end**.

## 12. Checklist avant soutenance

- [ ] Remplacer les coordonnées GPS de démonstration.
- [ ] Ajouter les vraies photographies du village.
- [ ] Vérifier les noms et informations historiques avec des sources locales.
- [ ] Ajouter les dates officielles de l'agenda.
- [ ] Remplacer l'e-mail de démonstration.
- [ ] Tester mobile, tablette et ordinateur.
- [ ] Tester clavier et lecteur d'écran.
- [ ] Tester Lighthouse.
- [ ] Vérifier les liens et formulaires.
- [ ] Préparer une démonstration du mode sombre, filtre galerie, recherche, carte et validation formulaire.
