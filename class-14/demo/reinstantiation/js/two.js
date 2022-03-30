"use strict";

// TODO: On #catbutton click, load cats from local storage and render them
function loadAndShowCats() {
  Cat.loadAll();
  Cat.showAll();
}

document
  .getElementById("catbutton")
  ?.addEventListener("click", loadAndShowCats);
