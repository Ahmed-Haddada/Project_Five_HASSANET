"use strict";

// Start Load Page
let LOAD = document.querySelector(".backg-load");
let WELCOME_PAGE = document.querySelector(".trans_back");
let HOME = document.querySelector(".Home_Sec");
let HEAD = document.querySelector("header");

window.onload = Load();

function Load() {
  LOAD.classList.add("found-out");
  WELCOME_PAGE.style.display = "flex";
  HOME.style.display = "block";
}
// End Load Page

//   Start On click Scroll To Down

let TO_DOWN_ARROW = document.querySelector(".trans_back .arrow-down");
TO_DOWN_ARROW.addEventListener("click", () =>
  window.scrollTo(0, HOME.offsetHeight)
);

//  End On click Scroll To Down

// Start Change opacite welcome Page
let opacity = 1;
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    var currScrollPos2 =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    WELCOME_PAGE.style.opacity = -currScrollPos2 / 400 + 2;
  }
});

//  End Change opacite welcome Page

// Active Head
window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY >= WELCOME_PAGE.offsetHeight) {
      HEAD.style.cssText = "display:block;opacity:1;position :fixed";
      WELCOME_PAGE.style.display = "none";
    }
    if (window.scrollY > document.getElementById("Home").offsetHeight) {
      activeHead();
    } else {
      desableHead();
    }
  },
  true
);
// Desactive Head

//  Start auto create text

let i = 0;

let HEADING_LOAD = setInterval(() => {
  let HEADING = "Your Key To Success: HELP WORLD";
  document.querySelector(".trans_back .para-world").textContent += HEADING[i];
  i += 1;
  if (i == HEADING.length) {
    clearInterval(HEADING_LOAD);
  }
}, 150);

//  End auto create text

// Start Change Background

let ALL_IMG = Array.from(
  document.querySelectorAll("section .section_container .back_ground img")
);
let PARENT_CIRCEL = document.querySelector(
  "section .section_container .back_ground .circle "
);

let CURRENT_INDEX = 1;
let IMG_COUNT = ALL_IMG.length;
/* Start Create Circel */

for (let i = 1; i <= IMG_COUNT; i++) {
  let CIRCLE_POSITION = document.createElement("span");

  CIRCLE_POSITION.setAttribute("data-circle", i);

  PARENT_CIRCEL.appendChild(CIRCLE_POSITION);
}

/* End Create Circel */

let CIRCLE_IMG_POSITION = Array.from(
  document.querySelectorAll(
    "section .section_container .back_ground .circle span"
  )
);

setInterval(ChangeImg, 4000);

function ChangeImg() {
  CURRENT_INDEX += 1;
  ShowNextImg();
  if (CURRENT_INDEX > IMG_COUNT) {
    ReturnToFirstImg();
  }
  PositionImgCircle();
}

function ReturnToFirstImg() {
  CURRENT_INDEX = 1;
  ALL_IMG.forEach((img) => {
    img.classList.remove("active");
    if (img.getAttribute("data-num") == CURRENT_INDEX) {
      img.classList.add("active");
    }
  });
}

function ShowNextImg() {
  ALL_IMG.forEach((img) => {
    img.classList.remove("active");
    if (img.getAttribute("data-num") == CURRENT_INDEX) {
      img.classList.add("active");
    }
  });
}

function PositionImgCircle() {
  ALL_IMG.forEach((img) => {
    if (img.getAttribute("data-num") == CURRENT_INDEX) {
      CIRCLE_IMG_POSITION.forEach((circle) => {
        circle.classList.remove("active");
        circle.getAttribute("data-circle") == img.getAttribute("data-num")
          ? circle.classList.add("active")
          : null;
      });
    }
  });
}

// Start Change Img With On Click Circle
CIRCLE_IMG_POSITION.forEach((circle) =>
  circle.addEventListener("click", (e) => {
    CIRCLE_IMG_POSITION.forEach((circle) => {
      ALL_IMG.forEach((img) => {
        img.classList.remove("active");
        circle.classList.remove("active");
        if (
          e.currentTarget.getAttribute("data-circle") ==
          img.getAttribute("data-num")
        ) {
          e.currentTarget.classList.add("active");
          img.classList.add("active");
          CURRENT_INDEX = img.getAttribute("data-num");
        }
      });
    });
  })
);
// End Change Img With On Click Circle

// End Change  Background

// Start Home Section ==> definetion Part
let VIEW = Array.from(
  document.querySelectorAll(
    ".Home_Sec .home_container .def_page .ServView .view"
  )
);
let ARROW = Array.from(
  document.querySelectorAll(
    ".Home_Sec .home_container .def_page .ServView .lock i:nth-last-child(2) "
  )
);
let BTN_CLOSE = Array.from(
  document.querySelectorAll(
    ".Home_Sec .home_container .def_page .ServView .lock i:last-of-type "
  )
);

ARROW.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    VIEW.forEach((VIEW) => VIEW.classList.remove("active"));
    ARROW.forEach((arrow) => arrow.classList.add("active"));
    BTN_CLOSE.forEach((close) => close.classList.remove("active"));
    e.currentTarget.closest(".view").classList.add("active");
    e.currentTarget.classList.remove("active");
    e.currentTarget.parentNode
      .querySelector("i:last-of-type")
      .classList.add("active");

    BTN_CLOSE.forEach((close) => {
      close.addEventListener("click", (e) => {
        e.currentTarget.closest(".view").classList.remove("active");
        BTN_CLOSE.forEach((close) => close.classList.remove("active"));
        ARROW.forEach((arrow) => arrow.classList.add("active"));
      });
    });
  });
});

// End Home Section  ==> definetion Part

let SVG = Array.from(document.querySelectorAll(".svg_about"));
window.addEventListener("scroll", () => {
  SVG.forEach((svgImg) => {
    if (window.scrollY >= 400) {
      svgImg.classList.add("active");
    } else {
      svgImg.classList.remove("active");
    }
  });
});
// End Home Section  ==> definetion Part ==> Start Animantion Svg

// Start  Home Section  ==> About Part ==> On Click Create Div With Video

const BTN_PLAY = document.querySelector(
  ".About_Sec .about_container .about_TexImg .play "
);
const ABOUT_CONT_ELEMENT = document.querySelector(
  ".About_Sec .about_container .about_TexImg  "
);

BTN_PLAY.addEventListener("click", CreateBox);

function CreateBox() {
  // Start Create Box Video

  let BOX_INNER = document.createElement("div");
  BOX_INNER.setAttribute("id", "BoxVideo");
  const BOX_STYLE = {
    position: "absolute",
    background: "#3a36368a",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    width: "100%",
    transition: "2s",
  };
  Object.assign(BOX_INNER.style, BOX_STYLE);
  ABOUT_CONT_ELEMENT.appendChild(BOX_INNER);
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
    " .About_Sec .about_container .about_TexImg #BoxVideo #BtnClose"
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
    src: "./Video/Climate Change ｜ Short Cinematic Video.mp4",
    id: "Video",
    autoplay: "autoplay",
  });
  BOX.appendChild(VIDEO);
  // End Inner Box (video)
}

// End  Home Section  ==> About Part ==> On Click Create Div With Video

// Start  Home Section  ==> Challanges Part
let GOALS = Array.from(
  document.querySelectorAll(
    ".Challenges_To_Day .Challenge_container .Challenges .Challenge .text_def .Goal > .Rised"
  )
);

let SECTION_CHALLANGE = document.querySelector(".Challenges_To_Day ");
window.addEventListener("scroll", () => {
  if (window.scrollY > SECTION_CHALLANGE.offsetTop + 350) {
    GOALS.forEach((goal) => {
      goal.style.width = `${goal.dataset.number}%`;
      goal.parentElement.firstElementChild.innerHTML = `${goal.dataset.number}%`;
      goal.parentElement.children[0].style.left = `${goal.dataset.number - 7}%`;
    });
  }
});

// Start Challenge Of to Day
const VIEW_CHALL_BTN = Array.from(
  document.querySelectorAll(
    ".Home_Sec .Challenges_To_Day .Challenge .back-btn #doneChall"
  )
);
const CHALLANGE_CONTAINER = document.querySelector(
  ".Home_Sec .Challenges_To_Day .Challenge_container .Challenges"
);

VIEW_CHALL_BTN.forEach((btn_done) => {
  btn_done.addEventListener("click", Done_Challange, this);
});

function Done_Challange(e) {
  CreateContainer(e.currentTarget);
}

function CreateContainer(e) {
  let CONTAINER_CHALLANGE = Object.assign(document.createElement("div"), {
    className: "Box_challange",
  });

  let box_style = {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    background: "var(--Black-Color)",
    height: "60%",
    zIndex: "23",
    width: "90%",
    padding: "10px 0",
    transition: "all 2s ease 0s",
    borderRadius: "3px",
  };
  Object.assign(CONTAINER_CHALLANGE.style, box_style);

  CloseBtn(CONTAINER_CHALLANGE, CHALLANGE_CONTAINER);
  AddImgToChall(CONTAINER_CHALLANGE, e);
  InscriContainer(CONTAINER_CHALLANGE);
}

function CloseBtn(CONTAINER_CHALLANGE, CHALLANGE_CONTAINER) {
  // Create Btn Close
  let BtnClose = document.createElement("span");
  BtnClose.setAttribute("id", "BtnClose");
  BtnClose.style.cssText =
    "width: 30px;  height: 30px; padding:5px;position: absolute; background: var(--gray-opacity-Dow);right: -12px;top: -12px;  border-radius: 50%; text-align: center; transition: var(--Main-transition);box-shadow: 0 0 5px 2px var(--trasparent-Color);";
  let X_Mark = Object.assign(document.createElement("i"), {
    className: "fa-solid fa-xmark close",
  });
  X_Mark.style.cssText =
    " color:black;font-size: 20px; vertical-align: bottom;cursor: pointer;";
  BtnClose.appendChild(X_Mark);
  CONTAINER_CHALLANGE.appendChild(BtnClose);
  CHALLANGE_CONTAINER.appendChild(CONTAINER_CHALLANGE);
  // Create Btn Close

  // Close btn
  const Close_Btn = document.querySelector(
    " .Challenges_To_Day .Challenge_container .Challenges .Box_challange #BtnClose"
  );
  Close_Btn.addEventListener("click", close);
  function close() {
    Close_Btn.parentElement.remove();
  }
  // Close btn
}

function AddImgToChall(CONTAINER_CHALLANGE, e) {
  //Start Add Img
  const IMG_CHALLANGE = e
    .closest(".Challenge")
    .querySelector(".img img")
    .getAttribute("src");
  let CONTAINER_IMG = Object.assign(
    document.createElement("div"),
    {
      className: "container_img",
    },
    {
      style:
        "position:relative;height:100%;width:50%;display:flex;flex-direction:column;align-items:center; justify-content: center;border-right: solid 2px var(--trasparent-Color);",
    }
  );
  let IMG = Object.assign(
    document.createElement("img"),
    {
      id: e
        .closest(".Challenge")
        .querySelector(".img img")
        .getAttribute("data-chall"),
    },
    { src: IMG_CHALLANGE },
    {
      style: "width: 250px;margin-top: 40px;   border-radius: 100%;",
    }
  );
  CONTAINER_IMG.appendChild(IMG);
  CONTAINER_CHALLANGE.appendChild(CONTAINER_IMG);
  // End Add Img

  AddText(CONTAINER_IMG, e);
}

function AddText(CONTAINER_IMG, e) {
  let TEXT_CONTAINER = Object.assign(document.createElement("div"), {
    className: "Text_challange",
    style: "text-align: center;",
  });

  const OUTSIDE_HEADING = e
    .closest(".Challenge")
    .querySelector(".text_def h3").innerText;

  const PARA_CHALLANGE = e
    .closest(".Challenge")
    .querySelector(".text_def p").innerText;

  let CHALLANGE_HEADING = document.createElement("h2");
  CHALLANGE_HEADING.innerText = OUTSIDE_HEADING;
  CHALLANGE_HEADING.style.cssText = "color:var(--Second-Mian-color);margin:0";

  let CHALLANGE_PARAG = document.createElement("p");
  CHALLANGE_PARAG.innerText = PARA_CHALLANGE;
  CHALLANGE_PARAG.style.cssText =
    "color:var(--white-color);font-size:15px;line-height:1.6";

  TEXT_CONTAINER.appendChild(CHALLANGE_HEADING);
  TEXT_CONTAINER.append(CHALLANGE_PARAG);
  CONTAINER_IMG.appendChild(TEXT_CONTAINER);

  // End Add Text Down the Img
}

function InscriContainer(CONTAINER_CHALLANGE) {
  let INSCRI_CONTAINER = Object.assign(
    document.createElement("form"),
    { className: "Conatiner_insc" },
    {
      style:
        "width:50%;position: relative; display: flex;flex-direction: column; align-items: center; gap: 30px; padding: 15px 0;",
    }
  );
  CONTAINER_CHALLANGE.appendChild(INSCRI_CONTAINER);
  AddYourName(INSCRI_CONTAINER);
  AddYourEmail(INSCRI_CONTAINER);
  AddYourCountry(INSCRI_CONTAINER);
}

function AddYourName(INSCRI_CONTAINER) {
  let NAME_CONTAINER = Object.assign(
    document.createElement("div"),
    {
      className: "Name_container",
    },
    {
      style:
        " position:relative; width: 300px;height: 40px;background: transparent;border: none;border-bottom: solid 1px var(--HeadColor);outline: none;color: white;font-size: 15px;",
    }
  );

  let name_input = Object.assign(
    document.createElement("input"),
    { type: "text" },
    { className: "name_input" },
    { placeholder: "Enter Your Name" },
    {
      style:
        " width: 100%;   height: 100%;   outline: none;   background: transparent;   color: white;   font-size: 15px;   padding-left: 20px; border: none;border-radius: 5px;     ",
    }
  );
  NAME_CONTAINER.append(name_input);
  const VALIDATION_NAME = Object.assign(document.createElement("div"), {
    className: "VALIDATION_NAME",
  });
  name_input.addEventListener("blur", () => {
    if (name_input.value !== "") {
      return Object.assign(
        VALIDATION_NAME,
        {
          innerHTML: ` Valid Name  <img src=./IMG/components/check.png>`,
        },
        {
          className: " Valid Name",
        },
        {
          style:
            " padding: 10px; color: green; font-size: 12px; transition: var(--Main-transition);font-weight: 600;   letter-spacing: 3px;display: flex;   align-items: center; gap: 10px;",
        }
      );
    } else if (name_input.value === "") {
      return Object.assign(
        VALIDATION_NAME,
        {
          innerHTML: `Add Your Name <img src=./IMG/components/cancel.png >`,
        },
        {
          className: "Add Your Name",
        },
        {
          style:
            " padding: 10px; color: red; font-size: 12px; transition: var(--Main-transition);font-weight: 600;   letter-spacing: 3px;display: flex;   align-items: center;gap: 10px;",
        }
      );
    }
  });

  NAME_CONTAINER.appendChild(VALIDATION_NAME);
  INSCRI_CONTAINER.appendChild(NAME_CONTAINER);
}
function AddYourEmail(INSCRI_CONTAINER) {
  let EMAIL_CONTAINER = Object.assign(
    document.createElement("div"),
    {
      className: "Email_container",
    },
    {
      style:
        " position:relative; width: 300px;height: 40px;background: transparent;border: none;border-bottom: solid 1px var(--HeadColor);outline: none;color: white;font-size: 15px;",
    }
  );

  let EMAIL_INPUT = Object.assign(
    document.createElement("input"),
    { type: "text" },
    { className: "email_input" },
    { placeholder: "Enter Your Email" },
    {
      style:
        " width: 100%;   height: 100%;   outline: none;   background: transparent;   color: white;   font-size: 15px;   padding-left: 20px; border: none;border-radius: 5px;     ",
    }
  );
  EMAIL_CONTAINER.append(EMAIL_INPUT);
  const VALIDATION_EMAIL = Object.assign(document.createElement("div"), {
    className: "VALIDATION_EMAIL",
  });
  EMAIL_INPUT.addEventListener("blur", () => {
    if (EMAIL_INPUT.value !== "") {
      return Object.assign(
        VALIDATION_EMAIL,
        {
          innerHTML: ` Valid Email  <img src=./IMG/components/check.png >`,
        },
        {
          className: " Valid Email",
        },
        {
          style:
            " padding: 10px; color: green; font-size: 12px; transition: var(--Main-transition);font-weight: 600;   letter-spacing: 3px;display: flex;   align-items: center; gap: 10px;",
        }
      );
    } else if (EMAIL_INPUT.value === "") {
      return Object.assign(
        VALIDATION_EMAIL,
        {
          innerHTML: `Add Your Email <img src= ./IMG/components/cancel.png >`,
        },
        {
          className: "Add Your Email",
        },
        {
          style:
            " padding: 10px; color: red; font-size: 12px; transition: var(--Main-transition);font-weight: 600;   letter-spacing: 3px;display: flex;   align-items: center;gap: 10px;",
        }
      );
    }
  });
  EMAIL_CONTAINER.appendChild(VALIDATION_EMAIL);
  INSCRI_CONTAINER.appendChild(EMAIL_CONTAINER);
}

function AddYourCountry(INSCRI_CONTAINER) {
  let COUNTRY_SELECT = Object.assign(
    document.createElement("div"),
    { className: "country_select" },
    {
      style:
        "width: 300px; height: 40px; cursor:pointer;border-bottom: solid 1px var(--HeadColor);color:white;font-size: 15px;color: gray;padding: 10px 20px;position:relative;z-index:1",
    }
  );

  let COUNTRY_UL = Object.assign(
    document.createElement("ul"),
    { className: "country" },
    {
      style:
        " width: 100%; height: 200px; overflow: auto; margin-top:10px;color: white;font-size: 15px;position:absolute; left:0 ; top:30px ;border-radius: 5px;cursor:pointer;display: none;        ",
    }
  );
  const VALIDATION_COUNTRY = Object.assign(document.createElement("div"), {
    className: "VALIDATION_Country",
  });

  let NAME_COUNTRY = document.createElement("span");
  NAME_COUNTRY.classList.add("Country_Chosen");
  NAME_COUNTRY.textContent = "Select Country";

  fetch("../Country.json")
    .then((reso) => {
      return reso.json();
    })
    .then((data) => {
      data.forEach((cont) => {
        const COUNTRY_ARRAY = Array(cont.name);
        const IMG_COUNTRY_ARRAY = Array(cont.flags.png);
        let CALLINGCODES_ARRAY = Array(cont.callingCodes);

        let COUNRTY_LI = Object.assign(document.createElement("li"), {
          style:
            "padding: 10px; background-color: #1a1111; color:white; border-bottom: 1px solid #7e6363; cursor:pointer; transition: var(--Main-transition);  z-index:11  ;border-radius:5px ",
        });

        let img = Object.assign(
          document.createElement("img"),
          { style: "margin-right:10px;width:20px" },
          { src: IMG_COUNTRY_ARRAY }
        );

        COUNRTY_LI.setAttribute("value", COUNTRY_ARRAY);
        COUNRTY_LI.innerHTML = COUNTRY_ARRAY;
        COUNRTY_LI.prepend(img);
        COUNTRY_UL.appendChild(COUNRTY_LI);

        // Satart Select Country

        COUNRTY_LI.addEventListener("click", (e) => {
          var NUMBER_INPUT = document.querySelector(".Phone_input");

          NAME_COUNTRY.innerHTML = e.currentTarget.innerHTML;
          NAME_COUNTRY.style.color = "white";
          NUMBER_INPUT.value = `( +${CALLINGCODES_ARRAY} ) `;
          COUNTRY_UL.dataset.flag = e.currentTarget.innerText;

          if (NAME_COUNTRY.value != "") {
            VALIDATION_COUNTRY.innerHTML = "";
          }
        });

        // End Select Country
      });
      // Start Show All Country

      window.addEventListener(
        "click",
        (e) => {
          e.target == COUNTRY_SELECT || e.target == NAME_COUNTRY
            ? COUNTRY_SELECT.classList.toggle("active")
            : COUNTRY_SELECT.classList.remove("active");
        },
        true
      );

      // End Show All Country
    })
    .catch((err) => err);

  COUNTRY_SELECT.appendChild(NAME_COUNTRY);
  COUNTRY_SELECT.appendChild(COUNTRY_UL);
  COUNTRY_SELECT.appendChild(VALIDATION_COUNTRY);
  INSCRI_CONTAINER.appendChild(COUNTRY_SELECT);
  AddYourPhone(INSCRI_CONTAINER);
}

function AddYourPhone(INSCRI_CONTAINER) {
  const NUMBER_INPUT = Object.assign(
    document.createElement("input"),
    { type: "text" },
    { className: "Phone_input" },
    { placeholder: "Enter Your Phone Number" },
    {
      style:
        " width: 100%;   height: 100%;   outline: none;   background: transparent;   color: white;   font-size: 15px;   padding-left: 20px; border: none;border-radius: 5px;     ",
    }
  );
  const NUMBER_CONTAINER = Object.assign(
    document.createElement("div"),
    { type: "number" },
    { className: "Phone_container" },
    {
      style:
        " position:relative; width: 300px;height: 40px;background: transparent;border: none;border-bottom: solid 1px var(--HeadColor);outline: none;color: white;font-size: 15px;",
    }
  );
  const VALIDATION_NUMBER = Object.assign(document.createElement("div"), {
    className: "validation_number",
  });
  NUMBER_INPUT.onkeypress = function (event) {
    if (!event.key.match(/[0-9]/)) {
      event.preventDefault();
    }
  };
  NUMBER_INPUT.addEventListener(
    "blur",
    () => {
      if (NUMBER_INPUT.value != "") {
        function CheckPhone(phoneInp) {
          let RegExp =
            /(\(?\s\+\d{1,3}\s\)?)[\s\S]\d{2}[\s\S-]\d{3}[\s\S-]\d{1,}$/g;

          return RegExp.test(phoneInp)
            ? Object.assign(
                VALIDATION_NUMBER,
                {
                  innerHTML: ` Valid Number  <img src=./IMG/components/check.png >`,
                },
                {
                  className: " Valid Number",
                },
                {
                  style:
                    " padding: 10px; color: green; font-size: 12px; transition: var(--Main-transition);font-weight: 600;   letter-spacing: 3px;display: flex;   align-items: center; gap: 10px;",
                }
              )
            : Object.assign(
                VALIDATION_NUMBER,
                {
                  innerHTML: `Not Valid Number <img src=./IMG/components/cancel.png >`,
                },
                {
                  className: "Not Valid Number",
                },
                {
                  style:
                    " padding: 10px; color: red; font-size: 12px; transition: var(--Main-transition);font-weight: 600;   letter-spacing: 3px;display: flex;   align-items: center;gap: 10px;",
                }
              );
        }
        CheckPhone(NUMBER_INPUT.value);
      } else {
        Object.assign(
          VALIDATION_NUMBER,
          {
            innerHTML: `Add Your Number <img src=./IMG/components/telephone.png >`,
          },
          {
            style:
              " padding: 10px; color:  #0092ff; font-size: 12px; transition: var(--Main-transition);font-weight: 600;   letter-spacing: 3px;display: flex;   align-items: center;gap: 10px;",
          }
        );
      }
    },
    true
  );
  NUMBER_CONTAINER.append(NUMBER_INPUT);
  NUMBER_CONTAINER.append(VALIDATION_NUMBER);
  INSCRI_CONTAINER.appendChild(NUMBER_CONTAINER);
  submit(INSCRI_CONTAINER);
}

function submit(INSCRI_CONTAINER) {
  let BTN_SUBMIT = Object.assign(
    document.createElement("div"),
    {
      type: "submit",
    },
    {
      innerHTML: "Submit <img src= ./IMG/components/send.png>",
    },
    { className: "Submit_forme" },
    {
      style:
        "padding: 10px 30px;  border: none; cursor: pointer;  background: #49c022;  letter-spacing: 2px;  color: white;  border-radius: 20px;  transition: var(--Main-transition);   display: flex; align-items: center;   gap: 10px;     font-size: 15px; ",
    }
  );
  BTN_SUBMIT.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");

    const COUNTRY_INPUT_VAL = document
      .querySelector(".Box_challange .Conatiner_insc .country_select .country ")
      .getAttribute("data-flag");

    const NAME_INPUT_VAL = document.querySelector(
      ".Box_challange .Conatiner_insc .Name_container .name_input "
    ).value;

    const EMAIL_INPUT_VAL = document.querySelector(
      ".Box_challange .Conatiner_insc .Email_container .email_input "
    ).value;
    const PHONE_INPUT_VAL = document.querySelector(
      ".Box_challange .Conatiner_insc .Phone_container .Phone_input "
    ).value;
    const FORME = document.querySelector(".Conatiner_insc");
    const NAME_VALID = document.querySelector(
      ".Box_challange .Conatiner_insc .Name_container>div"
    );
    const EMAIL_VALID = document.querySelector(
      ".Box_challange .Conatiner_insc .Email_container>div"
    );
    const COUNTRY_VALID = document.querySelector(
      ".Box_challange .Conatiner_insc .country_select .VALIDATION_Country"
    );
    const PHONE_VALID = document.querySelector(
      ".Box_challange .Conatiner_insc .Phone_container>div"
    );

    class showValidate {
      constructor(name, email, country, phone) {
        this.name = name;
        this.email = email;
        this.country = country;
        this.phone = phone;
      }

      static check(input) {
        input.name == ""
          ? Object.assign(
              NAME_VALID,
              { className: "Empty_Input" },
              {
                innerHTML:
                  "Please Add Your Name <img src= ./IMG/components/name.png>",
              },
              {
                style:
                  " padding: 10px; color: red; font-size: 12px; transition: var(--Main-transition);font-weight: 600;   letter-spacing: 3px;display: flex;   align-items: center;gap: 10px;",
              }
            )
          : null;

        input.email == ""
          ? Object.assign(
              EMAIL_VALID,
              { className: "Empty_Input" },
              {
                innerHTML:
                  "Please Add Your Email <img src=./IMG/components/email.png >",
              },
              {
                style:
                  " padding: 10px; color: red; font-size: 12px; transition: var(--Main-transition);font-weight: 600;   letter-spacing: 3px;display: flex;   align-items: center;gap: 10px;",
              }
            )
          : null;

        input.phone == ""
          ? Object.assign(
              PHONE_VALID,
              { className: "Empty_Input" },
              {
                innerHTML:
                  "Please Add Your Phone <img src=./IMG/components/telephone.png >",
              },
              {
                style:
                  " padding: 10px; color: red; font-size: 12px; transition: var(--Main-transition);font-weight: 600;   letter-spacing: 3px;display: flex;   align-items: center;gap: 10px;",
              }
            )
          : null;

        input.country == null
          ? Object.assign(
              COUNTRY_VALID,
              { className: "Empty_Input" },
              {
                innerHTML:
                  "Please Add Your Country <img src=./IMG/components/flag.png >",
              },
              {
                style:
                  "margin: 18px -10px; color: red; font-size: 12px; transition: var(--Main-transition);font-weight: 600;letter-spacing: 3px;display: flex;   align-items: center;gap: 10px;",
              }
            )
          : null;

        for (let INPUTS_VALUES of Object.values(input)) {
          if (INPUTS_VALUES != "" && INPUTS_VALUES != null) {
            if (
              document.querySelector(
                ".Box_challange .Conatiner_insc .Phone_container>div"
              ).className == " Valid Number"
            ) {
              FORME.submit();
              return window.localStorage.setItem(
                input.name,
                JSON.stringify(Object.entries(input))
              );
            }
          }
        }
      }
    }
    let VALIDATE = new showValidate(
      NAME_INPUT_VAL,
      EMAIL_INPUT_VAL,
      COUNTRY_INPUT_VAL,
      PHONE_INPUT_VAL
    );
    showValidate.check(VALIDATE);
  });
  INSCRI_CONTAINER.appendChild(BTN_SUBMIT);
}

// End  Home Section  ==> Challanges Part

// Start  Home Section  ==> Stats Part
let STAT_VALUE = Array.from(
  document.querySelectorAll(".OurAwesomeStats .Stat .Stat_val")
);
let STAT_BOX = Array.from(document.querySelectorAll(".OurAwesomeStats .Stat"));

let SECTION_STATS = document.querySelector(".OurAwesomeStats");

window.addEventListener("scroll", function () {
  if (window.scrollY >= SECTION_STATS.offsetTop + 200) {
    STAT_VALUE.forEach((stat_value) => {
      function updateCounter() {
        const target = +stat_value.getAttribute("data-stat");
        const elemnt = parseInt(stat_value.innerText);
        const increment = target / 200;
        if (elemnt < target) {
          if (target >= 10000) {
            stat_value.innerText = `+${Math.ceil(elemnt + increment)}K`;
          } else {
            stat_value.innerText = `${Math.ceil(elemnt + increment)}`;
          }

          setTimeout(updateCounter, 1);
        }
      }
      updateCounter();
    });
    STAT_BOX.forEach((stat_box) => {
      stat_box.style.transform = "translate(0,0)";
    });
  }
});

// End  Home Section  ==> Stats Part

// Start  Home Section  ==> Sign UP Part

let INP_LABEL = Array.from(
  document.querySelectorAll(
    ".register .container .SignUp form label:not(:last-of-type)"
  )
);

let SIGN_INPU = Array.from(
  document.querySelectorAll(
    ".register .container .SignUp form input:not(:last-of-type)"
  )
);
let FORM_SUBMIT = document.querySelector(".register .container .SignUp form ");
let COUNTRY_CONTAINER = document.querySelector(
  ".register .container .SignUp form .Country_Container"
);
let SIGN_SVG = document.querySelector(".register svg");

SIGN_INPU.forEach((input) => {
  input.addEventListener("focus", (e) => {
    e.currentTarget.style.cssText =
      "border: 3px solid #c9aaaa; padding: 20px 10px; border-radius: 6px;font-size:15px";
    e.currentTarget.previousElementSibling.style.cssText =
      "color:white;transition:0.5s;background-color:#6d659f;padding:0 5px;font-weight: 500";

    input.addEventListener("blur", (e) => {
      COUNTRY_CONTAINER.style.cssText = "opacity:0;visibility:hidden";
      CheckInput(e);
    });
  });
});

SIGN_INPU.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    i = 50;
    if (input.value.length === 0) {
      SIGN_SVG.style.strokeDashoffset = "1800 ";
    } else {
      if (!(e.key == "Delete" || e.key == "Backspace")) {
        SIGN_SVG.style.strokeDashoffset -= i;
        if (SIGN_SVG.style.strokeDashoffset == 0) {
          SIGN_SVG.style.strokeDashoffset = "0px";
          SIGN_SVG.style.fillOpacity = "1";
        }
      } else {
        if (SIGN_SVG.style.strokeDashoffset == 1800) {
          i = 0;
          SIGN_SVG.style.strokeDashoffset = "1800";
        } else if (SIGN_SVG.style.strokeDashoffset !== 1800) {
          SIGN_SVG.style.fillOpacity = "0";
          SIGN_SVG.style.strokeDashoffset =
            parseInt(SIGN_SVG.style.strokeDashoffset) + i;
        }
      }
    }
  });
});

SIGN_INPU.forEach((input) => {
  input.addEventListener("focus", async (event) => {
    if (event.target.id == "Country") {
      const res = await fetch("/Country.json");
      const result = await res.json();
      let dataArray = UserCountryList(result);
      let flag = document.querySelector(".SignUp form #flag");
      if (flag) flag.src = "";
    }
    YourPhone();
  });
});

function CheckInput(input) {
  if (input.currentTarget.value == "") {
    input.currentTarget.style.cssText =
      "outline: none;  border-color: transparent transparent #c9aaaa transparent;  width: 300px;  height: 30px;   background: transparent;";
    input.currentTarget.previousElementSibling.style.cssText = "color:black;";
  }
}

function UserCountryList(data) {
  data.forEach((country) => {
    let list = document.createElement("li");
    list.setAttribute("value", country.name);
    list.innerHTML = `
   <div class=flag ><img src=${country.flags.png}></div>
  ${country.name}
   `;
    let call = country.callingCodes;

    COUNTRY_CONTAINER.style.cssText = "  opacity: 1;  visibility: visible;";
    COUNTRY_CONTAINER.appendChild(list);

    ChoiseYourCountry(list, call);
    // **************************
  });
}

function ChoiseYourCountry(ListCountry, call) {
  ListCountry.addEventListener("click", (Event) => {
    let CountryInput = document.querySelector("#Country");
    let YourCountryName = Event.currentTarget.getAttribute("value");

    Object.assign(
      CountryInput,
      { value: YourCountryName },
      {
        style:
          "border: 3px solid #c9aaaa; padding: 20px 15px; border-radius: 6px;font-size:15px",
      }
    );
    CountryInput.previousElementSibling.style =
      "color:white;transition:0.5s;background-color:#6d659f;padding:0 5px;font-weight: 500;position:relative";

    COUNTRY_CONTAINER.style.cssText = "  opacity: 0;  visibility: hidden;";

    let PHONE_INP = document.querySelector("#phone");
    PHONE_INP.value = ` +${call} `;
  });
}

function YourPhone() {
  let PHONE_INP = document.querySelector("#phone");

  PHONE_INP.onkeypress = function (e) {
    if (!e.key.match(/[0-9]/)) {
      e.preventDefault();
    }
  };
}

FORM_SUBMIT.addEventListener(
  "submit",
  function (e) {
    SIGN_INPU.forEach((input) => {
      if (input.value == "") {
        alert("Please Add Your Info");
        e.preventDefault();
      }
    });
  },
  true
);

// End  Home Section  ==> Sign UP Part
