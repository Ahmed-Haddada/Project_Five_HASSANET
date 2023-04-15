import { CreateElement } from "../js/myFrameWork.js";
let INPUT = Array.from(
  document.querySelectorAll(".login .box_login input:not(:last-child)")
);

INPUT.forEach((input) => {
  input.addEventListener("focus", (e) => {
    e.currentTarget.previousElementSibling.style.cssText =
      "top: 14px;left: 20px;background: var(--white-color);letter-spacing: 3px;";
  });
  input.addEventListener("blur", (e) => {
    if (input.value == "") {
      e.currentTarget.previousElementSibling.style.cssText =
        "top: 39px;  left: 8px;";
    }
  });
});

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  CheckInput(e.currentTarget.children[1], e.currentTarget.children[3]);
});

let GetData = JSON.parse(window.localStorage.getItem("data"));

const result = function Empty_Invalid_elemnt() {
  let all = CreateElement(
    "div",
    "All_Error",
    "",
    "",
    "position: relative;width: 200px;height: 36px; left: 20px;"
  );
  let InvalidInfo = CreateElement(
    "span",
    "InvalidInfo",
    "",
    "Invalid Email Or Password",
    "display:none; color: white; width: inherit; margin: 5px; font-size: 12px; position: absolute;letter-spacing: 1px; text-align: center; background: red; padding: 10px;"
  );
  let EmptyInfo = CreateElement(
    "span",
    "EmptyInfo",
    "",
    "Please Add Information",
    "display:none;color: white; width: inherit; margin: 5px; font-size: 12px; position: absolute;letter-spacing: 1px; text-align: center; background: red; padding: 10px;"
  );
  all.appendChild(InvalidInfo);
  all.appendChild(EmptyInfo);
  return all;
};

form.appendChild(result());

function CheckInput(inputEmail, inputPassword) {
  let email_input = inputEmail.value;
  let password_input = inputPassword.value;

  let InvalidInput = document.querySelector("form .All_Error").children[0];
  let EmptyInput = document.querySelector("form .All_Error").children[1];
  if (email != "" && password != "") {
    GetData.forEach((info) => {
      console.log(email_input == info.Email);
      if (!(email_input == info.Email && password_input == info.Password)) {
        InvalidInput.classList.add("active");
        EmptyInput.classList.remove("active");
      } else {
        EmptyInput.classList.remove("active");
        InvalidInput.classList.remove("active");
        window.location.replace("../index.html");
      }
    });
  } else {
    EmptyInput.classList.add("active");
   
  }
}
