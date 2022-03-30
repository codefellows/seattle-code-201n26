"use strict";

// target our order form from the html
const orderForm = document.getElementById("orderForm");
const orders = document.getElementById("orders");

// constructor function to create a basic drink
function Coffee(name, size, milk, isHot, drinkType) {
  this.name = name;
  this.size = size;
  this.isHot = isHot;
  this.drinkType = drinkType;
  this.milk = milk;

  // add every drink that gets created into an array
  Coffee.drinks.push(this);

  let coffeeDrinks = JSON.stringify(Coffee.drinks);
  localStorage.setItem("coffeeStored", coffeeDrinks);
}

// set the global array to empty
// if (JSON.parse(localStorage.getItem("coffeeStored"))) {
//   Coffee.drinks = JSON.parse(localStorage.getItem("coffeeStored"));
// } else {
//   Coffee.drinks = [];
// }

let stored = JSON.parse(localStorage.getItem("coffeeStored"));
if (stored) {
  Coffee.drinks = stored;
} else {
  Coffee.drinks = [];
}

// Coffee.drinks = JSON.parse(localStorage.getItem("coffeeStored")) ??
renderOrders();

// event handler function to run everytime the form is submitted
function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target);

  // get all the values from the form
  const drink = event.target;
  const name = drink.name.value;
  const size = drink.size.value;
  const isHot = drink.isHot.value;
  const dType = drink.drinkType.value;
  const milk = drink.milk.value;

  new Coffee(name, size, milk, isHot, dType);

  // update the previous orders with the new order
  renderOrders();
}

function renderOrders() {
  // clear all my current uls to prevent duplicate information
  orders.textContent = "";

  // go through the array and output the details of each drink in the array
  for (let i = 0; i < Coffee.drinks.length; i++) {
    const drinkLI = document.createElement("li");
    let temp;
    if (Coffee.drinks[i].isHot === "on") {
      temp = "cold";
    } else {
      temp = "hot";
    }
    drinkLI.textContent = `${Coffee.drinks[i].name} ordered a ${temp} ${Coffee.drinks[i].size} ${Coffee.drinks[i].drinkType} with ${Coffee.drinks[i].milk} milk`;
    orders.appendChild(drinkLI);
  }
}

// Add an event listener to the submit button
orderForm.addEventListener("submit", handleSubmit);
