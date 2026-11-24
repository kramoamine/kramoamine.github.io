(function () {
  "use strict";

  var SELECTOR = ".architecture-image img, .presentation-image img, img[data-zoom]";
  var overlay, image, caption, closeButton, dialog;
  var lastFocus = null;
  var previouslyLocked = false;

  function isEnglish() {
    return document.documentElement.lang.toLowerCase().startsWith("en");
  }

  function reducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function injectStyle() {
    if (document.getElementById("portfolio-lightbox-style")) return;
    var style = document.createElement("style");
    style.id = "portfolio-lightbox-style";
    style.textContent = `
      ${SELECTOR}{cursor:zoom-in}
      ${SELECTOR}:focus-visible{outline:3px solid #22d3ee;outline-offset:4px;border-radius:8px}
      #lightbox{position:fixed;inset:0;z-index:9999;display:none;padding:max(56px,env(safe-area-inset-top)) max(16px,env(safe-area-inset-right)) max(24px,env(safe-area-inset-bottom)) max(16px,env(safe-area-inset-left));overflow:auto;background:rgba(2,8,16,.96);-webkit-overflow-scrolling:touch;overscroll-behavior:contain}
      #lightbox.open{display:flex;flex-direction:column;align-items:center}
      #lightbox.animate{animation:lbFade .18s ease}
      @keyframes lbFade{from{opacity:0}to{opacity:1}}
      #lightbox .lb-dialog{width:100%;display:flex;flex:1 0 auto;flex-direction:column;align-items:center;justify-content:center}
      #lightbox img{display:block;width:auto;height:auto;max-width:min(100%,1600px);max-height:calc(100vh - 145px);margin:auto;object-fit:contain;border-radius:12px;background:#fff;cursor:zoom-in;box-shadow:0 20px 60px rgba(0,0,0,.65);user-select:none;-webkit-user-drag:none}
      #lightbox img.zoomed{max-width:none;max-height:none;cursor:zoom-out}
      #lightbox .lb-caption{width:min(900px,100%);margin:14px auto 0;color:#d2e3f0;text-align:center;font-size:.9rem;line-height:1.55}
      #lightbox .lb-close{position:fixed;top:max(12px,env(safe-area-inset-top));right:max(14px,env(safe-area-inset-right));z-index:10001;width:44px;height:44px;display:grid;place-items:center;padding:0;border:1px solid rgba(255,255,255,.28);border-radius:50%;color:#fff;background:rgba(7,20,33,.92);cursor:pointer;font:inherit;font-size:1.25rem;line-height:1;transition:color .2s ease,background .2s ease,border-color .2s ease}
      #lightbox .lb-close:hover{color:#04101d;background:#22d3ee;border-color:#22d3ee}
      #lightbox .lb-close:focus-visible{outline:3px solid #22d3ee;outline-offset:4px}
      body.lb-lock{overflow:hidden}
      @media(max-width:600px){#lightbox img{max-height:calc(100vh - 125px);border-radius:8px}#lightbox .lb-caption{font-size:.82rem}}
      @media(prefers-reduced-motion:reduce){#lightbox.animate{animation:none}#lightbox *,#lightbox *::before,#lightbox *::after{transition-duration:.01ms!important;animation-duration:.01ms!important}}
    `;
    document.head.appendChild(style);
  }

  function build() {
    if (document.getElementById("lightbox")) return false;
    overlay=document.createElement("div"); overlay.id="lightbox";
    overlay.setAttribute("role","dialog"); overlay.setAttribute("aria-modal","true"); overlay.setAttribute("aria-hidden","true"); overlay.setAttribute("aria-labelledby","lightbox-caption");
    dialog=document.createElement("div"); dialog.className="lb-dialog";
    closeButton=document.createElement("button"); closeButton.type="button"; closeButton.className="lb-close"; closeButton.textContent="×";
    image=document.createElement("img"); image.alt=""; image.decoding="async"; image.setAttribute("draggable","false");
    caption=document.createElement("p"); caption.id="lightbox-caption"; caption.className="lb-caption";
    dialog.append(image,caption); overlay.append(closeButton,dialog); document.body.appendChild(overlay);
    image.addEventListener("click",function(e){e.stopPropagation();image.classList.toggle("zoomed");image.setAttribute("aria-label",image.classList.contains("zoomed")?(isEnglish()?"Zoom out":"Réduire l'image"):(isEnglish()?"View at actual size":"Afficher en taille réelle"));});
    overlay.addEventListener("click",function(e){if(e.target===overlay||e.target===dialog)close();});
    closeButton.addEventListener("click",function(e){e.stopPropagation();close();});
    document.addEventListener("keydown",handleKeyboard);
    return true;
  }

  function handleKeyboard(event) {
    if(!overlay||!overlay.classList.contains("open"))return;
    if(event.key==="Escape"){event.preventDefault();close();return;}
    if(event.key==="Tab"){event.preventDefault();closeButton.focus();}
  }

  function open(source) {
    if(!source||!overlay||!image)return;
    lastFocus=document.activeElement; image.classList.remove("zoomed"); image.src=source.currentSrc||source.src;
    var sourceAlt=source.getAttribute("alt")||""; image.alt=""; caption.textContent=sourceAlt||(isEnglish()?"Project screenshot":"Capture du projet");
    var closeLabel=isEnglish()?"Close image preview":"Fermer l'aperçu de l'image";
    closeButton.setAttribute("aria-label",closeLabel); closeButton.setAttribute("title",closeLabel);
    image.setAttribute("aria-label",isEnglish()?"View at actual size":"Afficher en taille réelle");
    overlay.classList.add("open"); if(!reducedMotion())overlay.classList.add("animate"); overlay.setAttribute("aria-hidden","false");
    previouslyLocked=document.body.classList.contains("lb-lock"); document.body.classList.add("lb-lock"); overlay.scrollTop=0; overlay.scrollLeft=0; closeButton.focus({preventScroll:true});
  }

  function close() {
    if(!overlay||!overlay.classList.contains("open"))return;
    overlay.classList.remove("open","animate"); overlay.setAttribute("aria-hidden","true"); image.classList.remove("zoomed"); image.removeAttribute("src"); caption.textContent="";
    if(!previouslyLocked)document.body.classList.remove("lb-lock");
    if(lastFocus&&typeof lastFocus.focus==="function")lastFocus.focus({preventScroll:true}); lastFocus=null;
  }

  function prepareImage(img) {
    if(img.dataset.lightboxInitialized==="true")return;
    img.dataset.lightboxInitialized="true"; if(!img.hasAttribute("decoding"))img.decoding="async";
    img.setAttribute("tabindex","0"); img.setAttribute("role","button");
    var alt=img.getAttribute("alt")||""; img.setAttribute("aria-label",isEnglish()?"Open image: "+alt:"Agrandir l'image : "+alt);
    img.addEventListener("click",function(){open(img);});
    img.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();open(img);}});
  }

  function init() {
    var targets=document.querySelectorAll(SELECTOR); if(!targets.length)return;
    injectStyle(); if(!build())return; targets.forEach(prepareImage);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true}); else init();
})();
