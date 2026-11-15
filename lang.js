/* =========================================================
   AMINE KRAMO PORTFOLIO — FR / EN
   ---------------------------------------------------------
   
========================================================= */

(function () {
  "use strict";

  /* =======================================================
     CONFIGURATION
  ======================================================= */

  var DEFAULT_LANG = "fr";
  var STORAGE_KEY = "portfolioLanguage";

  var CV_FILES = {
    fr: "CV-KRAMO-AMINE.pdf",
    en: "CV-KRAMO-AMINE-ENG.pdf"
  };


  /* =======================================================
     DICTIONNAIRE — COMMUN À TOUTES LES PAGES
  ======================================================= */

  var COMMON = {

    /* ---------- attributs (alt, aria-label...) ---------- */
    "Logo du portfolio Amine Kramo": "Amine Kramo portfolio logo",
    "Logo Amine Kramo": "Amine Kramo logo",
    "Photo professionnelle d'Amine Kramo": "Professional photo of Amine Kramo",
    "Ouvrir le menu": "Open menu",
    "Fermer le menu": "Close menu",
    "Changer la langue": "Change language",

    /* ---------- pages projets : en-tête / pied ---------- */
    "← Retour au Portfolio": "← Back to Portfolio",
    "← Retour aux réalisations": "← Back to projects",

    /* ---------- étiquettes de section ---------- */
    "PRÉSENTATION": "OVERVIEW",
    "ARCHITECTURE": "ARCHITECTURE",
    "FONCTIONNEMENT": "HOW IT WORKS",
    "MON INTERVENTION": "MY WORK",
    "STACK TECHNIQUE": "TECH STACK",
    "RÉSULTAT": "RESULT",
    "Contexte & objectif": "Context & objective",
    "Contexte & objectifs": "Context & objectives",
    "Objectifs": "Objectives",
    "Travaux réalisés": "Work completed",
    "Fonctionnement de la solution": "How the solution works",

    /* ---------- tags techniques communs ---------- */
    "Systèmes": "Systems",
    "Réseaux": "Networks",
    "Virtualisation": "Virtualization",
    "Réseau LAN": "LAN network",
    "Caméras IP": "IP Cameras",
    "Diagnostic": "Diagnostics",
    "Vidéosurveillance": "Video surveillance",
    "Vidéosurveillance IP": "IP Video Surveillance",
    "Authentification": "Authentication",
    "Tunnel chiffré": "Encrypted tunnel",
    "Planification": "Scheduling"
  };


  /* =======================================================
     DICTIONNAIRE — PAR PAGE
     (prioritaire sur COMMON quand le même texte français
      doit être traduit différemment selon la page)
  ======================================================= */

  var PAGES = {

    /* ===================================================
       index.html
    =================================================== */
    "index": {

      /* ----- <title> / meta ----- */
      "Amine Kramo | Technicien Systèmes & Réseaux à Casablanca":
        "Amine Kramo | Systems & Network Technician in Casablanca",
      "Portfolio d'Amine Kramo, Technicien Systèmes & Réseaux à Casablanca : Windows Server, Active Directory, réseaux, pfSense, OpenVPN, VMware, Veeam, support IT et vidéosurveillance IP.":
        "Portfolio of Amine Kramo, Systems & Network Technician in Casablanca: Windows Server, Active Directory, networking, pfSense, OpenVPN, VMware, Veeam, IT support and IP video surveillance.",

      /* ----- navigation ----- */
      "Accueil": "Home",
      "À propos": "About",
      "Compétences": "Skills",
      "Réalisations": "Projects",
      "Expérience": "Experience",
      "Formation": "Education",

      /* ----- hero ----- */
      "Profil Systèmes & Réseaux": "Systems & Networks Profile",
      "Bonjour, je suis": "Hello, I'm",
      "Technicien Systèmes & Réseaux": "Systems & Network Technician",
      "Diplômé d'une Licence Professionnelle en Administration Avancée des Systèmes et Réseaux":
        "Graduate with a Professional Bachelor's Degree in Advanced Systems and Network Administration",
      "Je possède une expérience pratique en support IT, administration systèmes, réseaux et infrastructures informatiques. J'interviens sur l'installation, la configuration, la maintenance et le dépannage des équipements et services informatiques.":
        "I have hands-on experience in IT support, systems administration, networking and IT infrastructure. I work on the installation, configuration, maintenance and troubleshooting of IT equipment and services.",
      "Télécharger mon CV ↓": "Download my CV ↓",
      "Me contacter": "Contact me",
      "📍 Casablanca, Maroc": "📍 Casablanca, Morocco",
      "🚗 Permis B": "🚗 Driving licence (B)",

      /* ----- carte profil ----- */
      "Casablanca, Maroc": "Casablanca, Morocco",
      "Licence Professionnelle": "Professional Bachelor's Degree",
      "Systèmes & Réseaux": "Systems & Networks",
      "Permis B": "Driving licence (B)",

      /* ----- à propos ----- */
      "PRÉSENTATION": "PROFILE",
      "À propos de moi": "About me",
      "Un profil technique orienté systèmes, réseaux et infrastructures informatiques.":
        "A technical profile focused on systems, networks and IT infrastructure.",
      "Diplômé d'une <strong>Licence Professionnelle en Administration Avancée des Systèmes et Réseaux</strong>, ainsi que d'un <strong>Diplôme de Technicien Spécialisé en Infrastructure Digitale, option Systèmes et Réseaux</strong>, j'ai développé un profil technique orienté infrastructure et support IT.":
        "Graduate with a <strong>Professional Bachelor's Degree in Advanced Systems and Network Administration</strong> and a <strong>Specialized Technician Diploma in Digital Infrastructure, Systems and Networks option</strong>, I have developed a technical profile focused on infrastructure and IT support.",
      "Mon expérience professionnelle et mes interventions sur le terrain m'ont permis de renforcer mes compétences en administration Windows et Linux, réseaux LAN/WAN, support informatique, maintenance, virtualisation, sauvegarde, sécurité réseau et vidéosurveillance.":
        "My professional experience and field interventions have enabled me to strengthen my skills in Windows and Linux administration, LAN/WAN networks, IT support, maintenance, virtualization, backup, network security and video surveillance.",
      "J'interviens également sur l'installation, la configuration, le diagnostic et le dépannage des équipements et infrastructures informatiques.":
        "I also work on the installation, configuration, diagnosis and troubleshooting of IT equipment and infrastructure.",
      "Autonome, rigoureux et orienté résolution de problèmes, je souhaite continuer à développer mon expertise dans les systèmes, les réseaux et les infrastructures IT.":
        "Independent, rigorous and solution-oriented, I aim to continue developing my expertise in systems, networks and IT infrastructure.",
      "Localisation": "Location",
      "Diplôme": "Degree",
      "Spécialité": "Specialty",
      "Niveau 1 & 2": "Level 1 & 2",
      "Orientation": "Focus",
      "Infrastructure IT": "IT Infrastructure",
      "Mobilité": "Mobility",

      /* ----- compétences ----- */
      "EXPERTISE": "EXPERTISE",
      "Compétences techniques": "Technical Skills",
      "Mes principales compétences en administration systèmes, réseaux, virtualisation, sécurité et support IT.":
        "My main skills in systems administration, networking, virtualization, security and IT support.",
      "Administration Systèmes": "Systems Administration",
      "Installation, configuration et administration des systèmes Windows Server, des postes Windows et des environnements Linux.":
        "Installation, configuration and administration of Windows Server systems, Windows workstations and Linux environments.",
      "Services Microsoft": "Microsoft Services",
      "Administration des services Microsoft dans un environnement Windows Server et domaine d'entreprise.":
        "Administration of Microsoft services in Windows Server and enterprise domain environments.",
      "Réseaux informatiques": "Computer Networks",
      "Installation, configuration et dépannage des infrastructures réseau LAN/WAN.":
        "Installation, configuration and troubleshooting of LAN/WAN network infrastructures.",
      "Sécurité réseau": "Network Security",
      "Configuration de solutions de sécurité réseau, pare-feu et accès distant sécurisé.":
        "Configuration of network security solutions, firewalls and secure remote access.",
      "Création, déploiement et gestion d'environnements virtualisés pour les systèmes et services informatiques.":
        "Creation, deployment and management of virtualized environments for IT systems and services.",
      "Sauvegarde": "Backup",
      "Mise en place et gestion de solutions de sauvegarde pour les données et environnements informatiques.":
        "Implementation and management of backup solutions for data and IT environments.",
      "Support informatique": "IT Support",
      "Support utilisateurs N1/N2, diagnostic et résolution des incidents matériels, logiciels et réseau.":
        "Level 1/2 user support, diagnosis and resolution of hardware, software and network incidents.",
      "Utilisation et gestion des principaux outils collaboratifs Microsoft.":
        "Use and management of the main Microsoft collaboration tools.",
      "Installation, configuration, diagnostic et remise en service des infrastructures de vidéosurveillance.":
        "Installation, configuration, diagnosis and restoration of video surveillance infrastructure.",

      /* ----- réalisations ----- */
      "SUR LE TERRAIN": "FIELD WORK",
      "Réalisations & interventions": "Projects & Interventions",
      "Quelques projets illustrant mon expérience pratique.":
        "Selected projects demonstrating my hands-on experience.",
      "📍 Kénitra": "📍 Kenitra",
      "Accès distant sécurisé avec OpenVPN & pfSense": "Secure Remote Access with OpenVPN & pfSense",
      "Mise en place d'un accès distant sécurisé permettant à un collaborateur situé en Espagne d'accéder aux ressources autorisées du réseau de l'entreprise au Maroc via OpenVPN et pfSense.":
        "Implementation of secure remote access allowing a collaborator located in Spain to access authorized resources on the company's network in Morocco using OpenVPN and pfSense.",
      "Intervention": "Work performed",
      "Préparation de l'architecture réseau": "Network architecture preparation",
      "Configuration de pfSense": "pfSense configuration",
      "Mise en place du serveur OpenVPN": "OpenVPN server deployment",
      "Configuration de l'accès distant": "Remote access configuration",
      "Contrôle des accès aux ressources internes": "Internal resource access control",
      "Tests de connectivité et validation": "Connectivity testing and validation",
      "Voir le projet →": "View project →",
      "📍 ENCG Settat": "📍 ENCG Settat",
      "Vidéosurveillance IP & Réseau": "IP Video Surveillance & Networking",
      "Intervention sur une infrastructure de vidéosurveillance IP intégrant des liaisons sans fil TP-Link CPE510 pour transporter les flux vidéo vers le réseau principal et le NVR.":
        "Intervention on an IP video surveillance infrastructure integrating TP-Link CPE510 wireless links to transport video streams to the main network and NVR.",
      "Diagnostic des équipements": "Equipment diagnosis",
      "Intervention sur les caméras IP": "IP camera intervention",
      "Vérification du câblage": "Cabling verification",
      "Intervention sur les liaisons TP-Link CPE510": "TP-Link CPE510 wireless link intervention",
      "Vérification de la connectivité réseau": "Network connectivity verification",
      "Tests et remise en service": "Testing and service restoration",
      "🎓 PFE · Maghreb Steel": "🎓 Final Project · Maghreb Steel",
      "Projet de fin d'études consacré à l'installation, la configuration et la démonstration de Veeam Backup & Replication dans un environnement virtualisé.":
        "Final-year project focused on the installation, configuration and demonstration of Veeam Backup & Replication in a virtualized environment.",
      "Présentation et étude de la solution Veeam": "Presentation and study of the Veeam solution",
      "Installation et configuration en environnement virtualisé": "Installation and configuration in a virtualized environment",
      "Création et planification des Backup Jobs": "Creation and scheduling of Backup Jobs",
      "Configuration des paramètres et tentatives": "Configuration of parameters and retries",
      "Suivi des tâches de sauvegarde": "Backup task monitoring",
      "Tests de restauration": "Restore testing",

      /* ----- expérience ----- */
      "PARCOURS": "CAREER",
      "Expérience professionnelle": "Professional Experience",
      "Mon parcours dans le support informatique, les systèmes, les réseaux et les infrastructures IT.":
        "My experience in IT support, systems, networks and IT infrastructure.",
      "POSTE ACTUEL": "CURRENT POSITION",
      "Technicien Informatique / Systèmes & Réseaux": "IT / Systems & Network Technician",
      "Février 2025 – Présent": "February 2025 – Present",
      "Support informatique, maintenance, réseaux et interventions techniques sur site.":
        "IT support, maintenance, networking and technical on-site interventions.",
      "Support aux utilisateurs": "User support",
      "Diagnostic des incidents": "Incident diagnosis",
      "Installation des postes": "Workstation installation",
      "Maintenance matérielle et logicielle": "Hardware and software maintenance",
      "Installation et dépannage réseau": "Network installation and troubleshooting",
      "Configuration des équipements réseau": "Network equipment configuration",
      "Interventions techniques sur site": "Technical on-site interventions",
      "Technicien Informatique Freelance": "Freelance IT Technician",
      "Octobre 2024 – Janvier 2025": "October 2024 – January 2025",
      "Maintenance, diagnostic, installation des systèmes et assistance technique.":
        "Maintenance, diagnosis, system installation and technical assistance.",
      "Stagiaire PFE": "Final-Year Project Intern",
      "Mars 2024": "March 2024",
      "PROJET PFE": "FINAL-YEAR PROJECT",
      "Solution de sauvegarde avec Veeam Backup & Replication": "Backup solution with Veeam Backup & Replication",
      "Stagiaire Informatique": "IT Intern",
      "Avril 2023 – Mai 2023": "April 2023 – May 2023",
      "Participation aux activités de support et de maintenance informatique.":
        "Participation in IT support and maintenance activities.",

      /* ----- formation ----- */
      "PARCOURS ACADÉMIQUE": "ACADEMIC BACKGROUND",
      "Un parcours orienté vers les systèmes, les réseaux et les infrastructures informatiques.":
        "An academic background focused on systems, networks and IT infrastructure.",
      "✓ DIPLÔME OBTENU": "✓ DEGREE OBTAINED",
      "Administration Avancée des Systèmes et Réseaux": "Advanced Systems and Network Administration",
      "Faculté des Sciences Aïn Chock": "Faculty of Sciences Aïn Chock",
      "Formation spécialisée dans l'administration avancée des systèmes, réseaux et infrastructures informatiques.":
        "Specialized program in advanced systems, networks and IT infrastructure administration.",
      "Diplôme de Technicien Spécialisé": "Specialized Technician Diploma",
      "Infrastructure Digitale : Systèmes et Réseaux": "Digital Infrastructure: Systems and Networks",
      "Formation technique orientée systèmes, réseaux, infrastructure digitale et support informatique.":
        "Technical training focused on systems, networks, digital infrastructure and IT support.",
      "Baccalauréat Scientifique": "Scientific Baccalaureate",
      "Sciences Physiques": "Physical Sciences",
      "Lycée Oued Eddahab": "Oued Eddahab High School",
      "Formation scientifique constituant la base de mon parcours vers les technologies de l'information.":
        "Scientific education forming the foundation of my career in information technology.",

      /* ----- contact ----- */
      "Restons en contact": "Let's stay in touch",
      "Vous souhaitez échanger au sujet d'une opportunité professionnelle ou d'un projet IT ? N'hésitez pas à me contacter.":
        "Would you like to discuss a professional opportunity or an IT project? Feel free to contact me.",
      "● DISPONIBLE POUR ÉCHANGER": "● AVAILABLE TO CONNECT",
      "Échangeons sur vos besoins IT": "Let's discuss your IT needs",
      "Je suis disponible pour échanger autour d'opportunités professionnelles et de projets liés aux systèmes, réseaux, infrastructures IT, support informatique et vidéosurveillance.":
        "I am available to discuss professional opportunities and projects related to systems, networks, IT infrastructure, IT support and video surveillance.",
      "E-mail": "Email",
      "Téléphone": "Phone",
      "Envoyer un message": "Send a message",

      /* ----- pied de page ----- */
      "© 2026 Amine Kramo — Portfolio professionnel": "© 2026 Amine Kramo — Professional Portfolio"
    },


    /* ===================================================
       bfs-openvpn.html
    =================================================== */
    "bfs-openvpn": {

      "BFS | OpenVPN & pfSense | Amine Kramo": "BFS | OpenVPN & pfSense | Amine Kramo",
      "Projet BFS : mise en place d'un accès distant sécurisé entre le Maroc et l'Espagne avec OpenVPN et pfSense pour accéder aux ressources internes autorisées.":
        "BFS project: implementation of secure remote access between Morocco and Spain with OpenVPN and pfSense to reach authorized internal resources.",

      "PROJET RÉSEAU & SÉCURITÉ": "NETWORK & SECURITY PROJECT",
      "Accès distant sécurisé via": "Secure remote access via",
      "OpenVPN avec pfSense": "OpenVPN with pfSense",
      "Mise en place d'une solution permettant à un collaborateur situé en Espagne de se connecter de manière sécurisée aux ressources autorisées du réseau de l'entreprise situé au Maroc grâce à un tunnel VPN chiffré.":
        "Implementation of a solution allowing a collaborator located in Spain to connect securely to the authorized resources of the company network in Morocco through an encrypted VPN tunnel.",
      "🇲🇦 Maroc": "🇲🇦 Morocco",
      "🇪🇸 Espagne": "🇪🇸 Spain",

      "Permettre un accès distant sécurisé à l'infrastructure privée de l'entreprise sans exposer directement les ressources internes sur Internet.":
        "Enable secure remote access to the company's private infrastructure without directly exposing internal resources on the Internet.",
      "Contexte": "Context",
      "L'infrastructure principale de l'entreprise est située au Maroc. Un collaborateur travaillant depuis l'Espagne doit pouvoir accéder à certaines ressources internes nécessaires à son activité professionnelle.":
        "The company's main infrastructure is located in Morocco. A collaborator working from Spain must be able to access certain internal resources required for their professional activity.",
      "Objectifs du projet": "Project objectives",
      "Sécuriser l'accès distant.": "Secure remote access.",
      "Chiffrer les communications via OpenVPN.": "Encrypt communications via OpenVPN.",
      "Contrôler l'accès aux ressources internes.": "Control access to internal resources.",
      "Centraliser le VPN avec pfSense.": "Centralize the VPN with pfSense.",

      "Architecture BFS — Maroc / Espagne": "BFS Architecture — Morocco / Spain",
      "Vue globale de l'accès distant sécurisé. pfSense assure le rôle de pare-feu et de passerelle VPN, tandis que le poste distant utilise OpenVPN Client.":
        "Global view of the secure remote access. pfSense acts as firewall and VPN gateway, while the remote workstation uses OpenVPN Client.",
      "Architecture BFS entre le Maroc et l'Espagne avec pfSense et OpenVPN":
        "BFS architecture between Morocco and Spain with pfSense and OpenVPN",
      "Architecture logique du projet BFS : réseau local au Maroc et accès distant depuis l'Espagne via OpenVPN.":
        "Logical architecture of the BFS project: local network in Morocco and remote access from Spain via OpenVPN.",
      "<strong>🔐 Confidentialité :</strong> Ce schéma présente uniquement l'architecture générale du projet. Les adresses IP, identifiants, mots de passe, certificats, clés privées et autres informations sensibles de l'entreprise ne sont pas publiés.":
        "<strong>🔐 Confidentiality:</strong> This diagram only presents the general architecture of the project. IP addresses, usernames, passwords, certificates, private keys and other sensitive company information are not published.",

      "La connexion suit un parcours sécurisé depuis le poste distant jusqu'aux ressources internes autorisées.":
        "The connection follows a secure path from the remote workstation to the authorized internal resources.",
      "Réseau au Maroc": "Network in Morocco",
      "Le serveur principal et les postes des collaborateurs locaux sont connectés au réseau interne de l'entreprise.":
        "The main server and the local employees' workstations are connected to the company's internal network.",
      "pfSense protège l'infrastructure et assure le rôle de Firewall, VPN Gateway et OpenVPN Server.":
        "pfSense protects the infrastructure and acts as Firewall, VPN Gateway and OpenVPN Server.",
      "Employé distant": "Remote employee",
      "Le poste situé en Espagne dispose de l'application OpenVPN Client.":
        "The workstation located in Spain runs the OpenVPN Client application.",
      "Connexion Internet": "Internet connection",
      "Le client initie une connexion vers le service OpenVPN de l'entreprise au Maroc.":
        "The client initiates a connection to the company's OpenVPN service in Morocco.",
      "Tunnel sécurisé": "Secure tunnel",
      "Après authentification, un tunnel OpenVPN chiffré est établi entre le poste distant et pfSense.":
        "After authentication, an encrypted OpenVPN tunnel is established between the remote workstation and pfSense.",
      "Contrôle des accès": "Access control",
      "Les règles réseau définissent les ressources internes auxquelles l'utilisateur VPN peut accéder.":
        "Network rules define which internal resources the VPN user can access.",

      "Les principaux éléments techniques traités au cours de la mise en place de la solution.":
        "The main technical elements handled during the implementation of the solution.",
      "Architecture réseau": "Network architecture",
      "Préparation de l'architecture permettant la communication entre le site marocain et l'utilisateur distant.":
        "Preparation of the architecture enabling communication between the Moroccan site and the remote user.",
      "Utilisation de pfSense comme pare-feu et passerelle VPN de l'infrastructure.":
        "Use of pfSense as the infrastructure's firewall and VPN gateway.",
      "Mise en place du service OpenVPN pour assurer les connexions distantes sécurisées.":
        "Deployment of the OpenVPN service to provide secure remote connections.",
      "Client distant": "Remote client",
      "Préparation de l'accès OpenVPN permettant au collaborateur en Espagne d'établir la connexion VPN.":
        "Preparation of the OpenVPN access allowing the collaborator in Spain to establish the VPN connection.",
      "Définition de l'accès entre le réseau VPN et les ressources internes nécessaires.":
        "Definition of access between the VPN network and the necessary internal resources.",
      "Tests & validation": "Testing & validation",
      "Vérification du tunnel VPN, de la connectivité et de l'accès aux ressources autorisées.":
        "Verification of the VPN tunnel, connectivity and access to authorized resources.",

      "Technologies utilisées": "Technologies used",
      "Outils et technologies mobilisés dans l'architecture de la solution.":
        "Tools and technologies used in the solution architecture.",

      "Résultat du projet": "Project result",
      "Accès distant sécurisé et contrôlé": "Secure and controlled remote access",
      "La solution permet au collaborateur situé en Espagne d'établir une connexion sécurisée vers l'infrastructure de l'entreprise au Maroc. OpenVPN chiffre les communications, tandis que pfSense contrôle les échanges entre le VPN et les ressources internes autorisées.":
        "The solution allows the collaborator located in Spain to establish a secure connection to the company's infrastructure in Morocco. OpenVPN encrypts communications, while pfSense controls exchanges between the VPN and the authorized internal resources.",
      "© 2026 Amine Kramo — Projet BFS · Portfolio professionnel":
        "© 2026 Amine Kramo — BFS Project · Professional Portfolio"
    },


    /* ===================================================
       encg-cctv.html
    =================================================== */
    "encg-cctv": {

      "ENCG Settat | Vidéosurveillance IP & Réseau | Amine Kramo": "ENCG Settat | IP Video Surveillance & Networking | Amine Kramo",
      "Projet ENCG Settat : intervention sur une infrastructure de vidéosurveillance IP avec caméras réseau, TP-Link CPE510, liaison sans fil 5 GHz, Switch PoE et NVR.":
        "ENCG Settat project: intervention on an IP video surveillance infrastructure with network cameras, TP-Link CPE510, 5 GHz wireless link, PoE switch and NVR.",

      "PROJET VIDÉOSURVEILLANCE & RÉSEAU": "VIDEO SURVEILLANCE & NETWORK PROJECT",
      "Système de vidéosurveillance IP": "IP video surveillance system",
      "Intervention sur une infrastructure de vidéosurveillance IP intégrant des caméras réseau, des équipements de commutation et des liaisons sans fil TP-Link CPE510 afin d'assurer la transmission des flux vidéo entre différentes zones de l'établissement et le système central de surveillance.":
        "Intervention on an IP video surveillance infrastructure integrating network cameras, switching equipment and TP-Link CPE510 wireless links to ensure video stream transmission between different areas of the establishment and the central surveillance system.",

      "Assurer la transmission et la centralisation des flux vidéo provenant de différentes zones de l'établissement.":
        "Ensure the transmission and centralization of video streams coming from different areas of the establishment.",
      "Contexte du projet": "Project context",
      "L'ENCG Settat dispose de plusieurs zones à surveiller. Certaines caméras IP peuvent être installées à distance du local technique ou de la salle de surveillance. L'infrastructure doit permettre de transmettre les flux vidéo des différentes zones vers le réseau principal et le système d'enregistrement central.":
        "ENCG Settat has several areas to monitor. Some IP cameras may be installed far from the technical room or the monitoring room. The infrastructure must allow video streams from the different areas to be transmitted to the main network and the central recording system.",
      "Assurer la connectivité des caméras IP.": "Ensure IP camera connectivity.",
      "Relier les zones distantes au réseau principal.": "Connect remote areas to the main network.",
      "Centraliser les flux vidéo vers le NVR.": "Centralize video streams to the NVR.",
      "Vérifier le fonctionnement et la qualité des flux.": "Check stream operation and quality.",

      "Architecture vidéosurveillance & réseau": "Video surveillance & network architecture",
      "Représentation simplifiée de la transmission des flux des caméras IP vers la salle de surveillance de l'établissement.":
        "Simplified representation of IP camera stream transmission to the establishment's monitoring room.",
      "Architecture du système de vidéosurveillance IP de l'ENCG Settat utilisant TP-Link CPE510, Switch PoE et NVR":
        "Architecture of the ENCG Settat IP video surveillance system using TP-Link CPE510, PoE switch and NVR",
      "Schéma logique de l'infrastructure : caméras IP, réseau local, liaisons sans fil 5 GHz et centralisation des flux vers le NVR.":
        "Logical diagram of the infrastructure: IP cameras, local network, 5 GHz wireless links and stream centralization to the NVR.",
      "<strong>ℹ️ Note :</strong> Le schéma représente le principe général de l'architecture sans imposer un nombre précis d'équipements CPE510. La disposition réelle des équipements dépend des zones et des besoins de couverture de l'établissement.":
        "<strong>ℹ️ Note:</strong> The diagram shows the general principle of the architecture without imposing a specific number of CPE510 devices. The actual layout of the equipment depends on the areas and coverage needs of the establishment.",

      "ÉQUIPEMENTS": "EQUIPMENT",
      "Éléments de l'infrastructure": "Infrastructure components",
      "Principaux équipements intervenant dans la transmission et la centralisation des flux vidéo.":
        "Main equipment involved in the transmission and centralization of video streams.",
      "Capture des zones à surveiller et transmission des flux vidéo numériques à travers le réseau.":
        "Capture of the monitored areas and transmission of digital video streams across the network.",
      "Switch PoE": "PoE Switch",
      "Assure la connexion réseau des caméras et, lorsque l'équipement le permet, leur alimentation électrique via Ethernet.":
        "Provides the cameras' network connection and, when the device allows it, their power supply over Ethernet.",
      "Équipement extérieur 5 GHz permettant de créer une liaison réseau sans fil entre plusieurs zones de l'établissement.":
        "Outdoor 5 GHz device used to create a wireless network link between several areas of the establishment.",
      "Réseau principal": "Main network",
      "Infrastructure réseau transportant les flux des caméras vers le local ou la salle de surveillance.":
        "Network infrastructure carrying the camera streams to the technical room or monitoring room.",
      "Réception, enregistrement et conservation des flux vidéo provenant des caméras IP.":
        "Reception, recording and retention of video streams coming from the IP cameras.",
      "Poste de surveillance": "Monitoring workstation",
      "Visualisation des caméras et consultation des flux vidéo et des enregistrements.":
        "Camera viewing and consultation of video streams and recordings.",

      "FLUX RÉSEAU": "NETWORK FLOW",
      "Parcours du flux vidéo": "Video stream path",
      "Exemple logique de transmission d'une caméra distante vers le système central.":
        "Logical example of transmission from a remote camera to the central system.",
      "📹 Caméras IP": "📹 IP Cameras",
      "📶 Liaison 5 GHz": "📶 5 GHz link",
      "🌐 Réseau principal": "🌐 Main network",
      "🖥️ Surveillance": "🖥️ Monitoring",

      "Du captage de l'image jusqu'à l'enregistrement et la visualisation.":
        "From image capture to recording and viewing.",
      "Capture vidéo": "Video capture",
      "Les caméras IP capturent les différentes zones de surveillance de l'établissement.":
        "The IP cameras capture the different surveillance areas of the establishment.",
      "Connexion réseau": "Network connection",
      "Les caméras sont raccordées à l'infrastructure réseau, notamment via des switches.":
        "The cameras are connected to the network infrastructure, notably via switches.",
      "Zone distante": "Remote area",
      "Lorsqu'une zone est éloignée du réseau principal, une liaison sans fil peut transporter les données vers le site central.":
        "When an area is far from the main network, a wireless link can carry the data to the central site.",
      "Liaison 5 GHz": "5 GHz link",
      "Les équipements TP-Link CPE510 assurent la transmission réseau sans fil entre les zones concernées.":
        "The TP-Link CPE510 devices provide wireless network transmission between the areas concerned.",
      "Centralisation": "Centralization",
      "Les flux rejoignent le réseau principal puis sont transmis vers le système d'enregistrement NVR.":
        "The streams join the main network and are then sent to the NVR recording system.",
      "Surveillance": "Monitoring",
      "Le NVR permet l'enregistrement tandis que le poste de surveillance permet la visualisation des caméras.":
        "The NVR handles recording while the monitoring workstation allows camera viewing.",

      "Principales tâches réalisées lors de l'intervention sur l'infrastructure.":
        "Main tasks carried out during the intervention on the infrastructure.",
      "Intervention sur les caméras et vérification de leur fonctionnement.":
        "Intervention on the cameras and verification of their operation.",
      "Raccordement réseau": "Network connection",
      "Vérification et raccordement des équipements à l'infrastructure réseau.":
        "Verification and connection of the equipment to the network infrastructure.",
      "Liaison sans fil": "Wireless link",
      "Intervention sur les équipements TP-Link CPE510 utilisés pour transporter les données entre les différentes zones.":
        "Intervention on the TP-Link CPE510 devices used to carry data between the different areas.",
      "Configuration réseau": "Network configuration",
      "Vérification de la communication entre les équipements et le réseau principal.":
        "Verification of communication between the equipment and the main network.",
      "Vérification de la réception des flux vidéo au niveau du système d'enregistrement.":
        "Verification of video stream reception at the recording system.",
      "Tests & remise en service": "Testing & service restoration",
      "Tests de connectivité, vérification des flux et validation du bon fonctionnement de la solution.":
        "Connectivity tests, stream verification and validation of the proper operation of the solution.",

      "Technologies & équipements": "Technologies & equipment",
      "Résultat de l'intervention": "Intervention result",
      "Vidéosurveillance centralisée et fonctionnelle": "Centralized and functional video surveillance",
      "L'infrastructure permet la transmission des flux vidéo depuis différentes zones de l'établissement vers le système central de surveillance. Les liaisons réseau et sans fil permettent de transporter les données des caméras, tandis que le NVR assure leur enregistrement et leur disponibilité pour la visualisation.":
        "The infrastructure allows video streams to be transmitted from different areas of the establishment to the central surveillance system. The network and wireless links carry the camera data, while the NVR ensures their recording and availability for viewing.",
      "© 2026 Amine Kramo — Projet Vidéosurveillance ENCG Settat · Portfolio professionnel":
        "© 2026 Amine Kramo — ENCG Settat Video Surveillance Project · Professional Portfolio"
    },


    /* ===================================================
       veeam-backup.html
    =================================================== */
    "veeam-backup": {

      "Veeam Backup & Replication | PFE Maghreb Steel | Amine Kramo": "Veeam Backup & Replication | Final-Year Project Maghreb Steel | Amine Kramo",
      "Projet PFE réalisé durant un stage chez Maghreb Steel : étude et configuration de Veeam Backup & Replication dans un environnement virtualisé, avec Backup Jobs, planification et tests de restauration.":
        "Final-year project carried out during an internship at Maghreb Steel: study and configuration of Veeam Backup & Replication in a virtualized environment, with Backup Jobs, scheduling and restore tests.",

      "PROJET DE FIN D'ÉTUDES": "FINAL-YEAR PROJECT",
      "Solution de sauvegarde avec Veeam Backup & Replication": "Backup solution with Veeam Backup & Replication",
      "Solution de sauvegarde avec": "Backup solution with",
      "Projet de fin d'études réalisé dans le cadre d'un stage au sein de Maghreb Steel, consacré à l'étude, l'installation et la configuration d'une solution de sauvegarde et de restauration dans un environnement virtualisé.":
        "Final-year project carried out during an internship at Maghreb Steel, dedicated to the study, installation and configuration of a backup and restore solution in a virtualized environment.",
      "☁️ Virtualisation": "☁️ Virtualization",

      "Contexte & objectifs": "Context & objectives",
      "Étudier et mettre en œuvre les principes d'une stratégie de sauvegarde permettant de protéger les données et les machines virtuelles.":
        "Study and implement the principles of a backup strategy that protects data and virtual machines.",
      "Contexte du PFE": "Project context",
      "Le projet a été réalisé durant mon stage de fin d'études au sein de Maghreb Steel. Le travail était consacré à la solution Veeam Backup & Replication et à son utilisation dans un environnement virtualisé pour configurer, planifier et tester des opérations de sauvegarde et de restauration.":
        "The project was carried out during my final-year internship at Maghreb Steel. The work focused on the Veeam Backup & Replication solution and its use in a virtualized environment to configure, schedule and test backup and restore operations.",
      "Comprendre les principes de sauvegarde.": "Understand backup principles.",
      "Installer et configurer Veeam.": "Install and configure Veeam.",
      "Créer des tâches de sauvegarde.": "Create backup jobs.",
      "Automatiser les sauvegardes par planification.": "Automate backups through scheduling.",
      "Étudier et tester les mécanismes de restauration.": "Study and test restore mechanisms.",

      "ENVIRONNEMENT TECHNIQUE": "TECHNICAL ENVIRONMENT",
      "Environnement virtualisé": "Virtualized environment",
      "Le projet présente l'utilisation de Veeam Backup & Replication dans un environnement de virtualisation.":
        "The project presents the use of Veeam Backup & Replication in a virtualization environment.",
      "Infrastructure virtualisée": "Virtualized infrastructure",
      "Environnement contenant les machines virtuelles utilisées comme sources pour les opérations de sauvegarde et de restauration.":
        "Environment containing the virtual machines used as sources for backup and restore operations.",
      "Solution utilisée pour configurer les tâches de sauvegarde, gérer leur exécution et étudier les mécanismes de restauration.":
        "Solution used to configure backup jobs, manage their execution and study restore mechanisms.",
      "Stockage des sauvegardes": "Backup storage",
      "Destination logique utilisée pour conserver les données générées par les tâches de sauvegarde.":
        "Logical destination used to store the data generated by backup jobs.",

      "ARCHITECTURE LOGIQUE": "LOGICAL ARCHITECTURE",
      "Cycle de sauvegarde": "Backup cycle",
      "Vue simplifiée du fonctionnement étudié pendant le projet.":
        "Simplified view of the operation studied during the project.",
      "☁️ Machines virtuelles": "☁️ Virtual machines",
      "📅 Planification": "📅 Scheduling",
      "🗄️ Sauvegarde": "🗄️ Backup",

      "MISE EN ŒUVRE": "IMPLEMENTATION",
      "Étapes du projet": "Project steps",
      "Principales opérations étudiées et présentées dans le cadre du PFE.":
        "Main operations studied and presented as part of the final-year project.",
      "Présentation de Veeam": "Presentation of Veeam",
      "Étude du rôle de Veeam Backup & Replication, de ses principales fonctions et de son utilisation dans la protection des environnements virtualisés.":
        "Study of the role of Veeam Backup & Replication, its main functions and its use in protecting virtualized environments.",
      "Installation": "Installation",
      "Installation de la solution dans l'environnement utilisé pour la réalisation du projet.":
        "Installation of the solution in the environment used for the project.",
      "Préparation des composants nécessaires à la création et à l'exécution des tâches de sauvegarde.":
        "Preparation of the components required to create and run backup jobs.",
      "Création de tâches de sauvegarde avec sélection des éléments à protéger et définition des paramètres nécessaires.":
        "Creation of backup jobs, selecting the items to protect and defining the necessary settings.",
      "Définition des horaires et des fréquences d'exécution afin d'automatiser les opérations de sauvegarde.":
        "Definition of schedules and execution frequencies to automate backup operations.",
      "Tentatives & reprise": "Retries & recovery",
      "Étude des paramètres liés aux tentatives d'exécution lorsqu'une tâche de sauvegarde ne se termine pas correctement.":
        "Study of the settings related to execution retries when a backup job does not complete correctly.",
      "Vérification": "Verification",
      "Contrôle de l'état des tâches et validation du bon déroulement des opérations de sauvegarde.":
        "Monitoring of job status and validation of the proper execution of backup operations.",
      "Restauration": "Restore",
      "Étude et réalisation de tests permettant de vérifier le principe de récupération des données sauvegardées.":
        "Study and execution of tests to verify the principle of recovering backed-up data.",

      "PRÉSENTATION DU PROJET": "PROJECT PRESENTATION",
      "Démonstration & présentation technique": "Demonstration & technical presentation",
      "Présentation des principales étapes de configuration de Veeam Backup & Replication, notamment les tâches de sauvegarde et leur planification.":
        "Presentation of the main configuration steps of Veeam Backup & Replication, notably backup jobs and their scheduling.",
      "Présentation du projet PFE Veeam Backup & Replication":
        "Presentation of the Veeam Backup & Replication final-year project",
      "Présentation technique du projet de fin d'études consacré à Veeam Backup & Replication.":
        "Technical presentation of the final-year project on Veeam Backup & Replication.",
      "<strong>ℹ️ Précision :</strong> Cette page présente le projet réalisé dans un environnement virtualisé. Elle ne prétend pas représenter un déploiement sur l'infrastructure de production de Maghreb Steel.":
        "<strong>ℹ️ Clarification:</strong> This page presents the project carried out in a virtualized environment. It does not claim to represent a deployment on Maghreb Steel's production infrastructure.",

      "Principales tâches réalisées dans le cadre de ce projet de fin d'études.":
        "Main tasks carried out as part of this final-year project.",
      "Étude de la solution": "Study of the solution",
      "Analyse des fonctionnalités de Veeam Backup & Replication et des principes de protection des données.":
        "Analysis of the features of Veeam Backup & Replication and of data protection principles.",
      "Installation & configuration": "Installation & configuration",
      "Installation et préparation de la solution dans l'environnement virtualisé du projet.":
        "Installation and preparation of the solution in the project's virtualized environment.",
      "Création et configuration des tâches de sauvegarde.": "Creation and configuration of backup jobs.",
      "Paramétrage des horaires et de l'exécution automatique des tâches de sauvegarde.":
        "Configuration of schedules and automatic execution of backup jobs.",
      "Gestion des tentatives": "Retry management",
      "Étude des paramètres de reprise et de nouvelle tentative en cas d'échec d'une tâche.":
        "Study of the recovery and retry settings in case of job failure.",
      "Tests de restauration": "Restore tests",
      "Réalisation de tests afin d'étudier et de valider le processus de restauration.":
        "Execution of tests to study and validate the restore process.",

      "Technologies & concepts": "Technologies & concepts",
      "Résultat du projet": "Project result",
      "Maîtrise du cycle sauvegarde / restauration": "Mastery of the backup / restore cycle",
      "Le projet m'a permis d'approfondir le fonctionnement de Veeam Backup & Replication, depuis la création et la planification des Backup Jobs jusqu'au suivi des tâches et aux tests de restauration dans un environnement virtualisé.":
        "The project allowed me to deepen my understanding of Veeam Backup & Replication, from the creation and scheduling of Backup Jobs to job monitoring and restore tests in a virtualized environment.",
      "© 2026 Amine Kramo — Projet PFE Veeam Backup & Replication · Portfolio professionnel":
        "© 2026 Amine Kramo — Veeam Backup & Replication Final-Year Project · Professional Portfolio"
    }
  };


  /* =======================================================
     OUTILS
  ======================================================= */

  var INLINE_TAGS = { STRONG: 1, EM: 1, B: 1, I: 1, BR: 1, CODE: 1, ABBR: 1, MARK: 1 };
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEMPLATE: 1, SVG: 1, TEXTAREA: 1 };
  var ATTRS = ["alt", "title", "aria-label", "placeholder"];

  // espaces multiples -> un seul ; espaces autour des balises supprimés
  function norm(s) {
    return String(s)
      .replace(/\s+/g, " ")
      .replace(/\s*(<\/?[a-z]+>)\s*/gi, "$1")
      .trim();
  }

  function padOf(original) {
    return {
      lead: (original.match(/^\s*/) || [""])[0],
      trail: (original.match(/\s*$/) || [""])[0]
    };
  }

  function readStorage() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function writeStorage(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) { /* ignoré */ }
  }

  function pageId() {
    var name = location.pathname.split("/").pop().replace(/\.html?$/i, "");
    return name || "index";
  }

  // dictionnaire final = COMMON + page courante, clés normalisées
  function buildDictionary() {
    var dict = {};
    [COMMON, PAGES[pageId()] || {}].forEach(function (source) {
      Object.keys(source).forEach(function (key) {
        dict[norm(key)] = source[key];
      });
    });
    return dict;
  }


  /* =======================================================
     COLLECTE DES TEXTES DE LA PAGE ("slots")
     Un slot = un texte français qui peut être remplacé.
  ======================================================= */

  var slots = [];

  function serialize(el) {
    var out = "";
    el.childNodes.forEach(function (node) {
      if (node.nodeType === 3) {
        out += node.data;
      } else if (node.nodeType === 1) {
        var tag = node.tagName.toLowerCase();
        out += tag === "br" ? "<br>" : "<" + tag + ">" + serialize(node) + "</" + tag + ">";
      }
    });
    return out;
  }

  function addTextSlot(node) {
    var original = node.data;
    var pad = padOf(original);
    slots.push({
      key: norm(original),
      apply: function (value) { node.data = pad.lead + value + pad.trail; },
      restore: function () { node.data = original; },
      plain: true
    });
  }

  function addBlockSlot(el) {
    var originalHTML = el.innerHTML;
    var pad = padOf(originalHTML);
    slots.push({
      key: norm(serialize(el)),
      apply: function (value) { el.innerHTML = pad.lead + value + pad.trail; },
      restore: function () { el.innerHTML = originalHTML; }
    });
  }

  function addAttrSlot(el, attr) {
    var original = el.getAttribute(attr);
    slots.push({
      key: norm(original),
      apply: function (value) { el.setAttribute(attr, value); },
      restore: function () { el.setAttribute(attr, original); },
      plain: true
    });
  }

  function hasDirectText(el) {
    for (var i = 0; i < el.childNodes.length; i++) {
      var n = el.childNodes[i];
      if (n.nodeType === 3 && n.data.trim()) return true;
    }
    return false;
  }

  function onlyInlineChildren(el) {
    for (var i = 0; i < el.children.length; i++) {
      if (!INLINE_TAGS[el.children[i].tagName]) return false;
      if (el.children[i].children.length && !onlyInlineChildren(el.children[i])) return false;
    }
    return true;
  }

  function walk(el) {
    if (SKIP_TAGS[el.tagName.toUpperCase()]) return;
    if (el.getAttribute("translate") === "no" || el.hasAttribute("data-no-i18n")) return;

    ATTRS.forEach(function (attr) {
      if (el.hasAttribute(attr) && el.getAttribute(attr).trim()) addAttrSlot(el, attr);
    });

    if (hasDirectText(el) && onlyInlineChildren(el)) {
      // paragraphe complet (peut contenir <strong>, <br>...) -> un seul slot
      addBlockSlot(el);
      return;
    }

    el.childNodes.forEach(function (node) {
      if (node.nodeType === 3) {
        if (node.data.trim()) addTextSlot(node);
      } else if (node.nodeType === 1) {
        walk(node);
      }
    });
  }

  function collectSlots() {
    slots = [];

    // <title>
    if (document.title) {
      var originalTitle = document.title;
      slots.push({
        key: norm(originalTitle),
        apply: function (value) { document.title = value; },
        restore: function () { document.title = originalTitle; },
        plain: true
      });
    }

    // <meta name="description">
    var meta = document.querySelector('meta[name="description"]');
    if (meta && meta.content) addAttrSlot(meta, "content");

    walk(document.body);
  }


  /* =======================================================
     LANGUE
  ======================================================= */

  var dictionary = {};
  var currentLang = DEFAULT_LANG;
  var langButton = null;

  function applyCV(lang) {
    var file = CV_FILES[lang] || CV_FILES[DEFAULT_LANG];
    document.querySelectorAll('a[href^="CV-KRAMO-AMINE"]').forEach(function (link) {
      link.setAttribute("href", file);
    });
  }

  function updateButton(lang) {
    if (!langButton) return;
    langButton.textContent = lang === "fr" ? "EN" : "FR";
    langButton.setAttribute("aria-label", lang === "fr" ? "Switch to English" : "Passer en français");
    langButton.setAttribute("title", lang === "fr" ? "English" : "Français");
  }

  function applyLanguage(lang) {
    if (lang !== "fr" && lang !== "en") lang = DEFAULT_LANG;

    var missing = [];

    slots.forEach(function (slot) {
      if (lang === "fr") {
        slot.restore();
        return;
      }
      var translation = dictionary[slot.key];
      if (translation !== undefined) {
        slot.apply(translation);
      } else {
        slot.restore();
        missing.push(slot.key);
      }
    });

    currentLang = lang;
    document.documentElement.lang = lang;

    applyCV(lang);
    updateButton(lang);
    writeStorage(lang);

    window.__i18nMissing = missing;
    if (lang === "en" && /i18n-debug/.test(location.search) && missing.length) {
      console.group("[i18n] textes sans traduction (" + missing.length + ")");
      missing.forEach(function (key) { console.log(key); });
      console.groupEnd();
    }
  }


  /* =======================================================
     BOUTON FR / EN
  ======================================================= */
  /* =======================================================
     BOUTON FR / EN — VERSION CORRIGÉE
     Visible sur ordinateur et téléphone
  ======================================================= */

  function injectButtonStyle() {
    if (document.getElementById("langButtonStyle")) return;

    var style = document.createElement("style");
    style.id = "langButtonStyle";

    style.textContent =
      "#langButton{" +
      "flex-shrink:0;" +
      "min-width:44px;" +
      "padding:7px 12px;" +
      "border-radius:9px;" +
      "border:1px solid rgba(34,211,238,.35);" +
      "background:rgba(34,211,238,.08);" +
      "color:#22d3ee;" +
      "font-family:inherit;" +
      "font-size:.82rem;" +
      "font-weight:800;" +
      "cursor:pointer;" +
      "transition:.25s;" +
      "margin-left:12px;" +
      "}" +

      "#langButton:hover{" +
      "background:#22d3ee;" +
      "color:#04101d;" +
      "}";

    document.head.appendChild(style);
  }


  function setupButton() {
    langButton = document.getElementById("langButton");

    if (langButton) return;

    var navbar = document.querySelector(".navbar");
    var mainNav = document.getElementById("mainNav");
    var menuToggle = document.getElementById("menuToggle");

    if (!navbar) return;

    langButton = document.createElement("button");

    langButton.id = "langButton";
    langButton.type = "button";
    langButton.setAttribute("aria-label", "Changer la langue");
    langButton.textContent = "EN";

    // Le bouton reste visible même lorsque le menu mobile est fermé.
    if (menuToggle && menuToggle.parentNode === navbar) {
      menuToggle.insertAdjacentElement("afterend", langButton);
    } else if (mainNav && mainNav.parentNode === navbar) {
      navbar.insertBefore(langButton, mainNav);
    } else {
      navbar.appendChild(langButton);
    }

    injectButtonStyle();
  }


  /* =======================================================
     DÉMARRAGE
  ======================================================= */

  function init() {
    dictionary = buildDictionary();
    collectSlots();
    setupButton();

    var saved = readStorage();
    applyLanguage(saved === "en" ? "en" : DEFAULT_LANG);

    if (langButton) {
      langButton.addEventListener("click", function () {
        applyLanguage(currentLang === "fr" ? "en" : "fr");
      });
    }
  }

  // petite API publique (utile pour le menu mobile ou les tests)
  window.siteLang = {
    get: function () { return currentLang; },
    set: applyLanguage
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
