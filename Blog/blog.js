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

// Start Settings Post
let DOTS_PARAMETER = document.querySelectorAll(
  ".blog .blog_container .news .upload .upload_info .settings #dots"
);
DOTS_PARAMETER.forEach((dot) => dot.appendChild(settingsList()));
window.addEventListener("click", (e) => {
  if (e.target.id == "dots") {
    e.target.firstElementChild.classList.toggle("active");
  } else {
    let list = document.querySelectorAll(
      ".blog .blog_container .news .upload .upload_info .settings .settings_list"
    );
    list.forEach((list) => list.classList.remove("active"));
  }
});

function settingsList() {
  let LIST_SETTING = Object.assign(
    document.createElement("ul"),
    { className: "settings_list" },
    {
      style:
        "position:absolute;bottom: -150px;left: 50%;transform: translateX(-50%);width:200px; text-align:center;visibility:hidden;opacity:0;background: var(--background-trans-black);transition: var(--Main-transition);",
    }
  );
  let modification = Object.assign(
    document.createElement("li"),
    { className: "modifier" },
    { innerText: "Modifier" }
  );
  let remove = Object.assign(
    document.createElement("li"),
    { className: "delete" },
    { innerText: "Delete" }
  );
  let report = Object.assign(
    document.createElement("li"),
    { className: "report" },
    { innerText: "Report" }
  );
  LIST_SETTING.appendChild(modification);
  LIST_SETTING.appendChild(remove);
  LIST_SETTING.appendChild(report);
  return LIST_SETTING;
}
// End Settings Post

// Start Likes

let LIKE = document.querySelectorAll(".like");
let LIKE_NUMB = 1;

LIKE.forEach((like) => {
  like.addEventListener("click", (e) => {
    e.currentTarget.firstElementChild.classList.toggle("like");
    AddLike(e.currentTarget);
    e.currentTarget.lastElementChild.setAttribute(
      "data-like",
      e.currentTarget.lastElementChild.textContent
    );
  });
});

function AddLike(elemnt) {
  if (elemnt.firstElementChild.classList[2] == "like") {
    return (elemnt.lastElementChild.textContent =
      +elemnt.lastElementChild.textContent + +LIKE_NUMB);
  } else {
    return Number((elemnt.lastElementChild.textContent -= +LIKE_NUMB));
  }
}

// End Like

// Start Comment
let POST_COMMENT = document.querySelectorAll(".comments_text .send img");
let COMMENTS = document.querySelectorAll(".comment");

COMMENTS.forEach((comment) => {
  comment.addEventListener("click", (e) => {
    e.currentTarget.parentElement.nextElementSibling.classList.add("active");
    comment.children[1].innerText =
      e.currentTarget.parentElement.nextElementSibling.children[1].children.length;
    e.currentTarget.parentElement.nextElementSibling.children[0].children[0].focus();
  });
});

import { CreateElement } from "../js/myFrameWork.js";

POST_COMMENT.forEach((post) => {
  window.addEventListener("keyup", (key) => {
    if (
      key.keyCode == 13 &&
      key.target.id == "comment" &&
      key.target.value.length > 0 &&
      key.target.value != " "
    ) {
      CreateComment(
        key.target.value,
        key.composedPath()[2].children[1].children.length,
        key.target.nextElementSibling
      );
      key.target.value = "";

      key.composedPath()[3].children[0].children[1].children[1].innerText =
        key.composedPath()[2].children[1].children.length;
    }
  });

  post.addEventListener("click", (e) => {
    if (
      e.currentTarget.previousElementSibling.value.length > 0 &&
      e.currentTarget.previousElementSibling.value != " "
    ) {
      CreateComment(
        e.target.previousElementSibling.value,
        e.composedPath()[2].children[1].children.length,
        post
      );
      e.target.previousElementSibling.value = "";
    }

    e.composedPath()[3].children[0].children[1].children[1].innerText =
      e.composedPath()[2].children[1].children.length;
  });
});

function CreateComment(InputValue, Number_Comment, post) {
  let paragraph = CreateElement(
    "p",
    "",
    "",
    InputValue,
    "background: var(--trasparent-Color);padding: 10px;border-radius: 5px;color: var(--white-color);letter-spacing: 1px;margin:0 0 10px;"
  );
  paragraph.setAttribute("data-value", Number_Comment);

  let del_comment = CreateElement(
    "i",
    "fa-solid fa-trash",
    "",
    "",
    "float:right;cursor:pointer;transition:var(--Main-transition)"
  );
  paragraph.appendChild(del_comment);
  post.parentElement.nextElementSibling.appendChild(paragraph);
}

// Remove Comment

window.addEventListener("click", (e) => {
  if (e.target.classList[1] == "fa-trash") {
    let this_comment = e.target.parentElement;
    alert(this_comment);
  }
});

// Alert Remove Comment

function alert(this_comment) {
  let alert = Object.assign(
    document.createElement("div"),
    { className: "alert " },
    {
      style:
        " position:absolute;width: 100%;text-align: center;background: rgba(70, 51, 51, 0.93);color: var(--white-color);border-radius: 10px;padding: 20px;",
    }
  );
  let paragraph = Object.assign(
    document.createElement("h3"),
    { className: "confirm_parag" },
    { innerHTML: "Are You Sure !!" },
    { style: "color: var(--backHead-Color);" }
  );

  let confirm_container = Object.assign(document.createElement("div"), {
    className: "confirm_container All-center-flex gap-10",
  });

  let btn_yes = Object.assign(
    document.createElement("div"),
    { className: "btn btn_yes cursor-point" },
    { innerText: "YES" },
    {
      style:
        "padding: 5px 15px;background: var(--Main-BackColor);border-radius: 10px;font-size: 15px;",
    }
  );
  let btn_no = Object.assign(
    document.createElement("div"),
    { className: "btn btn_no cursor-point" },
    { innerText: "NO" },
    {
      style:
        "padding: 5px 15px;background: var(--Main-BackColor);border-radius: 10px;font-size: 15px;",
    }
  );
  confirm_container.appendChild(btn_yes);
  confirm_container.appendChild(btn_no);
  alert.appendChild(paragraph);
  alert.appendChild(confirm_container);
  this_comment.closest(".comments_text").appendChild(alert);

  let BTN_CONF = Array.from(
    document.querySelectorAll(".alert .confirm_container .btn")
  );
  BTN_CONF.forEach((btn_conf) => {
    btn_conf.addEventListener("click", (e) => {
      if (e.currentTarget.classList[1] == "btn_yes") {
        this_comment.remove();
        e.composedPath()[2].remove();
        e.composedPath()[4].children[0].children[1].children[1].innerText =
          e.composedPath()[3].children[1].children.length;
      } else {
        e.composedPath()[2].remove();
      }
    });
  });
}

// // End Comments

// // Start Shares

let SHARE = Array.from(document.querySelectorAll(".shares"));
SHARE.forEach((share) => {
  window.addEventListener("click", (e) => {
    e.target.classList[2] == "share_icon"
      ? e.target.parentElement.children[1].classList.toggle("active")
      : e.target.classList == "shares"
      ? e.target.lastElementChild.classList.toggle("active")
      : share.lastChild.classList.remove("active");
  });
  social(share);
});

function social(share) {
  let SOCIAL_SHARES = Object.assign(
    document.createElement("div"),
    {
      className: "social_container All-center-flex",
    },
    {
      style:
        " visibility: hidden; opacity: 0;   position: absolute;top: -50px;left: 30px;background: var(--HeadColor);width: fit-content;padding: 5px 20px;gap: 15px;border-radius: 5px;transition: var(--Main-transition);",
    }
  );
  let whatsapp = Object.assign(document.createElement("a"), {
    className: "whatsapp",
  });
  whatsapp.appendChild(
    Object.assign(
      document.createElement("i"),
      {
        className: "fa-brands fa-whatsapp",
      },
      { style: "width:30px; color: var(--Main-BackColor)" }
    )
  );

  let twitter = Object.assign(document.createElement("a"), {
    className: "twitter",
  });
  twitter.appendChild(
    Object.assign(
      document.createElement("i"),
      {
        className: "fa-brands fa-twitter",
      },
      { style: "width:30px ;color: var(--Main-BackColor);" }
    )
  );

  let facebook = Object.assign(document.createElement("a"), {
    className: "facebook",
  });
  facebook.appendChild(
    Object.assign(
      document.createElement("i"),
      {
        className: "fa-brands fa-facebook",
      },
      { style: "width:30px ;color: var(--Main-BackColor);" }
    )
  );
  SOCIAL_SHARES.appendChild(whatsapp);
  SOCIAL_SHARES.appendChild(twitter);
  SOCIAL_SHARES.appendChild(facebook);

  share.append(SOCIAL_SHARES);
}

// End Shares

// Start Modifier Post

let MODIFIER = Array.from(
  document.querySelectorAll(
    ".posting .upload .upload_info .settings #dots .settings_list .modifier"
  )
);
MODIFIER.forEach((modifier) => {
  modifier.addEventListener("click", (e) => {
    modifierAll(e.currentTarget.closest(".posting"));
    closeModifier();
  });
});
// Create Modifier
function modifierAll(POST_CONTAINER) {
  let modifier_container = CreateElement(
    "div",
    "modefier_container All-center-flex disp-direct-colum",
    "",
    "",
    "position: absolute;background: #202120;z-index:1;height: fit-content;max-width: 550px; width: 100%;top: 50%;left: 50%;transform: translate(-50%, -50%);padding:20px 0;border-radius: 10px;box-shadow: #38d1c933 0 0 8px 1px;"
  );
  let close_change = CreateElement(
    "div",
    "btn_close All-center-flex cursor-point",
    "",
    "X",
    "border-radius: 50%;background: var(--Main-BackColor);color: var(--white-color);transition: var(--Main-transition);width: 30px;height: 30px;position: absolute;top: -15px;right: -15px;font-weight: 600;"
  );
  let btn_submit = CreateElement(
    "a",
    "submit_change cursor-point",
    "",
    "Done",
    "color: var(--white-color);background: var(--Second-Mian-color);transition: var(--Main-transition);padding: 10px 20px;margin: 10px 0px;border-radius: 10px;letter-spacing: 2px;font-size: 15px;"
  );

  POST_CONTAINER.appendChild(modifier_container);
  modifier_img(modifier_container);
  Add_Title(modifier_container);
  modifier_text(modifier_container);
  modifier_container.appendChild(btn_submit);
  modifier_container.appendChild(close_change);
}
// Close Modifier
function closeModifier() {
  let btn_close = document.querySelector(".modefier_container .btn_close");
  btn_close.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
}

// IMG modifier
function modifier_img(modifier_container) {
  let img_modfier = Object.assign(
    document.createElement("div"),
    { className: "new_img All-center-flex" },
    {
      style:
        "position:relative;border: 2px dashed var(--section-color);max-width: 400px; width: 100%;height:250px",
    }
  );
  let input_file = Object.assign(
    document.createElement("input"),
    { type: "file" },
    { className: "import_img cursor-point" },
    { style: "position:absolute;width:100%;height:100%;opacity:0;z-index: 1;" }
  );
  input_file.accept = "image/*";
  let icon_upload = Object.assign(
    document.createElement("img"),
    { src: "../IMG/components/upload img.png" },
    { className: "upload" },
    { style: "position:absolute;width:50px" }
  );

  img_modfier.append(input_file);
  img_modfier.append(icon_upload);
  modifier_container.appendChild(img_modfier);
}

// New Title
function Add_Title(modifier_container) {
  let title_container = CreateElement(
    "div",
    "title_container All-center-flex disp-direct-colum",
    "",
    "",
    "width: 80%; height:30px;margin: 30px 0;position:relative"
  );
  let heading = CreateElement(
    "h5",
    "name_heading",
    "",
    "New Titel",
    "align-self: start;margin:10px 25px ;letter-spacing: 2px;color: var(--blueSiel-Color);"
  );

  let input_title = CreateElement(
    "input",
    "input_new_title",
    "New Title",
    "",
    "width: 100%;height: 100%;padding: 10px;outline: none;border: none;border-radius: 10px;background: var(--trasparent-Color);color: white;font-size: 15px;letter-spacing: 1px;"
  );

  title_container.append(heading);
  title_container.append(input_title);
  modifier_container.appendChild(title_container);
}

// New Paragraph
function modifier_text(modifier_container) {
  let text_container = CreateElement(
    "div",
    "text_container All-center-flex disp-direct-colum",
    "",
    "",
    "width: 80%; height:200px;"
  );
  let heading = CreateElement(
    "h5",
    "new_text",
    "",
    "New Text",
    "align-self: start;margin:10px 25px ;letter-spacing: 2px;color: var(--blueSiel-Color);"
  );

  let input_text = CreateElement(
    "textarea",
    "input_new_text",
    "New Text",
    "",
    "width: 100%;height: 100%;resize:none;padding: 10px;outline: none;border: none;border-radius: 10px;background: var(--trasparent-Color);color: white;font-size: 15px;letter-spacing: 1px;"
  );

  text_container.append(heading);
  text_container.append(input_text);
  modifier_container.appendChild(text_container);
}

// End Modifier Post

// modifier Title And Text

window.addEventListener("click", (e) => {
  if (e.target.classList[0] == "submit_change") {
    modifierTitle(e);
    modifierText(e);
    AddImg(e);
  }
});

// New Img
function AddImg(All_toSubmit) {
  let post = All_toSubmit.composedPath()[2].children[0].firstElementChild;
  let Input_Img =
    All_toSubmit.target.parentElement.firstChild.firstElementChild;
  if (Input_Img.files.length != 0) {
    let reader = new FileReader();
    reader.onload = function () {
      post.style.backgroundImage = `url(${reader.result})`;
      All_toSubmit.target.parentElement.remove();
    };

    reader.readAsDataURL(Input_Img.files[0]);
  }
}

function modifierTitle(All_toSubmit) {
  let title =
    All_toSubmit.composedPath()[2].children[1].lastChild.previousElementSibling
      .firstElementChild;

  let input_title =
    All_toSubmit.target.parentElement.children[1].children[1].value;

  if (input_title != "" && input_title != " ") {
    title.innerText = input_title;
    All_toSubmit.target.parentElement.remove();
  } else {
    CheckTitle(All_toSubmit);
  }
}

function modifierText(All_toSubmit) {
  let post =
    All_toSubmit.composedPath()[2].children[1].lastChild.previousElementSibling
      .lastElementChild;
  let input_text =
    All_toSubmit.target.parentElement.children[2].children[1].value;
  if (input_text != "" && input_text != " ") {
    post.innerText = input_text;
    All_toSubmit.target.parentElement.remove();
  } else {
    CheckText(All_toSubmit);
  }
}

function CheckText(All_toSubmit) {
  let Valid_Text = CreateElement(
    "span",
    "valid_text",
    "",
    "Empty Input",
    "color:red;margin:5px;font-size: 12px;letter-spacing: 1px;"
  );
  let Text_Container = All_toSubmit.target.parentElement.children[2];
  if (Text_Container.lastElementChild.classList != "valid_text") {
    Text_Container.appendChild(Valid_Text);
  }
}

function CheckTitle(All_toSubmit) {
  let Valid_Title = CreateElement(
    "span",
    "valid_title",
    "",
    "Empty Input",
    "color:red;margin:5px;font-size: 12px;letter-spacing: 1px;"
  );
  let Title_Container = All_toSubmit.target.parentElement.children[1];
  if (Title_Container.lastElementChild.classList != "valid_title") {
    Title_Container.appendChild(Valid_Title);
  }
}

// End Modifier Text
