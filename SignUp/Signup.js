// import data from "../login.json" assert { type: "json" };

// Step 2 Password
let INPUT_PASSWORD = Array.from(
  document.querySelectorAll("form .password input")
);
INPUT_PASSWORD.forEach((input) => {
  input.addEventListener("focus", (e) => {
    e.currentTarget.nextElementSibling.style.opacity = "1";
  });
});
INPUT_PASSWORD.forEach((input) => {
  input.addEventListener("blur", (e) => {
    e.currentTarget.nextElementSibling.style.opacity = "0";
  });
});
let EYE_PASSWORD = Array.from(document.querySelectorAll("form .password i"));
EYE_PASSWORD.forEach((eye) => {
  eye.addEventListener("click", (e) => {
    if (!e.currentTarget.classList.contains("fa-eye-slash")) {
      e.currentTarget.classList = "fa-regular fa-eye-slash";
      e.currentTarget.previousElementSibling.type = "password";
    } else {
      e.currentTarget.classList = "fa-regular fa-eye ";
      e.currentTarget.previousElementSibling.type = "text";
    }
  });
});
//End Step 2 Password

// Step 3 country & phone
let INPUT_SEARCH = document.querySelector("form #search");
let INPUT_PHONE = document.querySelector("form #phone");
let LIST_COUNTRYS = document.querySelector("form .country_list");
fetch("../Country.json")
  .then((country) => {
    return country.json();
  })
  .then((countrys) => {
    countrys.forEach((cont) => {
      let NAME_COUNTRY = [cont.name];
      const FLAGS = cont.flags.png;
      let CALLINGCODES = ["+" + cont.callingCodes];
      let ALL_COUNTRY = Object.assign(document.createElement("li"), {
        innerHTML: `<img src=${FLAGS} alt=flag/>` + NAME_COUNTRY,
      });
      ALL_COUNTRY.dataset.country = NAME_COUNTRY;
      LIST_COUNTRYS.appendChild(ALL_COUNTRY);

      window.addEventListener("click", (e) => {
        e.target.id == "search"
          ? (LIST_COUNTRYS.style.display = "block")
          : (LIST_COUNTRYS.style.display = "none");
      });

      let MY_FLAG_Container = document.querySelector("form #MyCountry ");
      ALL_COUNTRY.addEventListener("click", (e) => {
        let MY_FLAG = document.createElement("img");
        INPUT_SEARCH.style.paddingLeft = "30px";
        MY_FLAG.src = e.currentTarget.firstElementChild.src;
        INPUT_SEARCH.value = e.currentTarget.textContent;
        MY_FLAG_Container.appendChild(MY_FLAG);
        INPUT_PHONE.value = CALLINGCODES + " ";
        LIST_COUNTRYS.style.display = "none";
      });
      INPUT_SEARCH.addEventListener("input", (e) => {
        if (INPUT_SEARCH.value !== "") {
          ALL_COUNTRY.style.display = "none";
        } else {
          if (MY_FLAG_Container.firstElementChild) {
            INPUT_SEARCH.style.paddingLeft = "8px";
            MY_FLAG_Container.firstElementChild.remove();
          }
          ALL_COUNTRY.style.display = "block";
          INPUT_PHONE.value = "";
        }

        const NAME_COUNTRYS = ALL_COUNTRY.getAttribute("data-country");
        const isVisible = NAME_COUNTRYS.toLowerCase().includes(
          e.currentTarget.value.toLowerCase()
        );
        if (isVisible) {
          ALL_COUNTRY.style.display = "block";
        }
      });
      INPUT_SEARCH.onblur = function (e) {
        if ((this.value = "")) MY_FLAG_Container.firstElementChild.remove();
        INPUT_SEARCH.style.paddingLeft = "8px";
      };
      INPUT_PHONE.addEventListener("keypress", (e) => {
        if (!e.key.match(/[0-9]/)) {
          e.preventDefault();
        }
      });
    });
  })
  .catch((Error) => {
    console.error(Error);
  });

// End Step 3 country & phone

let SINGUP_POSITION = Array.from(
  document.querySelectorAll(".signUp .signUp_container .pos_signUp span")
);

let next = "-400";
let previous = "400";

// Function Next Name Btn

let NAME_SECTION = document.querySelector(
  ".signUp .signUp_container .signUp_section .signUp_name"
);
let INPUT_FIRST_NAME = document.querySelector(
  ".signUp .signUp_container .signUp_section .signUp_name .info form #f_name"
);
let INPUT_LAST_NAME = document.querySelector(
  ".signUp .signUp_container .signUp_section .signUp_name .info form #l_name "
);

let BTN_NEXT_NAME = document.querySelector(
  ".signUp .signUp_container .signUp_section .signUp_name #next"
);

BTN_NEXT_NAME.onclick = function name() {
  if (INPUT_FIRST_NAME.value !== "" && INPUT_LAST_NAME.value !== "") {
    SINGUP_POSITION[0].classList.remove("active");
    this.parentElement.classList.remove("active");

    SINGUP_POSITION[1].classList.add("active");
    this.parentElement.nextElementSibling.classList.add("active");

    this.parentElement.style.transform = `translateX(${next}px)`;
    return NAME_SECTION.lastElementChild.classList.contains("Add_Info")
      ? NAME_SECTION.lastElementChild.remove()
      : "";
  } else {
    let icon = Object.assign(document.createElement("i"), {
      className: "fa-duotone fa-circle-xmark",
      style: "font-family:'Font Awesome 6 Free';",
    });
    let add_info = Object.assign(document.createElement("span"), {
      className: "Add_Info",
      style:
        "position: absolute;bottom: 70px;color: red;font-size: 13px;font-weight: 700;letter-spacing: 1px;",
      innerHTML: ` Please Add Your Information !`,
    });
    add_info.prepend(icon);
    NAME_SECTION.lastElementChild.classList.contains("Add_Info")
      ? NAME_SECTION.lastElementChild.remove()
      : "";
    NAME_SECTION.appendChild(add_info);
  }
};
// End Function Next Name Btn

//  Next And Previous Email Btn

let EMAIL_SECTION = document.querySelector(
  ".signUp .signUp_container .signUp_section .signUp_email "
);

let INPUT_EMAIL_EMAIL = document.querySelector(
  ".signUp .signUp_container .signUp_section .signUp_email .info form #email"
);
let INPUT_PASSWORD_EMAIL = document.querySelector(
  ".signUp .signUp_container .signUp_section .signUp_email .info form #password"
);
let INPUT_CURRENTPASS_EMAIL = document.querySelector(
  ".signUp .signUp_container .signUp_section .signUp_email .info form #current_password"
);

let BTN_PREVIOUS_EMAIL = document.querySelector(
  "  .signUp .signUp_container .signUp_section .signUp_email .btn #previous"
);
let BTN_NEXT_EMAIL = document.querySelector(
  "  .signUp .signUp_container .signUp_section .signUp_email .btn #next"
);
BTN_NEXT_EMAIL.onclick = function () {
  if (
    INPUT_EMAIL_EMAIL.value != "" &&
    INPUT_PASSWORD_EMAIL.value != "" &&
    INPUT_CURRENTPASS_EMAIL.value != ""
  ) {
    if (
      INPUT_PASSWORD_EMAIL.value.length >= 8 &&
      INPUT_PASSWORD_EMAIL.value == INPUT_CURRENTPASS_EMAIL.value
    ) {
      SINGUP_POSITION[1].classList.remove("active");
      this.parentElement.parentElement.classList.remove("active");

      SINGUP_POSITION[2].classList.add("active");
      this.parentElement.parentElement.nextElementSibling.classList.add(
        "active"
      );

      this.parentElement.parentElement.style.transform = `translateX(${next}px)`;
      return EMAIL_SECTION.lastElementChild.classList.contains("Add_Info") ||
        EMAIL_SECTION.lastElementChild.classList.contains("Invalid_Password")
        ? EMAIL_SECTION.lastElementChild.remove()
        : "";
    } else {
      let icon = Object.assign(document.createElement("i"), {
        className: "fa-duotone fa-circle-xmark",
        style: "font-family:'Font Awesome 6 Free';",
      });
      let add_info = Object.assign(document.createElement("span"), {
        className: "Invalid_Password",
        style:
          "position: absolute;bottom: 60px;color: red;font-size: 13px;font-weight: 700;letter-spacing: 1px;",
        innerHTML: ` Invalid Password !`,
      });
      add_info.prepend(icon);
      EMAIL_SECTION.lastElementChild.classList.contains("Invalid_Password") ||
      EMAIL_SECTION.lastElementChild.classList.contains("Add_Info")
        ? EMAIL_SECTION.lastElementChild.remove()
        : "";
      EMAIL_SECTION.appendChild(add_info);
    }
  } else {
    let icon = Object.assign(document.createElement("i"), {
      className: "fa-duotone fa-circle-xmark",
      style: "font-family:'Font Awesome 6 Free';",
    });
    let add_info = Object.assign(document.createElement("span"), {
      className: "Add_Info",
      style:
        "position: absolute;bottom: 70px;color: red;font-size: 13px;font-weight: 700;letter-spacing: 1px;",
      innerHTML: ` Please Add Your Information !`,
    });
    add_info.prepend(icon);
    EMAIL_SECTION.lastElementChild.classList.contains("Invalid_Password") ||
    EMAIL_SECTION.lastElementChild.classList.contains("Add_Info")
      ? EMAIL_SECTION.lastElementChild.remove()
      : "";
    EMAIL_SECTION.appendChild(add_info);
  }
};

BTN_PREVIOUS_EMAIL.onclick = function () {
  SINGUP_POSITION[1].classList.remove("active");
  this.parentElement.parentElement.classList.remove("active");

  SINGUP_POSITION[0].classList.add("active");
  this.parentElement.parentElement.previousElementSibling.classList.add(
    "active"
  );

  this.parentElement.parentElement.style.transform = `translateX(${previous}px)`;
};
// End Next And Previous Email Btn

//  Next And Previous Phone Btn

let INPUT_COUNTRY = document.querySelector(".signUp_phone .info form #search");
let INPUT_MyPHONE = document.querySelector(".signUp_phone .info form #phone");
let BTN_PREVIOUS_PHONE = document.querySelector(
  "  .signUp .signUp_container .signUp_section .signUp_phone .btn #previous"
);

let BTN_DONE_PHONE = document.querySelector(
  "  .signUp .signUp_container .signUp_section .signUp_phone .btn #done"
);

BTN_PREVIOUS_PHONE.onclick = function () {
  SINGUP_POSITION[2].classList.remove("active");
  this.parentElement.parentElement.classList.remove("active");

  SINGUP_POSITION[1].classList.add("active");
  this.parentElement.parentElement.previousElementSibling.classList.add(
    "active"
  );

  this.parentElement.parentElement.style.transform = `translateX(${previous}px)`;
};

BTN_DONE_PHONE.onclick = function () {
  let FirstName = INPUT_FIRST_NAME.value;
  let LasttName = INPUT_LAST_NAME.value;
  let MyEmail = INPUT_EMAIL_EMAIL.value;
  let MyPassword = INPUT_PASSWORD_EMAIL.value;
  let MyCountry = INPUT_COUNTRY.value;
  let MyPhone = INPUT_MyPHONE.value;
  if (INPUT_COUNTRY.value != "" && INPUT_MyPHONE.value != "") {
    let MyData = {
      Full_Name: `${FirstName} ${LasttName}`,
      Email: `${MyEmail}`,
      Password: `${MyPassword}`,
      Country: `${MyCountry}`,
      Phone: `${MyPhone}`,
    };
    setData(MyData);
    window.location.replace("../Login/login.html")
  }
};
// End Done And Previous Phone Btn

let arr = [];
function setData(MyData) {
  arr.push(MyData);
  window.localStorage.setItem("data", JSON.stringify(arr));
}
