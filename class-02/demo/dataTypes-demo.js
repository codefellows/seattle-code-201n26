'use strict';
// 'use strict' will mangage scope
// constrain 'this'
// help us learn more specific JavaScript


console.log('hi');

// let & var — very similar
// let mangage scope better

// these values will evaluate to true
let cake = 'birthday cake';
let slices = 14;
let candles = '28';
let hasChocolate = true;

// these values will evaluate to false
let allGone = false;
let iceCreamOntheSide;
let hasSprinkles = null;
let whoseBirthday = '';

console.log(typeof cake);
// cake = 542;
// console.log(typeof cake);

// conditionals (if/else)

// let username = prompt('What is your name?');

// if (username) {
//   //console.log('This was true');
//   alert('hi ' + username);
// } else {
//   //console.log('This was false');
//   console.log('Please tell me you name')
// }


// concatenation
// console.log(slices + candles);

console.log(typeof slices);
slices = slices + parseInt(candles);
console.log(slices);
console.log(typeof slices);

console.log('Marianne');
console.log(parseInt('Marianne'));
console.log(typeof NaN);

// NaN = Not a Number
