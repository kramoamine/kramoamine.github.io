# 06 – Backup & Recovery

## 1. Objectif

Mettre en place une solution de sauvegarde pour protéger les données et les composants essentiels du contrôleur de domaine Active Directory.

## 2. Environnement de sauvegarde

- Serveur : DC01
- Système : Windows Server 2019
- Outil : Windows Server Backup
- Disque de sauvegarde : BACKUP (E:)

## 3. Configuration réalisée

- Installation de la fonctionnalité Windows Server Backup.
- Ajout et préparation d'un disque virtuel dédié aux sauvegardes.
- Utilisation de la commande `wbadmin` pour effectuer une sauvegarde de l'état du système.

## 4. Sauvegarde System State

Commande exécutée :

```powershell
wbadmin start systemstatebackup -backuptarget:E: -quiet
```

Résultat : **Success**

## 5. Vérification

Les commandes suivantes ont été utilisées pour vérifier l'installation, le disque de sauvegarde et les versions de sauvegarde disponibles :

```powershell
Get-WindowsFeature Windows-Server-Backup
Get-Volume -DriveLetter E
wbadmin get versions -backuptarget:E:
```

Une capture d'écran regroupant les trois vérifications est disponible dans le dossier `Screenshots/Backup-Recovery`.

## 6. Résultat

La fonctionnalité Windows Server Backup est installée, le disque de sauvegarde E: est préparé et une sauvegarde System State a été réalisée avec succès.

**Remarque :** aucun test de restauration réel n'a encore été effectué.