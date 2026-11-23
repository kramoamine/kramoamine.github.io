# Amine Kramo | Technicien Systèmes & Réseaux | Windows Server, Active Directory & Infrastructure IT

Portfolio professionnel d'**Amine Kramo**, Technicien Systèmes & Réseaux basé à **Casablanca, Maroc**, spécialisé en **administration Windows Server, Active Directory, réseaux informatiques, infrastructure IT, support informatique, virtualisation, sécurité réseau et sauvegarde**.

🌐 **Portfolio professionnel :**  
https://kramoamine.github.io/

---

## 👨‍💻 Profil

Technicien Systèmes & Réseaux titulaire d'une **Licence Professionnelle en Administration Avancée des Systèmes et Réseaux** et d'un **Diplôme de Technicien Spécialisé en Infrastructure Digitale, option Systèmes et Réseaux**.

Mon profil technique couvre notamment :

- Administration **Windows Server**
- **Active Directory Domain Services (AD DS)**
- Services **DNS, DHCP et Group Policy (GPO)**
- Administration réseau **TCP/IP, LAN/WAN et VLAN**
- Sécurité réseau avec **pfSense et OpenVPN**
- Virtualisation avec **VMware et Hyper-V**
- Sauvegarde avec **Veeam Backup & Replication** et **Windows Server Backup**
- Support informatique **Niveau 1 / Niveau 2**
- Vidéosurveillance **CCTV / IP**
- **Microsoft 365**

📍 Casablanca, Maroc

---

# 🚀 Projets Systèmes & Réseaux

## 🏢 01. Active Directory Infrastructure Lab | Windows Server 2019

Projet pratique de **conception, déploiement et administration d'une infrastructure Microsoft Active Directory** sous Windows Server 2019.

L'objectif du laboratoire est de reproduire une infrastructure d'entreprise permettant la gestion centralisée des utilisateurs, des groupes, des ordinateurs, des stratégies de groupe, des services réseau, des ressources partagées et de la sauvegarde du contrôleur de domaine.

### Architecture

- **Domaine :** `amine-lab.local`
- **NetBIOS :** `AMINE-LAB`
- **Contrôleur de domaine :** `DC01`
- **Serveur :** Windows Server 2019
- **IP serveur :** `192.168.11.200`
- **Client :** `CLIENT01`
- **Client OS :** Windows 11
- **Réseau virtuel :** VMware `VMnet1` Host-only
- **Réseau :** `192.168.11.0/24`
- **DHCP :** `192.168.11.100 – 192.168.11.180`

### Technologies utilisées

`Windows Server 2019` · `Active Directory` · `AD DS` · `DNS` · `DHCP` · `GPO` · `File Server` · `NTFS` · `Windows Server Backup` · `PowerShell` · `VMware` · `Windows 11`

### Réalisations

- Déploiement du domaine Active Directory `amine-lab.local`
- Création et organisation de **8 Organizational Units**
- Création de **6 comptes utilisateurs**
- Création de **3 groupes de sécurité**
- Configuration de la zone DNS
- Vérification des enregistrements **A et SRV**
- Validation DNS avec `nslookup`
- Installation et configuration du serveur DHCP
- Configuration de l'étendue `192.168.11.100 – 192.168.11.180`
- Administration des **Group Policy Objects**
- Mise en place de stratégies de **Drive Mapping**
- Configuration d'un File Server
- Gestion des permissions **NTFS**
- Validation des accès aux ressources IT, RH et FINANCE
- Installation de **Windows Server Backup**
- Réalisation d'un **System State Backup**
- Validation de la sauvegarde

### Groupes Active Directory

- `GG_IT`
- `GG_RH`
- `GG_FINANCE`

### Ressources partagées

- `\\DC01\IT`
- `\\DC01\RH`
- `\\DC01\FINANCE`

### Group Policy Objects

- `GPO-IT-DRIVE-MAPPING`
- `GPO-RH-DRIVE-MAPPING`
- `GPO-FINANCE-DRIVE-MAPPING`

### Résultats

✅ 8 Organizational Units  
✅ 6 comptes utilisateurs  
✅ 3 groupes de sécurité  
✅ Résolution DNS validée  
✅ DHCP opérationnel  
✅ GPO Drive Mapping configurées  
✅ Accès File Server validés  
✅ System State Backup réussi  

**Étude de cas complète :**  
https://kramoamine.github.io/active-directory-lab.html

---

## 🔐 02. OpenVPN & pfSense | Accès distant sécurisé

Mise en place d'une solution **VPN d'accès distant** basée sur **pfSense et OpenVPN**, permettant l'accès sécurisé aux ressources autorisées d'un réseau d'entreprise.

### Technologies

`pfSense` · `OpenVPN` · `Firewall` · `TCP/IP` · `LAN/WAN` · `Remote Access VPN`

### Réalisations

- Préparation de l'architecture réseau
- Configuration de pfSense
- Configuration du serveur OpenVPN
- Configuration du client VPN
- Contrôle des accès aux ressources internes
- Tests de connectivité
- Validation de l'accès distant

**Étude de cas :**  
https://kramoamine.github.io/bfs-openvpn.html

---

## 📹 03. Infrastructure de vidéosurveillance IP | ENCG Settat

Intervention technique sur une **infrastructure CCTV/IP** intégrant des caméras réseau, des switches PoE, des liaisons sans fil **TP-Link CPE510** et un NVR.

### Technologies

`CCTV` · `IP Cameras` · `NVR` · `PoE` · `TP-Link CPE510` · `5 GHz` · `TCP/IP`

### Réalisations

- Diagnostic des caméras IP
- Vérification du câblage
- Vérification des équipements réseau
- Intervention sur les liaisons TP-Link CPE510
- Vérification des flux vers le NVR
- Tests réseau
- Remise en service

**Étude de cas :**  
https://kramoamine.github.io/encg-cctv.html

---

## 💾 04. Veeam Backup & Replication | Projet de fin d'études

Projet de fin d'études réalisé dans le cadre d'un stage chez **Maghreb Steel**, consacré à l'étude et à la configuration de **Veeam Backup & Replication** dans un environnement virtualisé.

> Ce projet a été réalisé dans un environnement de projet virtualisé et ne représente pas un déploiement sur l'infrastructure de production de Maghreb Steel.

### Technologies

`Veeam Backup & Replication` · `VMware` · `Virtualisation` · `Backup Jobs` · `Backup` · `Restore`

### Réalisations

- Étude de Veeam Backup & Replication
- Installation et configuration
- Création des Backup Jobs
- Planification des sauvegardes
- Suivi des tâches
- Tests de restauration

**Étude de cas :**  
https://kramoamine.github.io/veeam-backup.html

---

# 🛠️ Compétences techniques

## Windows Server & Active Directory

- Windows Server 2012 / 2016 / 2019
- Active Directory Domain Services
- Users & Groups
- Organizational Units
- DNS
- DHCP
- GPO
- File Server
- NTFS Permissions
- Windows Server Backup
- PowerShell

## Administration systèmes

- Windows 10 / 11
- Ubuntu Server
- Maintenance systèmes
- Administration des postes clients
- Diagnostic et dépannage

## Réseaux

- TCP/IP
- IPv4
- LAN / WAN
- VLAN
- Switching
- Routing
- Cisco
- Ethernet

## Sécurité réseau

- pfSense
- Firewall
- OpenVPN
- Remote Access VPN

## Virtualisation

- VMware Workstation
- VMware ESXi
- Hyper-V

## Backup & Recovery

- Veeam Backup & Replication
- Windows Server Backup
- System State Backup
- Backup Jobs
- Backup Repository
- Restore Testing
- Cobian Backup

## Support informatique

- Support Niveau 1 / Niveau 2
- GLPI
- RDP
- Diagnostic matériel
- Diagnostic logiciel
- Dépannage réseau
- Installation et maintenance des postes

## Microsoft 365

- Microsoft 365
- Outlook
- Teams
- OneDrive

## Vidéosurveillance IP

- CCTV
- Caméras IP
- NVR / DVR
- Switch PoE
- TP-Link CPE510
- Liaisons 5 GHz

---

# 💼 Expérience professionnelle

## Technicien Informatique / Systèmes & Réseaux

**Maroges / RysaSoft**  
Février 2025 – Présent

### Missions

- Support aux utilisateurs
- Diagnostic et résolution d'incidents
- Installation des postes informatiques
- Maintenance matérielle et logicielle
- Installation et dépannage réseau
- Configuration des équipements réseau
- Vidéosurveillance IP
- Interventions techniques sur site

### Expériences précédentes

- **Technicien Informatique Freelance** — Derb Chalef
- **Stagiaire PFE** — Maghreb Steel
- **Stagiaire Informatique** — SIRAIL Maroc

---

# 🎓 Formation

## Licence Professionnelle

**Administration Avancée des Systèmes et Réseaux**

Faculté des Sciences Aïn Chock, Casablanca  
2025 – 2026

## Diplôme de Technicien Spécialisé

**Infrastructure Digitale : Systèmes et Réseaux**

CFP Hassania, Casablanca  
2022 – 2024

## Baccalauréat Scientifique

**Sciences Physiques**

Lycée Oued Eddahab, Casablanca  
2020 – 2021

---

# 📄 Curriculum Vitae

**CV Français :**  
https://kramoamine.github.io/CV-KRAMO-AMINE.pdf

---

# 📬 Contact

📍 **Casablanca, Maroc**

📧 **E-mail :**  
aminekramo@gmail.com

💼 **LinkedIn :**  
https://www.linkedin.com/in/aminekramo/

💻 **GitHub :**  
https://github.com/kramoamine

🌐 **Portfolio professionnel :**  
https://kramoamine.github.io/

---

# 🔐 Confidentialité & sécurité

Les études de cas du portfolio sont conçues pour démontrer des compétences techniques sans publier de données confidentielles provenant d'infrastructures de production.

Les informations propres au **Active Directory Infrastructure Lab**, comme :

- `amine-lab.local`
- `DC01`
- `CLIENT01`
- `192.168.11.0/24`

appartiennent uniquement à un environnement de laboratoire.

Les pages publiques évitent notamment de publier :

- Mots de passe
- Identifiants VPN
- Clés privées
- Certificats privés
- Secrets d'authentification
- Informations internes sensibles
- Configurations confidentielles de production

---

# 🔎 Technologies & mots-clés

`Windows Server` `Windows Server 2019` `Active Directory` `AD DS` `DNS` `DHCP` `GPO` `Group Policy` `PowerShell` `File Server` `NTFS` `Windows Server Backup` `System State Backup` `VMware` `Hyper-V` `Veeam Backup & Replication` `pfSense` `OpenVPN` `VPN` `Cisco` `TCP/IP` `VLAN` `Microsoft 365` `GLPI` `IT Support` `CCTV` `IP Cameras` `NVR`

---

# 📊 Portfolio & référencement

Le portfolio comprend :

- Pages de projets techniques détaillées
- Design responsive
- Métadonnées SEO
- Canonical URLs
- Données structurées Schema.org
- Open Graph
- Sitemap XML
- `robots.txt`
- Images WebP avec fallback PNG
- Lazy Loading
- Optimisations Lighthouse
- Navigation clavier
- Lightbox accessible
- `prefers-reduced-motion`
- Google Analytics 4
- Google Search Console

---

### Amine Kramo

**Technicien Systèmes & Réseaux**

**Windows Server • Active Directory • Réseaux • Infrastructure IT**

📍 Casablanca, Maroc
