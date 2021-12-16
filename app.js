const h1 = document.querySelector(".hello h1:first-child");

function handh1Click() {
  const clickedClass = "clicked";
  h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handh1Click);
