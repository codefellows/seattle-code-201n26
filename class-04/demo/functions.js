'use strict';

// functions

// // invoke a function (can be invoked before or after its declaration)
// birthdayGreeting();

// declare a function
function birthdayGreeting(name, age, cakeFlavor = 'vanilla', from = 'the staff at Dunder Mifflin') {
  // console.log(`Happy Birthday ${name}!`);
  // console.log('We hope that your day is filled with joy and lots of good cake');
  // console.log(`${name}, you one are the best!`)
  // // return  `${name}, you are the best`;
  // console.log('Best wishhes from the team at the Dunder Mifflin Paper Company');
  console.log(`Happy Birthday ${name}! We're putting ${age} candles on your ${cakeFlavor} cake. Best wishes, ${from}`);
}

birthdayGreeting('Stanley', 30, 'Chocolate');
birthdayGreeting('Dwight', 55, 'beat');
birthdayGreeting('Jim', 30, 'pineapple', 'Pam');

// // if the function returns a value you can assign it to a variable:
// let message = birthdayGreeting('Pam');
// console.log(message);

// // we can pass values from other variables as arguemnts:
// let username = prompt('What is your name?');
// birthdayGreeting(username);
// let staffMember = 'Phylis';
// birthdayGreeting(staffMember);


// DRY
// DON'T Repeat Yourself!


// A Perameter vs an Argument
// Declare a function with a parameter (declare a variable to be used inside the function)

// Invoke a function with an arguement (ex: 'Pam')

// // Another way to declare a function
// // declare a function
// let birthdayGreetingAnotherWay = function() {
//   console.log('Happy Birthday');
// };

// // invoke a function (can only be invoked after its declaration)
// birthdayGreetingAnotherWay();
