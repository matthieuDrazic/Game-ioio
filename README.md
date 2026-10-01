# SHARKLINE V4 — Expéditions

PWA autonome pour smartphone et ordinateur. Vue de côté, caméra mobile, trois zones, monnaie gagnée en jouant, boutique de 20 requins et cartes documentaires. Aucun compte ChatGPT, aucune API et aucun achat en argent réel.

## Nouveautés V4

- Campagne de neuf niveaux débloqués dans l’ordre, répartis entre récif, épave et abysses.
- Trois rencontres finales : gardien du récif, chalut fantôme et grande poursuite. Trois esquives réussies permettent de les passer, même avec un requin pacifique. Les attaques sont précédées d’un avertissement ; le chalut laisse une ouverture.
- Jusqu’à trois étoiles par niveau : terminer, ramasser huit pièces, terminer avec au moins 50 % de vitalité. Les étoiles déjà obtenues restent acquises.
- Mode libre conservé et boutique de 20 requins.
- Onglet Quiz : cinq questions tirées parmi 39, réponses expliquées et liens documentaires. Mode Découverte sans chrono ou Défi avec 20 secondes par question. Les erreurs sont proposées à nouveau plus souvent. Récompense de dix pièces par bonne réponse, plafonnée à 100 pièces par jour sur cet appareil.
- Export et import de la sauvegarde JSON au port. L’import affiche un résumé puis demande confirmation avant de remplacer la progression.
- Notification de mise à jour applicable au port et page indépendante de réparation du cache.

Toutes les images et tous les fichiers sont à la racine. Aucun dossier assets à créer. La clé de sauvegarde V2 est conservée afin de garder les achats et les pièces à la même adresse et dans le même navigateur.

## Installer sur GitHub Pages

1. Décompresse SHARKLINE_PWA_V4.zip.
2. Crée un dépôt public `sharkline` sur GitHub, ou ouvre ton dépôt V1.
3. Dépose **les fichiers** du ZIP à la racine du dépôt. `index.html` doit être directement à la racine. Toutes les images SVG et PNG se déposent directement à la racine, avec index.html. Aucun dossier assets ou icons n’est nécessaire. Ne dépose pas le ZIP lui-même.
4. Valide avec **Commit changes**. Pour remplacer la V1 ou la V2, remplace les fichiers qui portent le même nom et ajoute tous les nouveaux. L’ancien game.js n’est plus utilisé et peut être supprimé.
5. Dans **Settings → Pages**, choisis **Deploy from a branch**, branche **main**, dossier **/(root)**, puis **Save**.
6. Après publication, ouvre le lien indiqué dans Pages : `https://TON-PSEUDO.github.io/sharkline/`.

Documentation officielle : https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

### Si V2 ou V3 reste affichée

Après publication des fichiers V4, ouvre directement **https://TON-PSEUDO.github.io/sharkline/update.html** (adapte au lien de ton jeu). Cette page ne dépend pas des scripts du jeu. Exporte d’abord ta sauvegarde avec le bouton proposé, puis clique sur le bouton de réparation. Il retire le service worker et les caches du jeu, conserve le stockage des pièces et achats, puis recharge le jeu.

Si cette page affiche une erreur 404, les nouveaux fichiers ne sont pas encore publiés à cette adresse. Vérifie que `update.html`, `version.json` et tous les fichiers du ZIP sont présents dans la source publiée. Une fusion dans main ne suffit pas si le déploiement Pages n’a pas abouti.

Pour les prochaines versions, le jeu propose une notification au port. Applique la mise à jour après avoir terminé l’expédition.

## Installer sur smartphone

- iPhone : ouvrir le lien dans Safari → Partager → Sur l’écran d’accueil → Ajouter. Si proposé, activer « Ouvrir comme app ».
- Android : ouvrir dans Chrome → menu → Installer l’application ou Ajouter à l’écran d’accueil.
- Les fiches et les images sont disponibles hors connexion après téléchargement du cache complet lors d’une première visite avec Internet. Les liens vers les sources nécessitent Internet.
- Ne pas ouvrir le fichier HTML depuis l’application Fichiers : l’installation et le mode hors connexion nécessitent HTTPS ou localhost.

## Campagne

Ouvre l’onglet Campagne. Les niveaux demandent selon leur type d’atteindre la sortie, de collecter des proies ou du plancton, de visiter trois balises, de survivre 45 secondes, ou de passer une rencontre finale. Il faut remplir l’objectif avant de rejoindre la sortie et avant la fin du temps imparti. Une réussite débloque le niveau suivant ; un échec conserve les pièces gagnées. Bonus de réussite : 100 pièces, ou 180 pour un boss, en plus des gains ordinaires.

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

Pièces, achats, requin équipé, étoiles et résultats des quiz sont conservés dans le stockage local du navigateur, sur cet appareil. Aucune synchronisation entre appareils. Effacer les données du site efface la progression. Le record V1, s’il existe sur la même adresse, est conservé en interne ; les requins et la monnaie V2 commencent avec le nouveau système d’achat. La V2 hébergée sur GitHub ne peut pas récupérer la progression de l’ancienne adresse ChatGPT.

## Modifier le jeu

- `sharks.js` : noms, prix, capacités, statistiques et textes documentaires.
- `engine.js` : règles de jeu, déplacements, missions, gains et collisions.
- `app.js` : interface, sauvegarde, boutique et dessin de l’océan.
- `campaign.js` : niveaux et rencontres finales.
- `quiz-data.js` : banque de questions et tirage.
- `v4-ui.js` : campagne, quiz, export et import.
- `pwa.js`, `sw.js`, `version.json`, `update.html` : mise à jour et mode hors connexion.
- Fichiers SVG à la racine : 20 silhouettes et world.svg. Fichiers icon-180.png, icon-192.png et icon-512.png à la racine : icônes d’installation.
- `style.css` : présentation responsive.
- `sw.js` : fichiers mis en cache. À chaque publication, synchroniser la version dans index.html (liens et libellés), pwa.js, sw.js, manifest.webmanifest et version.json. Ajouter au tableau FILES toute nouvelle ressource nécessaire hors connexion.

Tous les fichiers requis sont locaux. Pas de dépendance JavaScript externe, pas de clé secrète, pas de compilation.

## Essai local et validation

Depuis ce dossier : `python3 -m http.server 8000`, puis ouvrir http://localhost:8000.

Les neuf niveaux, les conditions de victoire, les trois rencontres finales (y compris pour les filtreurs), les étoiles, le déblocage et l’attribution unique des récompenses ont été vérifiés automatiquement. Les quiz ont été contrôlés pour leurs choix distincts, le tirage de cinq questions, les réponses et le plafond quotidien. La reprise des sauvegardes V3 et la validation des données ont été vérifiées dans un DOM simulé. Le service worker a été testé pour ses 36 ressources, le repli hors connexion et la séparation des versions. Le dessin des trois rencontres finales a été rendu au format mobile.

Un véritable navigateur mobile n’était pas disponible pour la validation : vérifier sur son téléphone le confort tactile, l’installation et le cycle réel de mise à jour. Cette version reste un prototype web jouable.
