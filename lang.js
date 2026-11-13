/* Portfolio Amine Kramo - FR / EN */
(function () {
  "use strict";

  const CONFIG = {
    cvFR: "CV-KRAMO-AMINE.pdf",
    cvEN: "CV-KRAMO-AMINE-EN.pdf",
    titleFR: "Amine Kramo | Technicien Systèmes & Réseaux",
    titleEN: "Amine Kramo | Systems & Networks Technician",
    descriptionFR: "Portfolio professionnel d'Amine Kramo, Technicien Systèmes & Réseaux à Casablanca.",
    descriptionEN: "Professional portfolio of Amine Kramo, Systems & Networks Technician based in Casablanca."
  };

  const EN = {
    "Accueil":"Home","À propos":"About","Compétences":"Skills","Réalisations":"Projects","Expérience":"Experience","Formation":"Education","Contact":"Contact",
    "Profil Systèmes & Réseaux":"Systems & Networks Profile","Bonjour, je suis":"Hello, I'm","Technicien Systèmes & Réseaux":"Systems & Networks Technician",
    "Diplômé d'une Licence Professionnelle en Administration Avancée des Systèmes et Réseaux":"Graduate with a Professional Bachelor's Degree in Advanced Systems and Network Administration",
    "Je possède une expérience pratique en support IT, administration systèmes, réseaux et infrastructures informatiques. J'interviens sur l'installation, la configuration, la maintenance et le dépannage des équipements et services informatiques.":"I have hands-on experience in IT support, systems administration, networking and IT infrastructure. I work on the installation, configuration, maintenance and troubleshooting of IT equipment and services.",
    "Télécharger mon CV ↓":"Download my CV ↓","Me contacter":"Contact me","Casablanca, Maroc":"Casablanca, Morocco","Permis B":"Category B Driving Licence","Licence Professionnelle":"Professional Bachelor's Degree","Systèmes & Réseaux":"Systems & Networks",
    "PRÉSENTATION":"PROFILE","À propos de moi":"About Me","Un profil technique orienté systèmes, réseaux et infrastructures informatiques.":"A technical profile focused on systems, networks and IT infrastructure.",
    "Diplômé d'une Licence Professionnelle en Administration Avancée des Systèmes et Réseaux, ainsi que d'un Diplôme de Technicien Spécialisé en Infrastructure Digitale, option Systèmes et Réseaux, j'ai développé un profil technique orienté infrastructure et support IT.":"I hold a Professional Bachelor's Degree in Advanced Systems and Network Administration, as well as a Specialized Technician Diploma in Digital Infrastructure, Systems and Networks. I have developed a technical profile focused on IT infrastructure and support.",
    "Mon expérience professionnelle et mes interventions sur le terrain m'ont permis de renforcer mes compétences en administration Windows et Linux, réseaux LAN/WAN, support informatique, maintenance, virtualisation, sauvegarde, sécurité réseau et vidéosurveillance.":"My professional experience and field work have strengthened my skills in Windows and Linux administration, LAN/WAN networking, IT support, maintenance, virtualization, backup, network security and video surveillance.",
    "J'interviens également sur l'installation, la configuration, le diagnostic et le dépannage des équipements et infrastructures informatiques.":"I also work on the installation, configuration, diagnosis and troubleshooting of IT equipment and infrastructure.",
    "Autonome, rigoureux et orienté résolution de problèmes, je souhaite continuer à développer mon expertise dans les systèmes, les réseaux et les infrastructures IT.":"Independent, rigorous and solution-oriented, I aim to continue developing my expertise in systems, networks and IT infrastructure.",
    "Localisation":"Location","Diplôme":"Degree","Spécialité":"Specialization","Support":"Support","Niveau 1 & 2":"Level 1 & 2","Orientation":"Focus","Infrastructure IT":"IT Infrastructure","Mobilité":"Mobility",
    "EXPERTISE":"EXPERTISE","Compétences techniques":"Technical Skills","Mes principales compétences en systèmes, réseaux, infrastructures et support IT.":"My main technical skills in systems, networks, IT infrastructure and support.",
    "Support informatique":"IT Support","Support utilisateurs N1/N2, diagnostic et résolution des incidents matériels, logiciels et réseau.":"Level 1/2 user support, diagnosis and resolution of hardware, software and network incidents.","Support N1/N2":"Level 1/2 Support","Diagnostic":"Diagnostics","Maintenance":"Maintenance",
    "Windows & Linux":"Windows & Linux","Installation, configuration, administration et maintenance des postes et systèmes informatiques.":"Installation, configuration, administration and maintenance of workstations and IT systems.","Administration":"Administration",
    "Réseaux informatiques":"Computer Networks","Installation, configuration et dépannage des infrastructures réseau.":"Installation, configuration and troubleshooting of network infrastructures.","Sécurité réseau":"Network Security","Configuration de solutions permettant de sécuriser les infrastructures réseau.":"Configuration of solutions designed to secure network infrastructures.",
    "Virtualisation":"Virtualization","Création et utilisation d'environnements virtualisés pour systèmes et services.":"Creation and use of virtualized environments for systems and services.","Sauvegarde & restauration":"Backup & Recovery","Solutions de sauvegarde et de restauration des données et environnements informatiques.":"Backup and recovery solutions for data and IT environments.",
    "Vidéosurveillance":"Video Surveillance","Installation, configuration, diagnostic et remise en service des équipements CCTV.":"Installation, configuration, diagnostics and recommissioning of CCTV equipment.","Caméras IP":"IP Cameras","Utilisation et gestion des principaux outils collaboratifs Microsoft.":"Use and management of Microsoft collaboration tools.",
    "SUR LE TERRAIN":"FIELD EXPERIENCE","Réalisations & interventions":"Projects & Field Work","Quelques projets illustrant mon expérience pratique.":"Selected projects demonstrating my hands-on experience.",
    "Infrastructure réseau sécurisée avec pfSense":"Secure Network Infrastructure with pfSense","Participation à la mise en place d'une infrastructure réseau sécurisée avec pfSense.":"Participation in the deployment of a secure network infrastructure using pfSense.","Intervention":"Work Performed","Mise en place de l'infrastructure réseau":"Network infrastructure deployment","Configuration LAN/WAN":"LAN/WAN configuration","Configuration du pare-feu pfSense":"pfSense firewall configuration","Connexion des équipements réseau":"Network equipment connectivity","Vérification de la connectivité":"Connectivity verification","Tests et dépannage":"Testing and troubleshooting",
    "Vidéosurveillance & Réseau":"Video Surveillance & Network","Intervention sur l'infrastructure de vidéosurveillance et le réseau informatique de l'établissement.":"Work on the organization's video surveillance infrastructure and computer network.","Diagnostic des équipements":"Equipment diagnostics","Intervention sur les caméras":"Camera intervention and maintenance","Vérification du câblage":"Cabling verification","Configuration des équipements":"Equipment configuration","Intervention réseau":"Network intervention","Tests et remise en service":"Testing and recommissioning","Câblage":"Cabling",
    "Projet de Fin d'Études":"Final Year Project","Solution de sauvegarde avec Veeam":"Backup Solution with Veeam","Projet consacré à l'étude et à la mise en œuvre d'une solution de sauvegarde et de restauration avec Veeam Backup & Replication.":"Project focused on the study and implementation of a backup and recovery solution using Veeam Backup & Replication.","Étude du fonctionnement de Veeam":"Study of Veeam functionality","Mise en place d'une solution de sauvegarde":"Implementation of a backup solution","Configuration des tâches de sauvegarde":"Backup job configuration","Étude des méthodes de restauration":"Study of recovery methods",
    "PARCOURS":"CAREER","Expérience professionnelle":"Professional Experience","Mon parcours dans le support informatique, les systèmes, les réseaux et les infrastructures IT.":"My professional background in IT support, systems, networks and IT infrastructure.","POSTE ACTUEL":"CURRENT POSITION","Technicien Informatique / Systèmes & Réseaux":"IT / Systems & Networks Technician","Février 2025 – Présent":"February 2025 – Present","Support informatique, maintenance, réseaux et interventions techniques sur site.":"IT support, maintenance, networking and on-site technical interventions.","Support aux utilisateurs":"User support","Diagnostic des incidents":"Incident diagnosis","Installation des postes":"Workstation installation","Maintenance matérielle et logicielle":"Hardware and software maintenance","Installation et dépannage réseau":"Network installation and troubleshooting","Configuration des équipements réseau":"Network equipment configuration","Interventions techniques sur site":"On-site technical interventions","Technicien Informatique Freelance":"Freelance IT Technician","Octobre 2024 – Janvier 2025":"October 2024 – January 2025","Maintenance, diagnostic, installation des systèmes et assistance technique.":"Maintenance, diagnostics, system installation and technical support.","Stagiaire PFE":"Final Year Project Intern","Mars 2024":"March 2024","PROJET PFE":"FINAL YEAR PROJECT","Stagiaire Informatique":"IT Intern","Avril 2023 – Mai 2023":"April 2023 – May 2023","Participation aux activités de support et de maintenance informatique.":"Participation in IT support and maintenance activities.",
    "PARCOURS ACADÉMIQUE":"ACADEMIC BACKGROUND","Un parcours orienté vers les systèmes, les réseaux et les infrastructures informatiques.":"An academic background focused on systems, networks and IT infrastructure.","✓ DIPLÔME OBTENU":"✓ DEGREE OBTAINED","Administration Avancée des Systèmes et Réseaux":"Advanced Systems and Network Administration","Faculté des Sciences Aïn Chock":"Faculty of Sciences Aïn Chock","Formation spécialisée dans l'administration avancée des systèmes, réseaux et infrastructures informatiques.":"Specialized training in advanced systems, networks and IT infrastructure administration.","Systèmes":"Systems","Réseaux":"Networks","Diplôme de Technicien Spécialisé":"Specialized Technician Diploma","Infrastructure Digitale : Systèmes et Réseaux":"Digital Infrastructure: Systems & Networks","Formation technique orientée systèmes, réseaux, infrastructure digitale et support informatique.":"Technical training focused on systems, networks, digital infrastructure and IT support.","Baccalauréat Scientifique":"Scientific Baccalaureate","Sciences Physiques":"Physical Sciences","Formation scientifique constituant la base de mon parcours vers les technologies de l'information.":"Scientific education that provided the foundation for my career in information technology.",
    "Restons en contact":"Let's Connect","Vous souhaitez échanger au sujet d'une opportunité professionnelle ou d'un projet IT ? N'hésitez pas à me contacter.":"Would you like to discuss a professional opportunity or an IT project? Feel free to contact me.","● DISPONIBLE POUR ÉCHANGER":"● AVAILABLE TO CONNECT","Échangeons sur vos besoins IT":"Let's Discuss Your IT Needs","Je suis disponible pour échanger autour d'opportunités professionnelles et de projets liés aux systèmes, réseaux, infrastructures IT, support informatique et vidéosurveillance.":"I am available to discuss professional opportunities and projects related to systems, networks, IT infrastructure, IT support and video surveillance.","Infrastructure":"Infrastructure","E-mail":"Email","Téléphone":"Phone","Envoyer un message":"Send a message","© 2026 Amine Kramo — Portfolio professionnel":"© 2026 Amine Kramo — Professional Portfolio"
  };

  function normalize(text) { return text.replace(/\s+/g, " ").trim(); }

  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: function (node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  while (walker.nextNode()) textNodes.push({ node: walker.currentNode, french: walker.currentNode.nodeValue });

  const nav = document.querySelector("nav");
  const langButton = document.createElement("button");
  langButton.id = "langButton";
  langButton.type = "button";
  langButton.textContent = "EN";
  langButton.setAttribute("aria-label", "Afficher le portfolio en anglais");
  if (nav) nav.appendChild(langButton);

  function updateCV(language) {
    document.querySelectorAll('a[download][href$=".pdf"]').forEach(function (link) {
      link.setAttribute("href", language === "en" ? CONFIG.cvEN : CONFIG.cvFR);
    });
  }

  function updateMeta(language) {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", language === "en" ? CONFIG.descriptionEN : CONFIG.descriptionFR);
  }

  function applyLanguage(language) {
    textNodes.forEach(function (item) {
      const original = item.french;
      const translated = EN[normalize(original)];
      if (language === "en" && translated) {
        const leading = (original.match(/^\s*/) || [""])[0];
        const trailing = (original.match(/\s*$/) || [""])[0];
        item.node.nodeValue = leading + translated + trailing;
      } else {
        item.node.nodeValue = original;
      }
    });

    document.documentElement.lang = language;
    document.title = language === "en" ? CONFIG.titleEN : CONFIG.titleFR;
    updateMeta(language);
    updateCV(language);

    langButton.textContent = language === "en" ? "FR" : "EN";
    langButton.setAttribute("aria-label", language === "en" ? "Afficher le portfolio en français" : "Afficher le portfolio en anglais");
    langButton.setAttribute("title", language === "en" ? "Français" : "English");

    try { localStorage.setItem("portfolioLanguage", language); } catch (error) {}
  }

  let currentLanguage = "fr";
  try {
    const saved = localStorage.getItem("portfolioLanguage");
    if (saved === "fr" || saved === "en") currentLanguage = saved;
  } catch (error) {}

  applyLanguage(currentLanguage);
  langButton.addEventListener("click", function () {
    currentLanguage = currentLanguage === "fr" ? "en" : "fr";
    applyLanguage(currentLanguage);
  });
})();
