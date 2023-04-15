"use strict";

// Start Loader

let LOAD = document.querySelector(".backg-load");

window.onload = Load(LOAD);

function Load(LOAD) {
  LOAD.classList.add("found-out");
}

// End Loader
window.addEventListener("load", () => {
  HEAD.style.cssText = "display:block;opacity:1;position :fixed";
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    activeHead();
  } else {
    desableHead();
  }
});