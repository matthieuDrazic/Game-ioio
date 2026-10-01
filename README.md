# SHARKLINE V2 — Expéditions

PWA autonome pour smartphone et ordinateur. Vue de côté, caméra mobile, trois zones, monnaie gagnée en jouant, boutique de 20 requins et cartes documentaires. Aucun compte ChatGPT, aucune API et aucun achat en argent réel.

## Installer sur GitHub Pages

1. Décompresse SHARKLINE_PWA_V2.zip.
2. Crée un dépôt public `sharkline` sur GitHub, ou ouvre ton dépôt V1.
3. Dépose **le contenu** du dossier SHARKLINE_PWA_V2 à la racine du dépôt. `index.html` doit être directement à la racine. Dépose aussi les dossiers `assets` et `icons`. Ne dépose pas le ZIP lui-même.
4. Valide avec **Commit changes**. Pour remplacer la V1, remplace les fichiers qui portent le même nom et ajoute tous les nouveaux. L’ancien game.js n’est plus utilisé et peut être supprimé.
5. Dans **Settings → Pages**, choisis **Deploy from a branch**, branche **main**, dossier **/(root)**, puis **Save**.
6. Après publication, ouvre le lien indiqué dans Pages : `https://TON-PSEUDO.github.io/sharkline/`.

Documentation officielle : https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

### Si la V1 s’affiche encore

Ouvre le lien avec Internet. Ferme toutes les fenêtres et la version installée du jeu, puis rouvre-le. Une nouvelle version du service worker attend que les fenêtres de l’ancienne soient fermées. Les nouveaux fichiers doivent tous avoir été envoyés sur GitHub.

## Installer sur smartphone

- iPhone : ouvrir le lien dans Safari → Partager → Sur l’écran d’accueil → Ajouter. Si proposé, activer « Ouvrir comme app ».
- Android : ouvrir dans Chrome → menu → Installer l’application ou Ajouter à l’écran d’accueil.
- Les fiches et les images sont disponibles hors connexion après téléchargement du cache complet lors d’une première visite avec Internet. Les liens vers les sources nécessitent Internet.
- Ne pas ouvrir le fichier HTML depuis l’application Fichiers : l’installation et le mode hors connexion nécessitent HTTPS ou localhost.

## Jouer

### Au port

Tu reçois 150 pièces de départ. Le requin gris de récif est gratuit. Choisis Récif lumineux, Épave oubliée ou Les abysses, puis commence une expédition de 3 minutes.

### Commandes

- Mobile : pose un doigt dans la partie gauche de l’océan puis glisse-le pour diriger le requin. La zone de contact agit comme un joystick. Un deuxième doigt peut maintenir BOOST.
- SPÉCIAL active la capacité indiquée dans la carte du requin ; le bouton indique le temps de recharge.
- Ordinateur : flèches ou ZQSD/WASD ; Espace pour accélérer ; E pour la capacité ; Échap pour la pause.
- La partie se met en pause quand la page est masquée ou perd le focus.
- Touche les poissons avec ton museau pour mordre automatiquement. Certaines proies demandent plusieurs morsures. Manger récupère de la vitalité. Le requin ne grandit pas pendant l’expédition.
- Les pèlerins et requins-baleines filtrent le plancton lumineux et laissent les poissons indemnes.
- Évite les méduses, les filets et les orques. Les filets peuvent être contournés par le haut ou le bas. Les décors rocheux et la coque de l’épave sont des éléments visuels ; leurs silhouettes ne bloquent pas le passage.
- Visite les trois balises lumineuses pour terminer l’exploration.

### Récompenses

Les gains affichés en partie sont les pièces estimées au retour :

- Chaque pièce ramassée : 3 pièces de boutique.
- Chaque proie : 2 pièces ; chaque plancton : 1 pièce. Bonus chasse plafonné à 120.
- Temps de survie : 1 pièce par tranche de 3 secondes.
- Chaque objectif terminé : 80 pièces.
- Survie de 3 minutes : 150 pièces supplémentaires.

Même une expédition perdue rapporte ses gains. Quitter via le menu pause récupère aussi les gains. Fermer directement la page abandonne l’expédition en cours. Les gains ne sont attribués qu’une fois par expédition.

### Acheter un requin

Ouvre Collection & boutique → Carte & documentaire → Acheter. Le bouton devient disponible lorsque le solde suffit. Le prix est retiré une seule fois ; le requin reste acquis et s’équipe automatiquement. Tu peux rééquiper n’importe quel requin déjà acquis.

## Cartes : jeu et réalité

Chaque carte propose deux onglets :

- **Dans le jeu** : vitesse de croisière, temps d’accélération, longueur, autonomie du boost, vitalité, dégâts, maniabilité, vitesse du boost et capacité. Ces nombres sont des paramètres de jeu, pas des performances réelles mesurées.
- **Dans la vraie vie** : nom scientifique, repères géographiques, habitat, taille réelle indicative, alimentation, comportement, reproduction, population mondiale, conservation et anecdote.

La carte géographique est schématique : les points sont quelques repères indicatifs, pas une aire de répartition exacte. Les tailles sont des ordres de grandeur synthétiques ; les records peuvent être incertains ou révisés. Les silhouettes sont stylisées, pas des planches d’identification scientifique.

Les fiches ne donnent pas de décompte mondial inventé. Lorsque les sources ne fournissent pas d’effectif mondial fiable, elles affichent « Effectif mondial inconnu ». La rubrique tendance renvoie à l’évaluation détaillée plutôt que de généraliser une évolution régionale.

Les statuts mondiaux UICN sont ceux relayés par FishBase, édition 2025-2, avec la date d’évaluation affichée. Les anciennes fiches du Florida Museum peuvent citer des statuts antérieurs : elles servent ici surtout aux informations biologiques. Les sources ont été consultées le 01/10/2026. Le mégalodon est explicitement un bonus fossile : espèce éteinte, longueur reconstruite et comportements incertains.

Sources principales, liens par espèce dans le jeu :
- Florida Museum : https://www.floridamuseum.ufl.edu/discover-fish/sharks/species-profiles/
- FishBase : https://www.fishbase.se/
- Smithsonian Ocean, mégalodon : https://ocean.si.edu/ocean-life/sharks-rays/megalodon

## Sauvegarde

Pièces, achats et requin équipé sont conservés dans le stockage local du navigateur, sur cet appareil. Aucune synchronisation entre appareils. Effacer les données du site efface la progression. Le record V1, s’il existe sur la même adresse, est conservé en interne ; les requins et la monnaie V2 commencent avec le nouveau système d’achat. La V2 hébergée sur GitHub ne peut pas récupérer la progression de l’ancienne adresse ChatGPT.

## Modifier le jeu

- `sharks.js` : noms, prix, capacités, statistiques et textes documentaires.
- `engine.js` : règles de jeu, déplacements, missions, gains et collisions.
- `app.js` : interface, sauvegarde, boutique et dessin de l’océan.
- `assets/` : 20 silhouettes SVG et planisphère schématique.
- `style.css` : présentation responsive.
- `sw.js` : fichiers mis en cache. Après une mise à jour, changer `v2.0.0` en une nouvelle version ; ajouter au tableau FILES toute nouvelle ressource nécessaire hors connexion.

Tous les fichiers requis sont locaux. Pas de dépendance JavaScript externe, pas de clé secrète, pas de compilation.

## Essai local et validation

Depuis ce dossier : `python3 -m http.server 8000`, puis ouvrir http://localhost:8000.

La logique a été vérifiée : 20 espèces, activation/recharge des capacités, déplacement, morsure, pièces, fin de partie et filtration pacifique. Les achats, le solde, les fonds insuffisants, l’équipement, les menus, la pause et le retour au port ont aussi été vérifiés dans un environnement DOM simulé. Le cache hors connexion a été vérifié avec ses 32 ressources et son repli de navigation. Le rendu du moteur de dessin a été inspecté sur une image de format mobile. Les vérifications de fichiers et de syntaxe sont réalisées avant livraison. Le test visuel dans un navigateur mobile n’a pas été disponible dans l’environnement de préparation : tester le confort tactile, le rendu et l’installation sur son téléphone. Cette version est un prototype jouable, pas encore une application native distribuable sur les stores.
