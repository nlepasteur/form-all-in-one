const passwordInput = document.querySelector(".passwordInput");
const strengthNodes = document.querySelector(".strength").children;
const ul = document.querySelector("ul");
const [li] = new Array(ul.children);
console.log(li[0].classList);
const password = document.querySelector(".showPassword");

passwordInput.addEventListener("input", validatePassword);
password.addEventListener("mouseenter", showPassword);
password.addEventListener("mouseleave", showPassword);

let strength = 0;
let validation = [];
let visiblePassword = false;

function validatePassword(e) {
  console.log("called");
  const password = e.target.value;

  validations = [
    password.length > 5,
    password.search(/[A-Z]/) > -1,
    password.search(/[0-9]/) > -1,
    password.search(/[$&+,:;=?@#]/) > -1,
  ];

  console.log("validations: ", validations);

  strength = validations.reduce((acc, cur) => acc + cur);

  for (let i = 0; i < validations.length; i++) {
    if (strength > i) strengthNodes[i].classList.add("bar-show");
    else strengthNodes[i].classList.remove("bar-show");

    if (validations[i] && !li[i].textContent.includes("OK"))
      li[i].textContent = `OK => ${li[i].textContent}`;
    else if (!validations[i])
      li[i].textContent = li[i].textContent.replace("OK => ", "");
  }
}

function showPassword(e) {
  visiblePassword = !visiblePassword;
  if (visiblePassword) {
    password.textContent = "hide";
    e.target.parentNode.querySelector(".input").setAttribute("type", "text");
  } else {
    password.textContent = "show";
    e.target.parentNode
      .querySelector(".input")
      .setAttribute("type", "password");
  }
}
