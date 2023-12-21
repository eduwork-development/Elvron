import "./style.css";

var nav = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (this.window.pageYOffset > 200) {
    nav.classList.add("bg-black");
  } else {
    nav.classList.remove("bg-black");
  }
});

const eduworkhover = document.getElementById("eduworkhover");
const hisochover = document.getElementById("hisochover");
const upscalehover = document.getElementById("upscalehover");
const siskohover = document.getElementById("siskohover");
const mydoithover = document.getElementById("mydoithover");

const defaulthoverkonten = document.getElementById("defaulthoverkonten");
const eduworkhoverkonten = document.getElementById("eduworkhoverkonten");
const hisochoverkonten = document.getElementById("hisochoverkonten");
const upscalehoverkonten = document.getElementById("upscalehoverkonten");
const siskohoverkonten = document.getElementById("siskohoverkonten");
const mydoithoverkonten = document.getElementById("mydoithoverkonten");

eduworkhover.classList.add("bg-gray-200");

eduworkhover.addEventListener("mouseover", function () {
  eduworkhoverkonten.classList.remove("hidden");
  defaulthoverkonten.classList.remove("flex");
  defaulthoverkonten.classList.add("hidden");
  hisochoverkonten.classList.add("hidden");
  upscalehoverkonten.classList.add("hidden");
  siskohoverkonten.classList.add("hidden");
  mydoithoverkonten.classList.add("hidden");
  eduworkhover.classList.add("bg-gray-200");
  hisochover.classList.remove("bg-gray-200");
  upscalehover.classList.remove("bg-gray-200");
  siskohover.classList.remove("bg-gray-200");
  mydoithover.classList.remove("bg-gray-200");
});
// eduworkhover.addEventListener("mouseout", function () {
//   eduworkhoverkonten.classList.add("hidden");
//   defaulthoverkonten.classList.add("flex");
//   defaulthoverkonten.classList.remove("hidden");
// });

hisochover.addEventListener("mouseover", function () {
  hisochoverkonten.classList.remove("hidden");
  defaulthoverkonten.classList.remove("flex");
  defaulthoverkonten.classList.add("hidden");
  eduworkhoverkonten.classList.add("hidden");
  upscalehoverkonten.classList.add("hidden");
  siskohoverkonten.classList.add("hidden");
  mydoithoverkonten.classList.add("hidden");
  eduworkhover.classList.remove("bg-gray-200");
  hisochover.classList.add("bg-gray-200");
  upscalehover.classList.remove("bg-gray-200");
  siskohover.classList.remove("bg-gray-200");
  mydoithover.classList.remove("bg-gray-200");
});
// hisochover.addEventListener("mouseout", function () {
//   hisochoverkonten.classList.add("hidden");
//   defaulthoverkonten.classList.add("flex");
//   defaulthoverkonten.classList.remove("hidden");
// });

upscalehover.addEventListener("mouseover", function () {
  upscalehoverkonten.classList.remove("hidden");
  defaulthoverkonten.classList.remove("flex");
  defaulthoverkonten.classList.add("hidden");
  eduworkhoverkonten.classList.add("hidden");
  hisochoverkonten.classList.add("hidden");
  siskohoverkonten.classList.add("hidden");
  mydoithoverkonten.classList.add("hidden");
  eduworkhover.classList.remove("bg-gray-200");
  hisochover.classList.remove("bg-gray-200");
  upscalehover.classList.add("bg-gray-200");
  siskohover.classList.remove("bg-gray-200");
  mydoithover.classList.remove("bg-gray-200");
});
// upscalehover.addEventListener("mouseout", function () {
//   upscalehoverkonten.classList.add("hidden");
//   defaulthoverkonten.classList.add("flex");
//   defaulthoverkonten.classList.remove("hidden");
// });

siskohover.addEventListener("mouseover", function () {
  siskohoverkonten.classList.remove("hidden");
  defaulthoverkonten.classList.remove("flex");
  defaulthoverkonten.classList.add("hidden");
  eduworkhoverkonten.classList.add("hidden");
  upscalehoverkonten.classList.add("hidden");
  hisochoverkonten.classList.add("hidden");
  mydoithoverkonten.classList.add("hidden");
  eduworkhover.classList.remove("bg-gray-200");
  hisochover.classList.remove("bg-gray-200");
  upscalehover.classList.remove("bg-gray-200");
  siskohover.classList.add("bg-gray-200");
  mydoithover.classList.remove("bg-gray-200");
});
// siskohover.addEventListener("mouseout", function () {
//   siskohoverkonten.classList.add("hidden");
//   defaulthoverkonten.classList.add("flex");
//   defaulthoverkonten.classList.remove("hidden");
// });

mydoithover.addEventListener("mouseover", function () {
  mydoithoverkonten.classList.remove("hidden");
  defaulthoverkonten.classList.remove("flex");
  defaulthoverkonten.classList.add("hidden");
  eduworkhoverkonten.classList.add("hidden");
  upscalehoverkonten.classList.add("hidden");
  siskohoverkonten.classList.add("hidden");
  hisochoverkonten.classList.add("hidden");
  eduworkhover.classList.remove("bg-gray-200");
  hisochover.classList.remove("bg-gray-200");
  upscalehover.classList.remove("bg-gray-200");
  siskohover.classList.remove("bg-gray-200");
  mydoithover.classList.add("bg-gray-200");
});
// mydoithover.addEventListener("mouseout", function () {
//   mydoithoverkonten.classList.add("hidden");
//   defaulthoverkonten.classList.add("flex");
//   defaulthoverkonten.classList.remove("hidden");
// });
