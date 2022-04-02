let services = [];

const washBtn = document.getElementById("wash");
const mowBtn = document.getElementById("mow");
const weedBtn = document.getElementById("weeds");
const task = document.getElementById("task");
const amounts = document.getElementById("amounts-el");


washBtn.addEventListener("click", function () {
  amounts.innerHTML += washBtn.innerHTML + " "
})