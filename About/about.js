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

// Start Play Video About Us

let PLAY_VIDEO = document.querySelector(".about .about_container .video .play");

let ABOUT_CONTAINER = document.querySelector(
  ".about .about_container .container_element "
);

PLAY_VIDEO.addEventListener("click", CreateBox);

function CreateBox() {
  // Start Create Box Video

  let BOX_INNER = document.createElement("div");
  BOX_INNER.setAttribute("id", "BoxVideo");
  const BOX_STYLE = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    width: "100%",
    transition: "2s",
    zIndex: "2",
  };
  Object.assign(BOX_INNER.style, BOX_STYLE);
  ABOUT_CONTAINER.appendChild(BOX_INNER);
  // End Create Box Video
  AddVideo(BOX_INNER);
  CreateCloseBtn(BOX_INNER);
}

function CreateCloseBtn(BOX) {
  //Start Create Close Btn
  let BTN_CLOSE = document.createElement("span");
  BTN_CLOSE.setAttribute("id", "BtnClose");
  BTN_CLOSE.style.cssText =
    "width: 30px;height: 30px;position: absolute;background: var(--Main-BackColor);right: -10px;top: -15px; border-radius: 50%;text-align:center;transition:var(--Main-transition);";

  let X_Mark = Object.assign(document.createElement("i"), {
    className: "fa-solid fa-xmark close",
  });

  X_Mark.style.cssText = " color:white;font-size: 20px;cursor: pointer;";
  BTN_CLOSE.appendChild(X_Mark);
  BOX.appendChild(BTN_CLOSE);
  // End Create Close Btn

  // Start Close Btn
  let CLOSE = document.querySelector(
    " .about .about_container #BoxVideo #BtnClose"
  );

  CLOSE.addEventListener("click", close);
  function close() {
    CLOSE.parentElement.remove();
  }

  // End Close Btn
}

function AddVideo(BOX) {
  // Start Inner Box (video)

  let VIDEO = document.createElement("video");
  VIDEO.style.cssText = "width:100%";

  function setAttributes(elem, attrs) {
    for (var key in attrs) {
      elem.setAttribute(key, attrs[key]);
    }
  }
  setAttributes(VIDEO, {
    src: "../Video/Climate Change ｜ Short Cinematic Video.mp4",
    id: "Video",
    autoplay: "autoplay",
  });
  BOX.appendChild(VIDEO);
  // End Inner Box (video)
}

// End Play Video About Us

// Start Animation About Us
let HEAIDING_ABOUT = document.querySelector(
  ".about .about_container .container_element .text h3"
);
let PARAGRAPH_ABOUT = document.querySelectorAll(
  ".about .about_container .container_element .text .paragraph "
);
let IMG_ABOUT = document.querySelector(".about .about_container .video ");
let MORE_ABOUT = document.querySelector(
  ".about .about_container .container_element .text .more "
);
window.addEventListener("load", () => {
  HEAIDING_ABOUT.style.cssText = "opacity:1;left:0";
  IMG_ABOUT.style.cssText = "opacity:1";

  PARAGRAPH_ABOUT.forEach(
    (elem) => (elem.style.cssText = "opacity:1;transform:translateX(0px)")
  );
  MORE_ABOUT.style.cssText = "opacity:1;transform:translateY(0px)";
});
// End Animation About Us
