'use strict';

let numbers = [3, 4, 5, 6, 7, 8, 9, 10];
let ages = [12, 24, 31, 46, 57];

// function that takes in an array
// it then adds the first 3 items
// return a different array
// return array index 0: a message (string)
// return array index 1: the sum of the 3 elements

let adder = function(array) {
  let sum = array[0] + array[1] + array[2];
  let message = `our sum is ${sum}.`;
  //.        0,     1
  return [message, sum];
}

let result = adder(numbers)[1];
console.log(result);

let result2 = adder(ages)[1];
console.log(result2);

let total = result + result2;
console.log(total);
