"use strict";

function add(x, y) {
  console.log("now running add");
  return x + y;
}

function multiply(x, y) {
  console.log("now running multiply");
  let product = 0;
  for (let i = 0; i < y; i++) {
    product = add(product, x);
  }
  return product;
}

function report(x, y) {
  console.log("now running report");
  const sum = "The sum of " + x + " and " + y + " is " + add(x, y);
  const product = "The product of " + x + " and " + y + " is " + multiply(x, y);
  return "The sum is " + sum + ". The product is " + product;
}

report(2, 4);
