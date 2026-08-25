# NÔMA PARIS — Page vitrine

Page vitrine premium, statique (HTML/CSS/JS pur, sans build, sans dépendance,
sans base de données, sans paiement) présentant le sac NÔMA Paris.

## Structure des fichiers

```
noma-paris/
├── index.html          → toute la page
├── css/style.css        → tous les styles
├── js/main.js            → interactions légères (menu mobile, apparition au scroll)
└── images/
    ├── hero.jpg                 → grande photo du hero
    ├── produit.jpg               → photo de la fiche produit
    ├── presentation.png         → sac porté au quotidien
    ├── detail-interieur.jpg     → gros plan intérieur / poches
    └── detail-matiere.jpg       → gros plan matière du sac
```

Toutes les images sont désormais de vraies photos — plus aucun placeholder
sur le site.

## Prévisualiser la page en local

Pas besoin d'installation. Deux options :

**Option 1 — le plus simple**
Double-clique sur `index.html` (ou clic droit → Ouvrir avec ton navigateur).
La page s'ouvre directement.

**Option 2 — avec un petit serveur local** (recommandé si les polices Google
Fonts ne s'affichent pas correctement en ouverture directe) :

```bash
cd noma-paris
python3 -m http.server 8000
```

Puis ouvre `http://localhost:8000` dans ton navigateur.

## Remplacer une photo par une nouvelle version

1. Place la nouvelle photo dans le dossier `images/` (formats `.jpg`,
   `.jpeg`, `.webp` ou `.png`, idéalement 1200 px de large minimum).
2. Ouvre `index.html`, cherche la balise `<img>` correspondante et remplace
   le nom de fichier existant par le nom de ta nouvelle photo.

Exemple pour l'image du hero :

```html
<!-- avant -->
<img src="images/hero.jpg" alt="Sac NÔMA Paris tenu à deux mains — Mère. Entière.">

<!-- après -->
<img src="images/hero-v2.jpg" alt="Sac NÔMA Paris tenu à deux mains — Mère. Entière.">
```

Table des emplacements :

| Emplacement dans la page   | Fichier actuel      | Ratio du cadre |
|-----------------------------|----------------------|------------------|
| Hero (grande photo)         | `images/hero.jpg`    | ratio natif de la photo, sans recadrage |
| Fiche produit (sous le hero)| `images/produit.jpg` | portrait 4:5     |
| Présentation du sac         | `images/presentation.png` | portrait 4:5 |
| Détail — intérieur/poches   | `images/detail-interieur.jpg` | portrait 4:5 |
| Détail — matière            | `images/detail-matiere.jpg`   | portrait 4:5 |

Toutes les images sauf le hero sont affichées dans un cadre portrait 4:5
(recadrage centré si la photo a un ratio différent) — pense à vérifier le
rendu après changement si la nouvelle photo est très différente de
l'ancienne.

## Mettre la page en ligne gratuitement

Aucun abonnement nécessaire. Deux options 100 % gratuites, sans carte
bancaire :

### Option A — GitHub Pages (recommandé, le dépôt est déjà sur GitHub)

1. Dans le dépôt GitHub, va dans **Settings → Pages**.
2. Sous « Build and deployment », choisis la branche à publier (ex. `main`
   ou la branche courante) et le dossier `/ (root)`.
3. Clique sur **Save**. GitHub te donne une URL du type
   `https://<utilisateur>.github.io/<nom-du-repo>/` — utilisable
   immédiatement, gratuite, sans limite de temps.

### Option B — Netlify (glisser-déposer, encore plus simple)

1. Va sur [app.netlify.com/drop](https://app.netlify.com/drop) (compte
   gratuit, pas de carte bancaire requise).
2. Glisse le dossier `noma-paris` complet dans la fenêtre.
3. Netlify génère une URL publique immédiatement (ex.
   `https://noma-paris.netlify.app`), modifiable dans les réglages.

Les deux solutions sont gratuites à vie pour ce type de page (pas de
serveur, pas de base de données, pas de trafic e-commerce).

## Ce qui n'a volontairement pas été inclus

Conformément au brief : pas de panier, pas de paiement, pas de compte
client, pas de compte à rebours, pas de faux avis, pas de mention
« best-seller », pas de prix barré ni de fausse réduction. Le prix affiché
(139 €) est présenté partout comme le **prix public conseillé**.
