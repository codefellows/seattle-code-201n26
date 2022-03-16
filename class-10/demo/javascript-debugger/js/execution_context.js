"use strict";

//function scope
function scopyFunc(doggy) {
  function privateFunc() {
    let privateVar = "woof!";
    console.log(privateVar);
    return doggy + " says " + privateVar;
  }
  console.log("doggy is only defined inside scopyFunc: " + doggy);
  return privateFunc();
}

console.log(scopyFunc("Fido"));
// privateFunc();

// //object context
// let teacherBot = {
//   first: "Dan",
//   last: "Schwartz",
//   age: 35,
//   speak: function () {
//     return "Hello humanoid, I am " + this.first + " " + this.last;
//   },
// };

// console.log(teacherBot.age); //35
// console.log(teacherBot.speak); //'Hello humanoid, I am Dan Schwartz'
// console.log(age); //age is not defined
