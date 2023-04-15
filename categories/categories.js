"use strict";

// Start Loader
let HEAD = document.querySelector("header");

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

// Start click categories

let CATEGORIE_BTN = document.querySelector(
  ".categories .categories_container .filter_bar span"
);
let CATEGORIE_PARENT_LIST = document.querySelector(
  ".categories .categories_container .filter_bar .categories_list "
);
let CATEGORIE_LIST = Array.from(
  document.querySelectorAll(
    ".categories .categories_container .filter_bar .categories_list li"
  )
);
let CATEGORIE_ELEMENT = Array.from(
  document.querySelectorAll(
    ".categories .categories_container .all_element .srv_box"
  )
);
let CATEGORIE_POS = document.querySelector(
  ".categories .categories_container .filter_bar .cat_pos"
);
window.addEventListener("click", (e) => {
  return e.target.classList.contains("categorie_btn")
    ? CATEGORIE_PARENT_LIST.classList.toggle("active")
    : CATEGORIE_PARENT_LIST.classList.remove("active");
});

CATEGORIE_LIST.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    CATEGORIE_POS.innerHTML = e.target.getAttribute("data-categorie");
    CATEGORIE_ELEMENT.forEach((srv) => {
      srv.style.display = "none";
      return srv.getAttribute("data-categorie").toLocaleLowerCase() ==
        CATEGORIE_POS.innerHTML
        ? (srv.style.display = "block")
        : "";
    });
  });
});

// End click categories
