"use strict";

// Start Show Header
let HEAD = document.querySelector("header");



function activeHead() {
  HEAD.classList.add("active");
  HEAD.children[0].classList.add("active");
  document
    .querySelectorAll("header .container-head .serv li .serv_box ")
    .forEach((srv) => srv.classList.add("active"));
  document
    .querySelectorAll("header .container-head .serv li a")
    .forEach((link) => link.classList.add("show"));
  document
    .querySelectorAll(".container-head .bars span")
    .forEach((bars) => bars.classList.add("show"));
}
function desableHead() {
  HEAD.classList.remove("active");
  HEAD.children[0].classList.remove("active");
  document
    .querySelectorAll("header .container-head .serv li .serv_box ")
    .forEach((srv) => srv.classList.remove("active"));
  document
    .querySelectorAll("header .container-head .serv li a")
    .forEach((link) => link.classList.remove("show"));
  document
    .querySelectorAll(".container-head .bars span")
    .forEach((bars) => bars.classList.remove("show"));
}

// Start Show Menu Small Dvices

let MENU_BARS = document.querySelector(".container-head .bars");
let SERV_HEAD = document.querySelector(".container-head .serv");

MENU_BARS.addEventListener("click", () => {
  MENU_BARS.classList.toggle("active");
  SERV_HEAD.classList.toggle("active");
  HEAD.classList.toggle("height-100por");
});

// End Show Menu Small Dvices
// Start Choise Your Language

let LIST_LANG = document.querySelector(
  ".simple_bar .log_sig .change_lang .language"
);
let LANGUAGE = Array.from(
  document.querySelectorAll(".simple_bar .log_sig .change_lang .language li")
);

// Start change language

function ShowLang(e, LIST_LANG) {
  e.target.id == "Language"
    ? LIST_LANG.classList.add("active")
    : LIST_LANG.classList.remove("active");
}
function ChoiseLang(LANGUAGE) {
  LANGUAGE.forEach((lang) =>
    lang.addEventListener("click", (event) => {
      LANGUAGE.forEach((lang) => lang.classList.remove("active"));
      event.currentTarget.classList.add("active");
    })
  );
}

// End change language
window.addEventListener(
  "click",
  (e) => ShowLang(e, LIST_LANG),
  ChoiseLang(LANGUAGE)
);

// End Choise Your Language

// Start To Top

let BTN_TOP = document.querySelector("#toTop img");

BTN_TOP.addEventListener("click", () => {
  BTN_TOP.classList.add("active");
  window.scrollTo(0, 0);
});

window.addEventListener(
  "scroll",
  () => {
    let TO_TOP = document.getElementById("toTop");
    if (window.scrollY >= 400) {
      TO_TOP.classList.add("active");
    } else {
      TO_TOP.classList.remove("active");
      BTN_TOP.classList.remove("active");
    }
  },
  true
);

// End To Top

// Start Header Links Click on Links make BackGround

let BTN_LINK = Array.from(
  document.querySelectorAll("header .container-head .serv .link > a ")
);

BTN_LINK.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    BTN_LINK.forEach((btn_parent) =>
      btn_parent.parentElement.classList.remove("active")
    );
    e.currentTarget.parentElement.classList.add("active");
  })
);
window.addEventListener("load", () => {
  let url = window.location.pathname.split("/")[1];
  BTN_LINK.forEach((link) => {
    if (link.textContent.toLowerCase() == url.toLowerCase()) {
      link.parentElement.classList.add("active");
    }
  });
});

// End Header Links Click on Links make BackGround
// End Sohw Header

let a = document.querySelectorAll(".container-head .serv .link");
let serv = document.querySelectorAll(".container-head .serv .link .serv_box");
a.forEach((link) => {
  link.addEventListener("mouseenter", show);
  link.addEventListener("mouseleave", UnShow);
});
function show(e) {
  if (e.target.children[1] != undefined)
    e.target.children[1].style.cssText = "   visibility: visible;opacity: 1";
}
function UnShow(e) {
  if (e.target.children[1] != undefined)
    e.target.children[1].style.cssText = "  visibility: hidden;opacity: 0; ";
}
