const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginsubmit(e) {
  e.preventDefault();
  //const username = loginInput.value;
  console.log(loginInput.value);
}

function handleLinkClick(e) {
  //window.open(link);
  e.preventDefault();
  console.dir(e);
}

loginForm.addEventListener("submit", onLoginsubmit);
link.addEventListener("click", handleLinkClick);
