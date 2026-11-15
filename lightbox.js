/* =========================================================
   LIGHTBOX — clic sur une image = agrandissement
   ---------------------------------------------------------
   - S'applique aux images des schémas (.architecture-image img,
     .presentation-image img)
     et à toute image portant l'attribut  data-zoom
   - 1er clic sur l'image : agrandie (ajustée à l'écran)
   - 2e clic sur l'image  : taille réelle (défilement possible)
   - Fermer : clic en dehors, bouton ✕, ou touche Échap
========================================================= */

(function () {
  "use strict";

  var SELECTOR = ".architecture-image img, .presentation-image img, img[data-zoom]";

  var overlay, image, caption, closeButton, lastFocus;

  function isEnglish() {
    return document.documentElement.lang === "en";
  }

  function injectStyle() {
    var style = document.createElement("style");
    style.textContent =
      SELECTOR.split(",").map(function (s) { return s.trim(); }).join(",") +
      "{cursor:zoom-in}" +

      "#lightbox{position:fixed;inset:0;z-index:9999;display:none;" +
      "background:rgba(2,8,16,.94);overflow:auto;" +
      "padding:56px 16px 24px;-webkit-overflow-scrolling:touch}" +
      "#lightbox.open{display:flex;flex-direction:column;animation:lbFade .2s ease}" +
      "@keyframes lbFade{from{opacity:0}to{opacity:1}}" +

      "#lightbox img{display:block;margin:auto;max-width:100%;max-height:calc(100vh - 130px);" +
      "width:auto;height:auto;border-radius:12px;background:#fff;cursor:zoom-in;" +
      "box-shadow:0 20px 60px rgba(0,0,0,.6)}" +
      "#lightbox img.zoomed{max-width:none;max-height:none;cursor:zoom-out}" +

      "#lightbox .lb-caption{margin:14px auto 0;max-width:900px;text-align:center;" +
      "color:#c4d5e5;font-size:.9rem;line-height:1.5}" +

      "#lightbox .lb-close{position:fixed;top:12px;right:14px;width:42px;height:42px;" +
      "border-radius:50%;border:1px solid rgba(255,255,255,.25);" +
      "background:rgba(255,255,255,.1);color:#fff;font-size:1.3rem;line-height:1;" +
      "cursor:pointer;z-index:2;transition:.2s}" +
      "#lightbox .lb-close:hover{background:#22d3ee;color:#04101d}" +

      "body.lb-lock{overflow:hidden}";
    document.head.appendChild(style);
  }

  function build() {
    overlay = document.createElement("div");
    overlay.id = "lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");

    closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "lb-close";
    closeButton.textContent = "✕";

    image = document.createElement("img");

    caption = document.createElement("p");
    caption.className = "lb-caption";

    overlay.appendChild(closeButton);
    overlay.appendChild(image);
    overlay.appendChild(caption);
    document.body.appendChild(overlay);

    // clic sur l'image : bascule ajusté / taille réelle
    image.addEventListener("click", function (event) {
      event.stopPropagation();
      image.classList.toggle("zoomed");
    });

    // clic en dehors de l'image : fermer
    overlay.addEventListener("click", close);
    closeButton.addEventListener("click", function (event) {
      event.stopPropagation();
      close();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && overlay.classList.contains("open")) close();
    });
  }

  function open(source) {
    lastFocus = document.activeElement;

    image.classList.remove("zoomed");
    image.src = source.currentSrc || source.src;
    image.alt = source.alt || "";
    caption.textContent = source.alt || "";

    var label = isEnglish() ? "Close" : "Fermer";
    closeButton.setAttribute("aria-label", label);
    closeButton.setAttribute("title", label);
    overlay.setAttribute("aria-label", source.alt || (isEnglish() ? "Enlarged image" : "Image agrandie"));

    overlay.classList.add("open");
    document.body.classList.add("lb-lock");
    overlay.scrollTop = 0;
    overlay.scrollLeft = 0;
    closeButton.focus();
  }

  function close() {
    overlay.classList.remove("open");
    document.body.classList.remove("lb-lock");
    image.removeAttribute("src");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function init() {
    var targets = document.querySelectorAll(SELECTOR);
    if (!targets.length) return;

    injectStyle();
    build();

    targets.forEach(function (img) {
      img.setAttribute("tabindex", "0");
      img.setAttribute("role", "button");

      img.addEventListener("click", function () { open(img); });
      img.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          open(img);
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
