/* Amine Kramo – bascule FR / EN + mises à jour de contenu
   Utilisation : ajouter <script src="lang.js"></script> juste avant </body> */
(function () {
  "use strict";

  /* ---------- 1. Styles ---------- */
  var st = document.createElement("style");
  st.textContent =
    ".lang-btn{margin-left:6px;padding:8px 14px;border-radius:9px;border:1px solid #22d3ee66;background:#22d3ee14;color:#22d3ee;font-weight:800;font-size:.85rem;cursor:pointer;letter-spacing:.06em;transition:.2s}" +
    ".lang-btn:hover{background:#22d3ee;color:#04101d}" +
    ".dip{display:inline-flex;align-items:center;gap:6px;margin-top:14px;margin-right:10px;padding:5px 12px;border-radius:999px;font-size:.8rem;font-weight:800;color:#22c55e;background:#22c55e14;border:1px solid #22c55e55}" +
    ".strip{display:flex;gap:10px;margin-bottom:24px;max-width:640px}" +
    ".strip img{flex:1;min-width:0;height:84px;object-fit:cover;border-radius:12px;border:1px solid #173250;box-shadow:0 10px 28px #22d3ee1a;transition:.25s}" +
    ".strip img:hover{transform:translateY(-4px);border-color:#22d3ee88}" +
    "@media(max-width:700px){.lang-btn{margin:6px 0 0;width:100%}.strip img{height:60px}}";
  document.head.appendChild(st);

  /* Bandeau de petites photos en haut de l’accueil (images déjà utilisées dans le slider) */
  var badge = document.querySelector(".hero .badge");
  if (badge) {
    var strip = document.createElement("div");
    strip.className = "strip";
    [["outils", "Intervention technique"], ["reseau", "Baie de brassage"],
     ["pfsense", "Configuration pfSense"], ["cctv", "Caméras de surveillance"]].forEach(function (p) {
      var im = document.createElement("img");
      im.src = "images/" + p[0] + ".jpg"; im.alt = p[1]; im.loading = "lazy";
      im.onerror = function () { im.remove(); };
      strip.appendChild(im);
    });
    badge.parentNode.insertBefore(strip, badge);

    /* Bannière : images/banner.jpg (remplace le bandeau si elle existe) */
    var ban = document.createElement("img");
    ban.src = "images/banner.jpg"; ban.alt = "Amine Kramo – Systèmes & Réseaux";
    ban.style.cssText = "display:none;width:100%;max-width:640px;height:190px;object-fit:cover;border-radius:16px;border:1px solid #173250;box-shadow:0 18px 50px #22d3ee22;margin-bottom:24px";
    ban.onload = function () { ban.style.display = "block"; strip.style.display = "none"; };
    ban.onerror = function () { ban.remove(); };
    badge.parentNode.insertBefore(ban, strip);
  }

  /* ---------- 2. Mises à jour du contenu français ---------- */
  var FR_FIX = {
    "Licence Pro en cours": "Licence Pro obtenue",
    "Intervention sur le système de vidéosurveillance et le réseau informatique de l’établissement.":
      "Réinstallation et remise en service du système de vidéosurveillance et du réseau informatique de l’école d’ingénieurs ENCG Settat (caméras, câblage, réseau).",
    "Projet de mise en place d’une infrastructure réseau pour Flexiwrap Factory à Kénitra, avec pfSense comme solution de pare-feu.":
      "Mise en place d’une infrastructure réseau sécurisée pour l’entreprise Flexiwrap Factory à Kénitra : conception du réseau LAN/WAN et configuration du pare-feu pfSense pour protéger l’infrastructure.",
    "Projet de fin d’études consacré à Veeam. Présentation du projet et de la solution de sauvegarde étudiée dans le cadre de la formation.":
      "Projet de fin d’études (PFE) dédié à Veeam : étude et mise en œuvre d’une solution de sauvegarde et de restauration des données et des machines virtuelles."
  };

  function norm(s) { return s.replace(/\s+/g, " ").trim(); }

  function collect() {
    var out = [];
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (/^(SCRIPT|STYLE|NOSCRIPT)$/.test(p.nodeName)) return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest("#langBtn")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    while (w.nextNode()) out.push(w.currentNode);
    return out;
  }

  /* Suppression de la section « Langues » (niveaux) : détails disponibles dans le CV */
  var langs = document.querySelector(".langs");
  if (langs) {
    var lh = langs.previousElementSibling;
    if (lh && lh.classList.contains("head")) lh.remove();
    langs.remove();
  }

  var nodes = collect();
  nodes.forEach(function (n) {
    var k = norm(n.nodeValue);
    if (FR_FIX[k]) n.nodeValue = FR_FIX[k];
    n.__fr = n.nodeValue;
  });

  /* ---------- 3. Dictionnaire FR → EN ---------- */
  var EN = {
    /* navigation */
    "Accueil": "Home", "À propos": "About", "Compétences": "Skills",
    "Réalisations": "Projects", "Expérience": "Experience", "Formation": "Education",
    /* hero */
    "Disponible pour de nouvelles opportunités": "Available for new opportunities",
    "Je construis et sécurise": "I build and secure",
    "vos réseaux": "your networks",
    "& infrastructures IT.": "& IT infrastructure.",
    "Amine Kramo — Technicien Informatique · Systèmes & Réseaux": "Amine Kramo — IT Technician · Systems & Networks",
    "Basé à Casablanca, j’interviens sur toute la chaîne : support IT, administration Windows/Linux, réseaux et pare-feu pfSense, virtualisation, sauvegarde et vidéosurveillance. Je me déplace partout au Maroc pour installer, configurer et dépanner sur site.":
      "Based in Casablanca, I work across the whole chain: IT support, Windows/Linux administration, networks and pfSense firewalls, virtualization, backup and video surveillance. I travel anywhere in Morocco to install, configure and troubleshoot on site.",
    "Télécharger mon CV ↓": "Download my CV ↓",
    "Me contacter": "Contact me",
    "Technicien Informatique": "IT Technician",
    "Casablanca, Maroc": "Casablanca, Morocco",
    "Permis B": "Class B driving licence",
    /* stats */
    "Support N1 & N2": "L1 & L2 Support", "Incidents & utilisateurs": "Incidents & users",
    "Serveurs & postes": "Servers & workstations",
    "Réseaux & pfSense": "Networks & pfSense",
    "LAN · WAN · Wi-Fi · Pare-feu": "LAN · WAN · Wi-Fi · Firewall",
    "Vidéosurveillance": "Video surveillance",
    "Installation & maintenance": "Installation & maintenance",
    /* slider */
    "Mon métier": "What I do",
    "Sur le terrain, au quotidien": "In the field, every day",
    "Installation & dépannage sur site": "On-site installation & troubleshooting",
    "Matériel, postes, équipements : je me déplace, je diagnostique et je répare pour remettre votre activité en marche.":
      "Hardware, workstations, equipment: I travel, diagnose and repair to get your business running again.",
    "Réseaux d’entreprise": "Enterprise networks",
    "Câblage, brassage, switchs, Wi-Fi : des réseaux LAN/WAN propres, stables et bien documentés.":
      "Cabling, patching, switches, Wi-Fi: clean, stable and well-documented LAN/WAN networks.",
    "Sécurité & pare-feu pfSense": "Security & pfSense firewall",
    "Mise en place d’une infrastructure réseau sécurisée avec pfSense pour une entreprise à Kénitra.":
      "Deployment of a secure network infrastructure with pfSense for a company in Kénitra.",
    "Installation et remise en service de caméras, notamment à l’ENCG Settat.":
      "Installation and recommissioning of cameras, notably at ENCG Settat.",
    /* à propos */
    "Présentation": "Overview", "À propos de moi": "About me",
    "Un profil technique polyvalent, à l’aise sur le terrain comme en administration.":
      "A versatile technical profile, equally comfortable in the field and in administration.",
    "Technicien informatique spécialisé en systèmes et réseaux, j’ai développé mes compétences à travers le support aux utilisateurs, la maintenance des postes et équipements, l’administration Windows/Linux et le déploiement de réseaux d’entreprise.":
      "An IT technician specialized in systems and networks, I have built my skills through user support, workstation and equipment maintenance, Windows/Linux administration and enterprise network deployment.",
    "J’ai notamment réinstallé des caméras et des réseaux dans une école d’ingénieurs (ENCG Settat) et mis en place une infrastructure réseau avec pare-feu pfSense pour une entreprise à Kénitra. Je me déplace régulièrement hors de Casablanca pour installer ou réparer du matériel.":
      "I reinstalled cameras and networks at an engineering school (ENCG Settat) and set up a network infrastructure with a pfSense firewall for a company in Kénitra. I regularly travel outside Casablanca to install or repair equipment.",
    "Autonome, rigoureux et orienté résolution d’incidents, je cherche à rejoindre une équipe IT où progresser et apporter de la valeur.":
      "Autonomous, rigorous and incident-resolution oriented, I am looking to join an IT team where I can grow and add value.",
    "Localisation": "Location", "Mobilité": "Mobility",
    "Permis B · Toutes régions": "Licence B · All regions",
    "Spécialité": "Specialty", "Systèmes & Réseaux": "Systems & Networks",
    "Licence Pro obtenue": "Professional Bachelor’s earned",
    /* compétences */
    "Expertise": "Expertise", "Compétences techniques": "Technical skills",
    "Les outils et technologies que j’utilise au quotidien.": "The tools and technologies I use every day.",
    "Support informatique": "IT support",
    "Support N1/N2, gestion des utilisateurs, diagnostic et résolution des incidents matériels, logiciels et réseau.":
      "L1/L2 support, user management, diagnosis and resolution of hardware, software and network incidents.",
    "Inventaire": "Inventory",
    "Installation, configuration et maintenance des postes et serveurs.": "Installation, configuration and maintenance of workstations and servers.",
    "Réseaux informatiques": "Computer networks",
    "Conception, déploiement et dépannage de réseaux d’entreprise, câblage et brassage.":
      "Design, deployment and troubleshooting of enterprise networks, cabling and patching.",
    "Sécurité réseau": "Network security",
    "Mise en place et configuration de pare-feu pour sécuriser les infrastructures.": "Setup and configuration of firewalls to secure infrastructures.",
    "Pare-feu": "Firewall",
    "Virtualisation & sauvegarde": "Virtualization & backup",
    "Création de machines virtuelles et protection des données.": "Virtual machine creation and data protection.",
    "Installation, configuration et remise en service de systèmes CCTV.": "Installation, configuration and recommissioning of CCTV systems.",
    "Caméras IP": "IP cameras",
    "Gestion des comptes utilisateurs et des services collaboratifs.": "Management of user accounts and collaboration services.",
    "Simulation et conception réseau, concepts CCNA.": "Network simulation and design, CCNA concepts.",
    /* réalisations */
    "Sur le terrain": "In the field",
    "Réalisations & interventions": "Projects & interventions",
    "Quelques missions représentatives, réalisées sur site.": "A selection of representative on-site missions.",
    "ENCG Settat — Vidéosurveillance & réseau": "ENCG Settat — Video surveillance & network",
    "Réinstallation et remise en service du système de vidéosurveillance et du réseau informatique de l’école d’ingénieurs ENCG Settat (caméras, câblage, réseau).":
      "Reinstallation and recommissioning of the video surveillance system and computer network of the ENCG Settat engineering school (cameras, cabling, network).",
    "Réseau": "Network", "Câblage": "Cabling",
    "Infrastructure réseau avec pfSense": "Network infrastructure with pfSense",
    "Mise en place d’une infrastructure réseau sécurisée pour l’entreprise Flexiwrap Factory à Kénitra : conception du réseau LAN/WAN et configuration du pare-feu pfSense pour protéger l’infrastructure.":
      "Deployment of a secure network infrastructure for Flexiwrap Factory in Kénitra: LAN/WAN network design and pfSense firewall configuration to protect the infrastructure.",
    "🎓 Projet de fin d’études · PFE": "🎓 Final year project · PFE",
    "Solution de sauvegarde avec Veeam": "Backup solution with Veeam",
    "Projet de fin d’études (PFE) dédié à Veeam : étude et mise en œuvre d’une solution de sauvegarde et de restauration des données et des machines virtuelles.":
      "Final year project (PFE) dedicated to Veeam: study and implementation of a data and virtual machine backup and restore solution.",
    "Restauration": "Restore",
    "Zones d’intervention :": "Areas of intervention:",
    /* expérience */
    "Parcours": "Background", "Expérience professionnelle": "Work experience",
    "Février 2025 – Octobre 2026": "February 2025 – October 2026",
    "Support IT, maintenance et dépannage": "IT support, maintenance and troubleshooting",
    "Interventions réseau et matériel sur site": "On-site network and hardware interventions",
    "Octobre 2024 – Janvier 2025": "October 2024 – January 2025",
    "Technicien Informatique Freelance": "Freelance IT Technician",
    "Installation et dépannage de matériel et réseaux": "Installation and troubleshooting of hardware and networks",
    "Mars 2024": "March 2024", "Stagiaire PFE": "Final-year project intern",
    "Avril 2023 – Mai 2023": "April 2023 – May 2023", "Stagiaire Informatique": "IT intern",
    /* formation */
    "Études": "Studies",
    "Licence Professionnelle": "Professional Bachelor’s Degree (Licence Professionnelle)",
    "Administration Avancée des Systèmes et Réseaux": "Advanced Systems & Network Administration",
    "Faculté des Sciences Aïn Chock – Casablanca": "Faculty of Sciences Aïn Chock – Casablanca",
    "✔ Diplôme obtenu": "✔ Degree obtained",
    "Diplôme de Technicien Spécialisé": "Specialized Technician Diploma",
    "Infrastructure Digitale : Systèmes et Réseaux": "Digital Infrastructure: Systems & Networks",
    "Baccalauréat Scientifique": "Scientific Baccalaureate", "Sciences Physiques": "Physical Sciences",
    "Lycée Oued Eddahab – Casablanca": "Oued Eddahab High School – Casablanca",
    "Communication": "Communication", "Langues": "Languages",
    "Arabe": "Arabic", "— Langue maternelle": "— Native language",
    "Français": "French", "— Intermédiaire": "— Intermediate", "Anglais": "English",
    /* contact */
    "Restons en contact": "Let’s keep in touch",
    "Discutons de votre projet IT": "Let’s discuss your IT project",
    "Un réseau à installer, une caméra à configurer, une équipe support à renforcer ? Écrivez-moi, je réponds rapidement.":
      "A network to install, a camera to configure, a support team to reinforce? Write to me, I reply quickly.",
    "Téléphone / WhatsApp": "Phone / WhatsApp",
    "© 2026 Amine Kramo — Technicien Systèmes & Réseaux · Casablanca, Maroc":
      "© 2026 Amine Kramo — Systems & Networks Technician · Casablanca, Morocco"
  };

  /* ---------- 4. Bascule ---------- */
  var DESC = {
    fr: "Amine Kramo, technicien informatique à Casablanca : réseaux, pfSense, vidéosurveillance, Windows/Linux, virtualisation et support IT. Interventions partout au Maroc.",
    en: "Amine Kramo, IT technician in Casablanca: networks, pfSense, video surveillance, Windows/Linux, virtualization and IT support. On-site work across Morocco."
  };
  var TITLE = {
    fr: "Amine Kramo | Technicien Systèmes & Réseaux – Casablanca",
    en: "Amine Kramo | Systems & Networks Technician – Casablanca"
  };

  var li = document.createElement("li");
  var btn = document.createElement("button");
  btn.id = "langBtn"; btn.type = "button"; btn.className = "lang-btn";
  li.appendChild(btn);
  var menu = document.getElementById("menu");
  if (menu) menu.appendChild(li);

  function apply(lang) {
    nodes.forEach(function (n) {
      var o = n.__fr, en = EN[norm(o)];
      n.nodeValue = (lang === "en" && en) ? o.replace(o.trim(), function () { return en; }) : o;
    });
    document.documentElement.lang = lang;
    document.title = TITLE[lang];
    var m = document.querySelector("meta[name=description]");
    if (m) m.setAttribute("content", DESC[lang]);
    btn.textContent = lang === "fr" ? "EN" : "FR";
    btn.setAttribute("aria-label", lang === "fr" ? "Switch to English" : "Passer en français");
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  var cur = "fr";
  try { cur = localStorage.getItem("lang") || (/^en/i.test(navigator.language) ? "en" : "fr"); } catch (e) {}
  apply(cur);
  btn.addEventListener("click", function () { cur = cur === "fr" ? "en" : "fr"; apply(cur); });
})();
