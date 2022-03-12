"use strict";

let greetButton = document.getElementById("greet");
let nameInput = document.getElementById("name");
let numberInput = document.getElementById("favNum");

greetButton.addEventListener("click", function () {
  let name = nameInput.value;
  let favNum = numberInput.value;

  let greeting = `Hello, ${name}! Your favorite number is ${favNum}!`;

  document.getElementById("greeting").textContent = greeting;
});
