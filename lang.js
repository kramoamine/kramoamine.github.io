/* =========================================================
   AMINE KRAMO PORTFOLIO
   FR / EN LANGUAGE SYSTEM  (version corrigée et améliorée)
   Compatible avec index.html actuel
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     TRADUCTIONS
  ======================================================= */

  const translations = {

    /* ===================== FRENCH ===================== */
    fr: {
      pageTitle: "Amine Kramo | Technicien Systèmes & Réseaux à Casablanca",

      nav: [
        "Accueil",
        "À propos",
        "Compétences",
        "Réalisations",
        "Expérience",
        "Formation",
        "Contact"
      ],

      hero: {
        badge: "Profil Systèmes & Réseaux",
        hello: "Bonjour, je suis",
        role: "Technicien Systèmes & Réseaux",
        degree: "Diplômé d'une Licence Professionnelle en Administration Avancée des Systèmes et Réseaux",
        description: "Je possède une expérience pratique en support IT, administration systèmes, réseaux et infrastructures informatiques. J'interviens sur l'installation, la configuration, la maintenance et le dépannage des équipements et services informatiques.",
        cv: "Télécharger mon CV ↓",
        contact: "Me contacter",
        location: "📍 Casablanca, Maroc",
        licence: "🎓 Licence Professionnelle",
        speciality: "💻 Systèmes & Réseaux",
        permit: "🚗 Permis B"
      },

      about: {
        label: "PRÉSENTATION",
        title: "À propos de moi",
        intro: "Un profil technique orienté systèmes, réseaux et infrastructures informatiques.",
        cardTitle: "Technicien Systèmes & Réseaux",
        paragraphs: [
          "Diplômé d'une Licence Professionnelle en Administration Avancée des Systèmes et Réseaux, ainsi que d'un Diplôme de Technicien Spécialisé en Infrastructure Digitale, option Systèmes et Réseaux, j'ai développé un profil technique orienté infrastructure et support IT.",
          "Mon expérience professionnelle et mes interventions sur le terrain m'ont permis de renforcer mes compétences en administration Windows et Linux, réseaux LAN/WAN, support informatique, maintenance, virtualisation, sauvegarde, sécurité réseau et vidéosurveillance.",
          "J'interviens également sur l'installation, la configuration, le diagnostic et le dépannage des équipements et infrastructures informatiques.",
          "Autonome, rigoureux et orienté résolution de problèmes, je souhaite continuer à développer mon expertise dans les systèmes, les réseaux et les infrastructures IT."
        ]
      },

      skills: {
        label: "EXPERTISE",
        title: "Compétences techniques",
        intro: "Mes principales compétences en administration systèmes, réseaux, virtualisation, sécurité et support IT.",
        cards: [
          { title: "Administration Systèmes", description: "Installation, configuration et administration des systèmes Windows Server, des postes Windows et des environnements Linux." },
          { title: "Services Microsoft", description: "Administration des services Microsoft dans un environnement Windows Server et domaine d'entreprise." },
          { title: "Réseaux informatiques", description: "Installation, configuration et dépannage des infrastructures réseau LAN/WAN." },
          { title: "Sécurité réseau", description: "Configuration de solutions de sécurité réseau, pare-feu et accès distant sécurisé." },
          { title: "Virtualisation", description: "Création, déploiement et gestion d'environnements virtualisés pour les systèmes et services informatiques." },
          { title: "Sauvegarde", description: "Mise en place et gestion de solutions de sauvegarde pour les données et environnements informatiques." },
          { title: "Support informatique", description: "Support utilisateurs N1/N2, diagnostic et résolution des incidents matériels, logiciels et réseau." },
          { title: "Microsoft 365", description: "Utilisation et gestion des principaux outils collaboratifs Microsoft." },
          { title: "Vidéosurveillance IP", description: "Installation, configuration, diagnostic et remise en service des infrastructures de vidéosurveillance." }
        ]
      },

      projects: {
        label: "SUR LE TERRAIN",
        title: "Réalisations & interventions",
        intro: "Quelques projets illustrant mon expérience pratique.",
        view: "Voir le projet →",
        cards: [
          {
            location: "📍 Kénitra",
            title: "Accès distant sécurisé avec OpenVPN & pfSense",
            description: "Mise en place d'un accès distant sécurisé permettant à un collaborateur situé en Espagne d'accéder aux ressources autorisées du réseau de l'entreprise au Maroc via OpenVPN et pfSense.",
            workTitle: "Intervention",
            tasks: [
              "Préparation de l'architecture réseau",
              "Configuration de pfSense",
              "Mise en place du serveur OpenVPN",
              "Configuration de l'accès distant",
              "Contrôle des accès aux ressources internes",
              "Tests de connectivité et validation"
            ]
          },
          {
            location: "📍 ENCG Settat",
            title: "Vidéosurveillance IP & Réseau",
            description: "Intervention sur une infrastructure de vidéosurveillance IP intégrant des liaisons sans fil TP-Link CPE510 pour transporter les flux vidéo vers le réseau principal et le NVR.",
            workTitle: "Intervention",
            tasks: [
              "Diagnostic des équipements",
              "Intervention sur les caméras IP",
              "Vérification du câblage",
              "Intervention sur les liaisons TP-Link CPE510",
              "Vérification de la connectivité réseau",
              "Tests et remise en service"
            ]
          },
          {
            location: "🎓 PFE · Maghreb Steel",
            title: "Veeam Backup & Replication",
            description: "Projet de fin d'études consacré à l'installation, la configuration et la démonstration de Veeam Backup & Replication dans un environnement virtualisé.",
            workTitle: "Travaux réalisés",
            tasks: [
              "Présentation et étude de la solution Veeam",
              "Installation et configuration en environnement virtualisé",
              "Création et planification des Backup Jobs",
              "Configuration des paramètres et tentatives",
              "Suivi des tâches de sauvegarde",
              "Tests de restauration"
            ]
          }
        ]
      },

      experience: {
        label: "PARCOURS",
        title: "Expérience professionnelle",
        intro: "Mon parcours dans le support informatique, les systèmes, les réseaux et les infrastructures IT.",
        current: "POSTE ACTUEL",
        cards: [
          { title: "Technicien Informatique / Systèmes & Réseaux", description: "Support informatique, maintenance, réseaux et interventions techniques sur site." },
          { title: "Technicien Informatique Freelance", description: "Maintenance, diagnostic, installation des systèmes et assistance technique." },
          { title: "Stagiaire PFE" },
          { title: "Stagiaire Informatique", description: "Participation aux activités de support et de maintenance informatique." }
        ]
      },

      education: {
        label: "PARCOURS ACADÉMIQUE",
        title: "Formation",
        intro: "Un parcours orienté vers les systèmes, les réseaux et les infrastructures informatiques.",
        obtained: "✓ DIPLÔME OBTENU",
        cards: [
          { degree: "Licence Professionnelle", field: "Administration Avancée des Systèmes et Réseaux", description: "Formation spécialisée dans l'administration avancée des systèmes, réseaux et infrastructures informatiques." },
          { degree: "Diplôme de Technicien Spécialisé", field: "Infrastructure Digitale : Systèmes et Réseaux", description: "Formation technique orientée systèmes, réseaux, infrastructure digitale et support informatique." },
          { degree: "Baccalauréat Scientifique", field: "Sciences Physiques", description: "Formation scientifique constituant la base de mon parcours vers les technologies de l'information." }
        ]
      },

      contact: {
        label: "CONTACT",
        title: "Restons en contact",
        intro: "Vous souhaitez échanger au sujet d'une opportunité professionnelle ou d'un projet IT ? N'hésitez pas à me contacter.",
        badge: "● DISPONIBLE POUR ÉCHANGER",
        heading: "Échangeons sur vos besoins IT",
        description: "Je suis disponible pour échanger autour d'opportunités professionnelles et de projets liés aux systèmes, réseaux, infrastructures IT, support informatique et vidéosurveillance.",
        cv: "Télécharger mon CV ↓",
        email: "E-mail",
        phone: "Téléphone",
        whatsapp: "WhatsApp",
        whatsappAction: "Envoyer un message",
        location: "Localisation"
      },

      footer: {
        role: "Technicien Systèmes & Réseaux",
        copyright: "© 2026 Amine Kramo — Portfolio professionnel"
      }
    },


    /* ===================== ENGLISH ===================== */
    en: {
      pageTitle: "Amine Kramo | Systems & Network Technician in Casablanca",

      nav: [
        "Home",
        "About",
        "Skills",
        "Projects",
        "Experience",
        "Education",
        "Contact"
      ],

      hero: {
        badge: "Systems & Networks Profile",
        hello: "Hello, I'm",
        role: "Systems & Network Technician",
        degree: "Graduate with a Professional Bachelor's Degree in Advanced Systems and Network Administration",
        description: "I have hands-on experience in IT support, systems administration, networking and IT infrastructure. I work on the installation, configuration, maintenance and troubleshooting of IT equipment and services.",
        cv: "Download my CV ↓",
        contact: "Contact me",
        location: "📍 Casablanca, Morocco",
        licence: "🎓 Professional Bachelor's Degree",
        speciality: "💻 Systems & Networks",
        permit: "🚗 Driving Licence B"
      },

      about: {
        label: "PROFILE",
        title: "About me",
        intro: "A technical profile focused on systems, networks and IT infrastructure.",
        cardTitle: "Systems & Network Technician",
        paragraphs: [
          "Graduate with a Professional Bachelor's Degree in Advanced Systems and Network Administration and a Specialized Technician Diploma in Digital Infrastructure, Systems and Networks option, I have developed a technical profile focused on infrastructure and IT support.",
          "My professional experience and field interventions have enabled me to strengthen my skills in Windows and Linux administration, LAN/WAN networks, IT support, maintenance, virtualization, backup, network security and video surveillance.",
          "I also work on the installation, configuration, diagnosis and troubleshooting of IT equipment and infrastructure.",
          "Independent, rigorous and solution-oriented, I aim to continue developing my expertise in systems, networks and IT infrastructure."
        ]
      },

      skills: {
        label: "EXPERTISE",
        title: "Technical Skills",
        intro: "My main skills in systems administration, networking, virtualization, security and IT support.",
        cards: [
          { title: "Systems Administration", description: "Installation, configuration and administration of Windows Server systems, Windows workstations and Linux environments." },
          { title: "Microsoft Services", description: "Administration of Microsoft services in Windows Server and enterprise domain environments." },
          { title: "Computer Networks", description: "Installation, configuration and troubleshooting of LAN/WAN network infrastructures." },
          { title: "Network Security", description: "Configuration of network security solutions, firewalls and secure remote access." },
          { title: "Virtualization", description: "Creation, deployment and management of virtualized environments for IT systems and services." },
          { title: "Backup", description: "Implementation and management of backup solutions for data and IT environments." },
          { title: "IT Support", description: "Level 1/2 user support, diagnosis and resolution of hardware, software and network incidents." },
          { title: "Microsoft 365", description: "Use and management of the main Microsoft collaboration tools." },
          { title: "IP Video Surveillance", description: "Installation, configuration, diagnosis and restoration of video surveillance infrastructure." }
        ]
      },

      projects: {
        label: "FIELD WORK",
        title: "Projects & Interventions",
        intro: "Selected projects demonstrating my hands-on experience.",
        view: "View project →",
        cards: [
          {
            location: "📍 Kenitra",
            title: "Secure Remote Access with OpenVPN & pfSense",
            description: "Implementation of secure remote access allowing a collaborator located in Spain to access authorized resources on the company's network in Morocco using OpenVPN and pfSense.",
            workTitle: "Implementation",
            tasks: [
              "Network architecture preparation",
              "pfSense configuration",
              "OpenVPN server deployment",
              "Remote access configuration",
              "Internal resource access control",
              "Connectivity testing and validation"
            ]
          },
          {
            location: "📍 ENCG Settat",
            title: "IP Video Surveillance & Networking",
            description: "Intervention on an IP video surveillance infrastructure integrating TP-Link CPE510 wireless links to transport video streams to the main network and NVR.",
            workTitle: "Intervention",
            tasks: [
              "Equipment diagnosis",
              "IP camera intervention",
              "Cabling verification",
              "TP-Link CPE510 wireless link intervention",
              "Network connectivity verification",
              "Testing and service restoration"
            ]
          },
          {
            location: "🎓 Final Project · Maghreb Steel",
            title: "Veeam Backup & Replication",
            description: "Final-year project focused on the installation, configuration and demonstration of Veeam Backup & Replication in a virtualized environment.",
            workTitle: "Work completed",
            tasks: [
              "Presentation and study of Veeam solution",
              "Installation and configuration in a virtualized environment",
              "Creation and scheduling of Backup Jobs",
              "Configuration of parameters and attempts",
              "Backup task monitoring",
              "Restore testing"
            ]
          }
        ]
      },

      experience: {
        label: "CAREER",
        title: "Professional Experience",
        intro: "My experience in IT support, systems, networks and IT infrastructure.",
        current: "CURRENT POSITION",
        cards: [
          { title: "IT / Systems & Network Technician", description: "IT support, maintenance, networking and technical on-site interventions." },
          { title: "Freelance IT Technician", description: "Maintenance, diagnosis, system installation and technical assistance." },
          { title: "Final-Year Project Intern" },
          { title: "IT Intern", description: "Participation in IT support and maintenance activities." }
        ]
      },

      education: {
        label: "ACADEMIC BACKGROUND",
        title: "Education",
        intro: "An academic background focused on systems, networks and IT infrastructure.",
        obtained: "✓ DEGREE OBTAINED",
        cards: [
          { degree: "Professional Bachelor's Degree", field: "Advanced Systems and Network Administration", description: "Specialized program in advanced systems, networks and IT infrastructure administration." },
          { degree: "Specialized Technician Diploma", field: "Digital Infrastructure: Systems and Networks", description: "Technical training focused on systems, networks, digital infrastructure and IT support." },
          { degree: "Scientific Baccalaureate", field: "Physical Sciences", description: "Scientific education forming the foundation of my career in information technology." }
        ]
      },

      contact: {
        label: "CONTACT",
        title: "Let's stay in touch",
        intro: "Would you like to discuss a professional opportunity or an IT project? Feel free to contact me.",
        badge: "● AVAILABLE TO CONNECT",
        heading: "Let's discuss your IT needs",
        description: "I am available to discuss professional opportunities and projects related to systems, networks, IT infrastructure, IT support and video surveillance.",
        cv: "Download my CV ↓",
        email: "Email",
        phone: "Phone",
        whatsapp: "WhatsApp",
        whatsappAction: "Send a message",
        location: "Location"
      },

      footer: {
        role: "Systems & Network Technician",
        copyright: "© 2026 Amine Kramo — Professional Portfolio"
      }
    }
  };


  /* =======================================================
     CONFIGURATION GÉNÉRALE
  ======================================================= */

  const DEFAULT_LANG = "fr";
  const STORAGE_KEY = "portfolioLanguage";

  const CV_FILES = {
    fr: "CV-KRAMO-AMINE.pdf",
    en: "CV-KRAMO-AMINE-ENG.pdf"
  };

  let currentLang = DEFAULT_LANG;


  /* =======================================================
     OUTILS
  ======================================================= */

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function setText(selector, text, root = document) {
    const element = $(selector, root);
    if (element && text !== undefined) {
      element.textContent = text;
    }
  }

  function setArrayText(selector, values) {
    $$(selector).forEach((element, index) => {
      if (values[index] !== undefined) {
        element.textContent = values[index];
      }
    });
  }

  // localStorage sécurisé (navigation privée, stockage bloqué, etc.)
  function readStorage(key) {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      /* ignoré */
    }
  }


  /* =======================================================
     BOUTON DE LANGUE
  ======================================================= */

  const mainNav = $("#mainNav");
  let langButton = $("#langButton");

  if (mainNav && !langButton) {
    langButton = document.createElement("button");
    langButton.id = "langButton";
    langButton.type = "button";
    mainNav.appendChild(langButton);
  }


  /* =======================================================
     SECTIONS
  ======================================================= */

  function applyHero(t) {
    setText(".badge", t.hero.badge);

    const heroHeading = $(".hero h1");
    if (heroHeading) {
      heroHeading.innerHTML = `${t.hero.hello}<br><span>Amine Kramo</span>`;
    }

    setText(".job-title", t.hero.role);
    setText(".degree", t.hero.degree);
    setText(".description", t.hero.description);

    const heroButtons = $$(".hero .buttons .btn");
    if (heroButtons[0]) heroButtons[0].textContent = t.hero.cv;
    if (heroButtons[1]) heroButtons[1].textContent = t.hero.contact;

    const heroInformation = $$(".information span");
    if (heroInformation[0]) heroInformation[0].textContent = t.hero.location;
    if (heroInformation[1]) heroInformation[1].textContent = t.hero.permit;

    setText(".profile-card h2", "Amine Kramo");
    setText(".profile-role", t.hero.role);

    const profileValues = [
      t.hero.location,
      t.hero.licence,
      t.hero.speciality,
      t.hero.permit
    ];

    $$(".profile-info > div").forEach((element, index) => {
      if (profileValues[index] === undefined) return;

      const icon = $(".icon", element);
      const iconText = icon ? icon.textContent : "";

      element.innerHTML = "";

      if (icon) {
        const newIcon = document.createElement("span");
        newIcon.className = "icon";
        newIcon.textContent = iconText;
        element.appendChild(newIcon);
      }

      // On retire l'emoji du début (il est déjà dans .icon)
      const value = profileValues[index].replace(/^[^\s]+\s/, "");
      element.appendChild(document.createTextNode(value));
    });
  }


  function applyCV(lang) {
    const cvFile = CV_FILES[lang] || CV_FILES[DEFAULT_LANG];

    const heroButtons = $$(".hero .buttons .btn");
    if (heroButtons[0]) heroButtons[0].setAttribute("href", cvFile);

    const contactCV = $(".contact-cv");
    if (contactCV) contactCV.setAttribute("href", cvFile);
  }


  function applyAbout(t) {
    setText("#apropos .section-label", t.about.label);
    setText("#apropos .section-header h2", t.about.title);
    setText("#apropos .section-header p", t.about.intro);
    setText("#apropos .about-card h3", t.about.cardTitle);

    $$("#apropos .about-card p").forEach((paragraph, index) => {
      if (t.about.paragraphs[index] !== undefined) {
        paragraph.textContent = t.about.paragraphs[index];
      }
    });
  }


  function applySkills(t) {
    setText("#competences .section-label", t.skills.label);
    setText("#competences .section-header h2", t.skills.title);
    setText("#competences .section-header p", t.skills.intro);

    $$("#competences .skill-card").forEach((card, index) => {
      const item = t.skills.cards[index];
      if (!item) return;

      setText("h3", item.title, card);
      setText("p", item.description, card);
    });
  }


  function applyProjects(t) {
    setText("#realisations .section-label", t.projects.label);
    setText("#realisations .section-header h2", t.projects.title);
    setText("#realisations .section-header p", t.projects.intro);

    $$("#realisations .project-card").forEach((card, index) => {
      const project = t.projects.cards[index];
      if (!project) return;

      setText(".project-location", project.location, card);
      setText(".project-header h3", project.title, card);
      setText(".project-description", project.description, card);
      setText(".project-work h4", project.workTitle, card);
      setText(".project-link", t.projects.view, card);

      $$(".project-work li", card).forEach((task, taskIndex) => {
        if (project.tasks[taskIndex] !== undefined) {
          task.textContent = project.tasks[taskIndex];
        }
      });
    });
  }


  function applyExperience(t) {
    setText("#experience .section-label", t.experience.label);
    setText("#experience .section-header h2", t.experience.title);
    setText("#experience .section-header p", t.experience.intro);
    setText("#experience .experience-status", t.experience.current);

    $$("#experience .experience-card").forEach((card, index) => {
      const item = t.experience.cards[index];
      if (!item) return;

      if (item.title) setText("h3", item.title, card);
      if (item.description) setText(".experience-description", item.description, card);
    });
  }


  function applyEducation(t) {
    setText("#formation .section-label", t.education.label);
    setText("#formation .section-header h2", t.education.title);
    setText("#formation .section-header p", t.education.intro);

    $$("#formation .formation-card").forEach((card, index) => {
      const item = t.education.cards[index];
      if (!item) return;

      setText(".diploma-status", t.education.obtained, card);
      setText("h3", item.degree, card);
      setText("h4", item.field, card);
      setText(".formation-description", item.description, card);
    });
  }


  function applyContact(t) {
    setText("#contact .section-label", t.contact.label);
    setText("#contact .section-header h2", t.contact.title);
    setText("#contact .section-header p", t.contact.intro);
    setText(".contact-badge", t.contact.badge);
    setText(".contact-intro h3", t.contact.heading);
    setText(".contact-intro > p", t.contact.description);
    setText(".contact-cv", t.contact.cv);

    const details = $$(".contact-details");

    if (details[0]) setText("small", t.contact.email, details[0]);
    if (details[1]) setText("small", t.contact.phone, details[1]);

    if (details[2]) {
      setText("small", t.contact.whatsapp, details[2]);
      setText("strong", t.contact.whatsappAction, details[2]);
    }

    // Attention : l'index 4 dépend de votre HTML (l'index 3 est ignoré)
    if (details[4]) setText("small", t.contact.location, details[4]);
  }


  function applyFooter(t) {
    setText(".footer-content span", t.footer.role);
    setText(".footer-content > p", t.footer.copyright);
  }


  function applyLangButton(lang) {
    if (!langButton) return;

    langButton.textContent = lang === "fr" ? "EN" : "FR";
    langButton.setAttribute(
      "aria-label",
      lang === "fr" ? "Switch to English" : "Passer en français"
    );
  }


  /* =======================================================
     APPLIQUER LA LANGUE
  ======================================================= */

  function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    currentLang = lang;

    document.documentElement.lang = lang;
    document.title = t.pageTitle;

    setArrayText("#mainNav > a", t.nav);

    applyHero(t);
    applyCV(lang);
    applyAbout(t);
    applySkills(t);
    applyProjects(t);
    applyExperience(t);
    applyEducation(t);
    applyContact(t);
    applyFooter(t);
    applyLangButton(lang);

    writeStorage(STORAGE_KEY, lang);
  }


  /* =======================================================
     LANGUE INITIALE
  ======================================================= */

  const savedLanguage = readStorage(STORAGE_KEY);

  applyLanguage(
    savedLanguage && translations[savedLanguage]
      ? savedLanguage
      : DEFAULT_LANG
  );


  /* =======================================================
     CHANGEMENT DE LANGUE
  ======================================================= */

  if (langButton) {
    langButton.addEventListener("click", () => {
      applyLanguage(currentLang === "fr" ? "en" : "fr");
    });
  }

});
