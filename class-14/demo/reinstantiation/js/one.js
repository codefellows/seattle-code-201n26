"use strict";

Cat.loadAll();
Cat.showAll();

function handleSubmit(event) {
  event.preventDefault();
  let catName = event.target.kitty.value;
  let newCat = new Cat(catName);
  newCat.render();
  Cat.saveAll();
}

document.getElementById("catform")?.addEventListener("submit", handleSubmit);

// TODO: Handle removing cat from array
