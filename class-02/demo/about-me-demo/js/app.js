'use strict'

// console.log('hi');

// let condition1 = true;
// let condition0 = false;
// let condition2 = true;
// // console.log(typeof condition);


// if (!condition1 || condition0) {
//   // if the condition is true, do this:
//   console.log('this evaluated to true.');
// } else {
//   console.log('this evaluated to false');
// }

/*
&& — is the "logical and"
one of false with an "and" and it will not run

|| — is the "logical or"
one true and it will run

! — is the "logical not"
it reverses the value

*/

let username = prompt('What is your name?').toUpperCase();
alert('Hi ' + username + '!');

let doesAnyoneTalkAboutBruno = prompt('Do you talk about Bruno?').toLowerCase();
if (doesAnyoneTalkAboutBruno === 'yes' || doesAnyoneTalkAboutBruno === 'y') {
  console.log('Yes, you do, but you pretend you don\'t.');
} else if (doesAnyoneTalkAboutBruno === 'no' || doesAnyoneTalkAboutBruno === 'n') {
  console.log('No? Yes, you do, you\'re in denial');
} else {
  console.log('You need to answer with a \'yes\' or a \'no\'');
}
