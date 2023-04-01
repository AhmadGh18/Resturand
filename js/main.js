var button = document.querySelector(".fa-solid ");
var ul = document.querySelector(".middel ul");
let header = document.querySelector("header");
let inpit = document.getElementById("chenagecolor");
button.addEventListener("click", () => {
  if (ul.style.display == "block") {
    ul.style.display = "none";
  } else {
    ul.style.display = "block";
  }
});

let images = document.querySelectorAll("img");
images.forEach((img) => {
  img.draggable = false;
});
inpit.oninput = () => {
  let colors = inpit.value;
  window.sessionStorage.setItem("color", colors);
  header.style.backgroundColor = window.sessionStorage.getItem("color");
};
header.style.backgroundColor = window.sessionStorage.getItem("color");
