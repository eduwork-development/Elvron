import "./style.css";

var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (this.window.pageYOffset > 200) {
    nav.classList.add("bg-black");
  } else {
    nav.classList.remove("bg-black");
  }
});
