<div align="center">

# 👨‍💻 Amine Kramo

### Technicien Systèmes & Réseaux

**Windows Server • Active Directory • Réseaux • pfSense • OpenVPN • HAProxy • Infrastructure IT**

[![Portfolio](https://img.shields.io/badge/Portfolio-kramoamine.github.io-22d3ee?style=for-the-badge&logo=githubpages&logoColor=white)](https://kramoamine.github.io/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Amine_Kramo-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aminekramo/)
[![GitHub](https://img.shields.io/badge/GitHub-kramoamine-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/kramoamine)
[![CV FR](https://img.shields.io/badge/CV-Français-22c55e?style=for-the-badge&logo=adobeacrobatreader&logoColor=white)](https://kramoamine.github.io/CV-KRAMO-AMINE.pdf)
[![CV EN](https://img.shields.io/badge/CV-English-3b82f6?style=for-the-badge&logo=adobeacrobatreader&logoColor=white)](https://kramoamine.github.io/CV-KRAMO-AMINE-ENG.pdf)

📍 **Casablanca, Maroc**

</div>

---

## 🚀 À propos

Portfolio professionnel d'**Amine Kramo**, Technicien Systèmes & Réseaux basé à **Casablanca**, titulaire d'une **Licence Professionnelle en Administration Avancée des Systèmes et Réseaux** et d'un **Diplôme de Technicien Spécialisé en Infrastructure Digitale, option Systèmes et Réseaux**.

Mon parcours couvre l'administration des systèmes, les services Microsoft, les réseaux LAN/WAN, la sécurité réseau, la virtualisation, la sauvegarde, le support informatique et la vidéosurveillance IP.

> Ce dépôt rassemble mon portfolio bilingue, mes études de cas techniques et les architectures utilisées pour présenter mes compétences sans publier d'informations sensibles provenant d'infrastructures réelles.

### Domaines principaux

- Administration **Windows Server** et **Linux**
- **Active Directory Domain Services**, DNS, DHCP et Group Policy
- Réseaux **TCP/IP, IPv4, LAN/WAN, VLAN, switching et routing**
- Sécurité réseau avec **pfSense, OpenVPN et HAProxy**
- Virtualisation avec **VMware Workstation, VMware ESXi et Hyper-V**
- Sauvegarde avec **Veeam Backup & Replication** et **Windows Server Backup**
- Support informatique **Niveau 1 / Niveau 2**
- Vidéosurveillance **CCTV / IP**, NVR, PoE et liaisons sans fil
- Environnement **Microsoft 365**

---

## 🌐 Portfolio

| Version | Accès |
|---|---|
| 🇫🇷 Français | [Ouvrir le portfolio](https://kramoamine.github.io/) |
| 🇬🇧 English | [Open the portfolio](https://kramoamine.github.io/index-en.html) |

---

# 🧪 Projets techniques

## 🏢 01. Active Directory Infrastructure Lab

Laboratoire complet de **conception, déploiement et administration d'une infrastructure Microsoft Active Directory** sous Windows Server 2019.

### Objectif

Reproduire une infrastructure d'entreprise permettant de gérer de manière centralisée les utilisateurs, les groupes, les ordinateurs, les stratégies de groupe, les services réseau, les ressources partagées et la sauvegarde du contrôleur de domaine.

### Architecture du laboratoire

| Élément | Configuration |
|---|---|
| Domaine | `amine-lab.local` |
| NetBIOS | `AMINE-LAB` |
| Contrôleur de domaine | `DC01` |
| Serveur | Windows Server 2019 |
| Adresse du serveur | `192.168.11.200` |
| Client | `CLIENT01` sous Windows 11 |
| Réseau virtuel | VMware `VMnet1` Host-only |
| Sous-réseau | `192.168.11.0/24` |
| Plage DHCP | `192.168.11.100 – 192.168.11.180` |

### Technologies

`Windows Server 2019` `Active Directory` `AD DS` `DNS` `DHCP` `GPO` `File Server` `NTFS` `Windows Server Backup` `PowerShell` `VMware` `Windows 11`

### Travaux réalisés

- Déploiement du domaine `amine-lab.local`
- Création et organisation de **8 Organizational Units**
- Création de **6 comptes utilisateurs**
- Création de **3 groupes de sécurité**
- Configuration de la zone DNS et validation des enregistrements **A et SRV**
- Validation de la résolution DNS avec `nslookup`
- Installation et configuration du serveur DHCP
- Configuration de l'étendue `192.168.11.100 – 192.168.11.180`
- Administration des **Group Policy Objects**
- Mise en place de stratégies de **Drive Mapping**
- Configuration d'un File Server et des permissions **NTFS**
- Validation des accès aux ressources IT, RH et FINANCE
- Installation de **Windows Server Backup**
- Réalisation et validation d'un **System State Backup**

### Objets Active Directory

**Groupes de sécurité**

- `GG_IT`
- `GG_RH`
- `GG_FINANCE`

**Ressources partagées**

- `\\DC01\IT`
- `\\DC01\RH`
- `\\DC01\FINANCE`

**Group Policy Objects**

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

[![Étude de cas FR](https://img.shields.io/badge/Étude_de_cas-FR-22d3ee?style=flat-square)](https://kramoamine.github.io/active-directory-lab.html)
[![Case Study EN](https://img.shields.io/badge/Case_Study-EN-3b82f6?style=flat-square)](https://kramoamine.github.io/active-directory-lab-en.html)

---

## 🛡️ 02. Infrastructure de sécurité pfSense

Ensemble de deux projets complémentaires réalisés avec **pfSense** : un accès distant chiffré avec **OpenVPN** et une architecture de publication Web sécurisée avec **HAProxy**.

[![Projets pfSense FR](https://img.shields.io/badge/Projets_pfSense-FR-22d3ee?style=flat-square)](https://kramoamine.github.io/pfsense-projects.html)
[![pfSense Projects EN](https://img.shields.io/badge/pfSense_Projects-EN-3b82f6?style=flat-square)](https://kramoamine.github.io/pfsense-projects-en.html)

### 🔐 02-A. Accès distant sécurisé avec OpenVPN

Mise en place d'une solution **Remote Access VPN** permettant à un utilisateur autorisé d'accéder à certaines ressources internes au moyen d'un tunnel chiffré.

**Technologies :** `pfSense` `OpenVPN` `Firewall` `TCP/IP` `LAN/WAN` `Remote Access VPN` `TLS`

**Travaux réalisés :**

- Préparation de l'architecture réseau
- Configuration de pfSense comme Firewall et VPN Gateway
- Configuration du serveur OpenVPN
- Préparation du profil client VPN
- Définition des règles entre le réseau VPN et le LAN
- Tests d'authentification, de tunnel et de connectivité
- Validation de l'accès aux ressources autorisées

[![Étude de cas OpenVPN FR](https://img.shields.io/badge/OpenVPN-FR-22d3ee?style=flat-square&logo=openvpn&logoColor=white)](https://kramoamine.github.io/bfs-openvpn.html)
[![OpenVPN Case Study EN](https://img.shields.io/badge/OpenVPN-EN-3b82f6?style=flat-square&logo=openvpn&logoColor=white)](https://kramoamine.github.io/bfs-openvpn-en.html)

### ⚖️ 02-B. Architecture Web sécurisée avec HAProxy

Configuration d'un **reverse proxy HAProxy sur pfSense** pour router plusieurs connexions HTTPS vers des serveurs applicatifs internes distincts selon le nom SNI présenté pendant la négociation TLS.

**Technologies :** `pfSense` `HAProxy` `HTTPS` `TLS` `SNI` `ACL` `TCP Passthrough` `WAN Firewall` `L4 Health Checks`

**Travaux réalisés :**

- Installation et activation du package HAProxy
- Création d'un frontend HTTPS en mode TCP passthrough
- Création de backends pour les serveurs applicatifs
- Mise en place d'ACL basées sur le SNI
- Configuration des règles WAN nécessaires
- Validation de la connectivité vers les backends
- Contrôle de disponibilité avec les health checks L4
- Supervision depuis les statistiques HAProxy

> Les noms de domaine, adresses IP, certificats, identifiants et autres informations sensibles sont volontairement masqués dans l'étude de cas publique.

[![Étude de cas HAProxy FR](https://img.shields.io/badge/HAProxy-FR-22d3ee?style=flat-square&logo=haproxy&logoColor=white)](https://kramoamine.github.io/pfsense-haproxy.html)
[![HAProxy Case Study EN](https://img.shields.io/badge/HAProxy-EN-3b82f6?style=flat-square&logo=haproxy&logoColor=white)](https://kramoamine.github.io/pfsense-haproxy-en.html)

---

## 📹 03. Infrastructure de vidéosurveillance IP | ENCG Settat

Intervention technique sur une infrastructure **CCTV/IP** intégrant des caméras réseau, des switches PoE, des liaisons sans fil **TP-Link CPE510** et un NVR.

**Technologies :** `CCTV` `IP Cameras` `NVR` `PoE` `TP-Link CPE510` `5 GHz` `TCP/IP`

**Travaux réalisés :**

- Diagnostic des caméras IP
- Vérification du câblage et des équipements réseau
- Intervention sur les liaisons TP-Link CPE510
- Vérification des flux vers le NVR
- Tests réseau et remise en service

[![Étude de cas FR](https://img.shields.io/badge/Étude_de_cas-FR-22d3ee?style=flat-square)](https://kramoamine.github.io/encg-cctv.html)
[![Case Study EN](https://img.shields.io/badge/Case_Study-EN-3b82f6?style=flat-square)](https://kramoamine.github.io/encg-cctv-en.html)

---

## 💾 04. Veeam Backup & Replication | Projet de fin d'études

Projet de fin d'études réalisé dans le cadre d'un stage chez **Maghreb Steel**, consacré à l'étude et à la configuration de **Veeam Backup & Replication** dans un environnement virtualisé.

> Ce projet a été réalisé dans un environnement de projet virtualisé et ne représente pas un déploiement sur l'infrastructure de production de Maghreb Steel.

**Technologies :** `Veeam Backup & Replication` `VMware` `Virtualisation` `Backup Jobs` `Backup` `Restore`

**Travaux réalisés :**

- Étude de Veeam Backup & Replication
- Installation et configuration
- Création et planification des Backup Jobs
- Suivi des tâches de sauvegarde
- Tests de restauration

[![Étude de cas FR](https://img.shields.io/badge/Étude_de_cas-FR-22d3ee?style=flat-square)](https://kramoamine.github.io/veeam-backup.html)
[![Case Study EN](https://img.shields.io/badge/Case_Study-EN-3b82f6?style=flat-square)](https://kramoamine.github.io/veeam-backup-en.html)

---

# 🛠️ Compétences techniques

<table>
<tr>
<td valign="top" width="50%">

### 🖥️ Systèmes & services Microsoft

- Windows Server 2012 / 2016 / 2019
- Windows 10 / 11
- Ubuntu Server
- Active Directory Domain Services
- Users, Groups & Organizational Units
- DNS, DHCP & Group Policy
- File Server & NTFS Permissions
- PowerShell

</td>
<td valign="top" width="50%">

### 🌐 Réseaux & sécurité

- TCP/IP, IPv4, LAN/WAN
- VLAN, switching et routing
- Cisco & Ethernet
- pfSense Firewall
- OpenVPN Remote Access
- HAProxy Reverse Proxy
- HTTPS, TLS, SNI & ACL

</td>
</tr>
<tr>
<td valign="top" width="50%">

### ☁️ Virtualisation & sauvegarde

- VMware Workstation
- VMware ESXi
- Microsoft Hyper-V
- Veeam Backup & Replication
- Windows Server Backup
- System State Backup
- Backup Jobs & Restore Testing
- Cobian Backup

</td>
<td valign="top" width="50%">

### 🧰 Support & infrastructure

- Support Niveau 1 / Niveau 2
- GLPI & RDP
- Diagnostic matériel et logiciel
- Maintenance des postes
- Microsoft 365, Outlook, Teams & OneDrive
- CCTV, caméras IP, NVR / DVR
- Switch PoE et TP-Link CPE510

</td>
</tr>
</table>

---

# 💼 Expérience professionnelle

## Technicien Informatique / Systèmes & Réseaux

**Maroges / RysaSoft** · Février 2025 – Présent

- Support aux utilisateurs
- Diagnostic et résolution d'incidents
- Installation et maintenance des postes informatiques
- Dépannage et configuration réseau
- Vidéosurveillance IP
- Interventions techniques sur site

### Expériences précédentes

- **Technicien Informatique Freelance** — Derb Chalef
- **Stagiaire PFE** — Maghreb Steel
- **Stagiaire Informatique** — SIRAIL Maroc

---

# 🎓 Formation

| Période | Diplôme | Établissement |
|---|---|---|
| 2025 – 2026 | **Licence Professionnelle — Administration Avancée des Systèmes et Réseaux** | Faculté des Sciences Aïn Chock, Casablanca |
| 2022 – 2024 | **Technicien Spécialisé — Infrastructure Digitale : Systèmes et Réseaux** | CFP Hassania, Casablanca |
| 2020 – 2021 | **Baccalauréat Scientifique — Sciences Physiques** | Lycée Oued Eddahab, Casablanca |

---

# 🔐 Confidentialité & sécurité

Les études de cas sont conçues pour démontrer des compétences techniques sans publier de données confidentielles provenant d'infrastructures de production.

Les informations du laboratoire Active Directory, notamment `amine-lab.local`, `DC01`, `CLIENT01` et `192.168.11.0/24`, appartiennent uniquement à un environnement de test.

Les pages publiques ne publient pas :

- Mots de passe ou identifiants VPN
- Clés privées ou certificats privés
- Secrets d'authentification
- Cookies, sessions ou jetons CSRF
- Noms de domaine et adresses IP d'infrastructures réelles
- Configurations confidentielles de production

---

# 📊 Qualité du portfolio

- Interface responsive et bilingue FR / EN
- Métadonnées SEO et Canonical URLs
- Données structurées Schema.org
- Open Graph et Twitter Cards
- Sitemap XML et `robots.txt`
- Images WebP avec fallback PNG
- Lazy loading et optimisations Lighthouse
- Navigation clavier et focus visible
- Lightbox accessible
- Support de `prefers-reduced-motion`
- Google Analytics 4
- Google Search Console

---

# 📬 Contact

<div align="center">

📍 **Casablanca, Maroc**

📧 [aminekramo@gmail.com](mailto:aminekramo@gmail.com)  
💼 [LinkedIn](https://www.linkedin.com/in/aminekramo/)  
💻 [GitHub](https://github.com/kramoamine)  
🌐 [Portfolio professionnel](https://kramoamine.github.io/)

---

### Amine Kramo

**Technicien Systèmes & Réseaux**

*Windows Server • Active Directory • Réseaux • Sécurité • Infrastructure IT*

</div>
