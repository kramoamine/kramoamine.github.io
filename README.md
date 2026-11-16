# Amine Kramo — Portfolio

Portfolio professionnel statique de **Amine Kramo**, Technicien Systèmes & Réseaux.

## Contenu
- `index.html` : présentation, compétences, expériences, formation et contact.
- `bfs-openvpn.html` : projet OpenVPN & pfSense.
- `encg-cctv.html` : projet de vidéosurveillance IP.
- `veeam-backup.html` : projet Veeam Backup & Replication.
- CV français et anglais au format PDF.

## Publication sur GitHub Pages
Le workflow `.github/workflows/deploy.yml` publie automatiquement le contenu du dépôt à chaque push sur la branche `main`.

1. Envoyer tous les fichiers du dossier vers le dépôt `kramoamine.github.io` (branche `main`).
2. Dans **Settings → Pages**, choisir **GitHub Actions** comme source de publication si ce n'est pas déjà fait.
3. Attendre la fin du workflow **Deploy portfolio to GitHub Pages** dans l'onglet **Actions**.
4. Le site du dépôt utilisateur sera disponible à `https://kramoamine.github.io/` lorsque GitHub aura terminé le déploiement.

Aucun secret ni mot de passe ne doit être ajouté aux fichiers du site.
