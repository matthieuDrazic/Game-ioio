# SHARKLINE — PWA V1

Jeu autonome, sans compte ChatGPT, sans serveur ni dépendance à installer.

## Mettre en ligne sur GitHub Pages

1. Décompresse le ZIP.
2. Crée un dépôt GitHub public nommé `sharkline`.
3. Ajoute **le contenu** du dossier SHARKLINE_PWA à la racine du dépôt (index.html doit être directement à la racine). Ajoute aussi le dossier icons. Ne dépose pas le ZIP lui-même.
4. Valide les fichiers avec « Commit changes ».
5. Ouvre Settings → Pages. Dans Build and deployment, choisis Deploy from a branch, puis main et /(root). Clique Save.
6. Attends la publication et ouvre le lien indiqué dans Pages, généralement https://TON-PSEUDO.github.io/sharkline/.

Documentation officielle : https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Installer sur smartphone

iPhone : ouvre le lien dans Safari, puis Partager → Sur l’écran d’accueil → Ajouter. Selon la version d’iOS, active « Ouvrir comme app » si proposé.
Android : ouvre le lien dans Chrome puis choisis Installer l’application ou Ajouter à l’écran d’accueil dans le menu.

Ouvre une première fois avec Internet et attends le chargement complet. Le jeu peut ensuite fonctionner hors connexion tant que le navigateur conserve son cache. Ne pas ouvrir index.html directement depuis l’application Fichiers : le mode installable nécessite HTTPS (GitHub Pages) ou localhost.

## Jouer

Glisse sur l’océan pour diriger ton requin. Maintiens BOOST avec un deuxième doigt pour accélérer. Sur ordinateur : flèches ou ZQSD/WASD, Espace pour accélérer, Échap pour mettre en pause.

Mange les proies vertes pour récupérer de la vitalité et grandir. Les animaux orange sont risqués, les rouges dangereux. Survis 3 minutes. Les requins se débloquent avec ton meilleur score : Bleu (départ), Mako (600), Marteau (1600), Tigre (3200), Grand blanc (5500).

Le record est stocké uniquement sur l’appareil et dans ce navigateur. Il ne se transfère pas depuis la version ChatGPT et peut disparaître si les données du site sont effacées.

## Mettre à jour

Modifie les fichiers et augmente la version CACHE dans sw.js (v1 → v2, etc.). Après publication, ouvre le jeu avec Internet, puis ferme toutes les fenêtres du jeu et relance-le pour activer la nouvelle version. La nouvelle version attend la fermeture des fenêtres existantes pour éviter de couper une partie.

## Tester sur ordinateur

Depuis ce dossier : `python3 -m http.server 8000`, puis ouvre http://localhost:8000.

Version prototype : animaux représentés par des emoji ; rendu variable selon l’appareil. Vérifier les commandes sur son téléphone. Cette PWA n’est pas un paquet natif App Store ou Google Play.
