"use strict";
//initial count
let count = 0;

//slect value and button
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const style = e.currentTarget.classList;
    if (style.contains("decrease")) {
      count--;
    } else if (style.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    switch (true) {
      case count > 0:
        value.style.color = "green";
        break;
      case count < 0:
        value.style.color = "red";
        break;
      default:
        value.style.color = "#222";
        break;
    }
    value.textContent = count;
  });
});
