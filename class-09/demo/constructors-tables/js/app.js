"use strict";

let addButton = document.getElementById("add_button");

// addButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("Clicking ", event);
// });

let musicianForm = document.getElementById("musician_form");
musicianForm.addEventListener("submit", function (event) {
  event.preventDefault();

  /// same as below
  console.log("Submitting ", event);

  let form = event.target;

  let first = form.first;
  let last = form.last;
  let nationality = form.nationality;

  if (first.value == "") {
    return;
  }

  if (nationality.value == "") {
    return;
  }

  let musician = new Musician(first.value, last.value, nationality.value);
  musician.render();

  first.value = "";
  last.value = "";
  nationality.value = "";
});

let musiciansTable = document.querySelector("#musicians tbody");

function Musician(first_param, last_param, nationality_param) {
  // this === {}
  this.first = first_param;
  this.last = last_param;
  // this === {first: first_param, last: last_param}
  this.nationality = nationality_param;

  // this.render = function() {};
}

Musician.prototype.render = function () {
  let row = document.createElement("tr");
  musiciansTable.appendChild(row);

  let tdFirst = document.createElement("td");
  let tdLast = document.createElement("td");
  let tdNationality = document.createElement("td");

  row.appendChild(tdFirst);
  row.appendChild(tdLast);
  row.appendChild(tdNationality);

  tdFirst.textContent = this.first;
  tdLast.textContent = this.last;
  tdNationality.textContent = this.nationality;
};

let musiciansArray = [
  new Musician("Shania", "Twain", "Canadian"),
  new Musician("John", "Lenon", "British"),
  new Musician("Eric", "Clapton", "American"),
  new Musician("Ringo", "Starr", "British"),
  new Musician("Madonna", "", "American"),
  new Musician("Billy", "Joel", "American"),
];

// let first = prompt("Musician first name: ");
// let last = prompt("Musician last name: ");
// let nationality = prompt("Musician nationality: ");
// let newMusician = new Musician(first, last, nationality);
// musiciansArray.push(newMusician);

console.log(musiciansArray);

for (let i = 0; i < musiciansArray.length; i++) {
  let musician = musiciansArray[i];

  musician.render();
}
