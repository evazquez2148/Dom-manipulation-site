const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const random = getRandom();
  document.body.style.backgroundColor = colors[random];
  color.textContent = colors[random];
});

function getRandom() {
  return Math.trunc(Math.random() * colors.length);
}
