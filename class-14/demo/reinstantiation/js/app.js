"use strict";

let catsList = document.getElementById("catlist");

let allCats = [];
function Cat(name) {
  this.name = name;
  allCats.push(this);
}

Cat.prototype.render = function () {
  let li = document.createElement("li");
  li.textContent = this.name;
  catsList?.appendChild(li);
};

Cat.showAll = function () {
  for (let i = 0; i < allCats.length; i++) {
    let cat = allCats[i];
    cat.render();
  }
};

Cat.saveAll = function () {
  let stringCats = JSON.stringify(allCats);
  localStorage.setItem("allCats", stringCats);
};

Cat.loadAll = function () {
  allCats = [];
  let loadedCats = JSON.parse(localStorage.getItem("allCats")) ?? [];
  for (let i = 0; i < loadedCats.length; i++) {
    let name = loadedCats[i].name;
    new Cat(name);
  }
};
