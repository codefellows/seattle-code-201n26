'use strict';

// DATATYPES
// - strings
// - Boolean
// - numbers
// - undefined
// - null
// - arrays


// Objects!!!

let axelArray = [
  'Axel',
  6,
  'yellow tabby',
  'short hair',
  true,
  true
];

console.log(axelArray.length);
console.log(axelArray['length']);
console.log(axelArray[2]);

let axelObject = {
  name: 'Axel',
  age: 6,
  breed: 'yellow tabby',
  hairLength: 'short hair',
  spayedOrNeutered: true,
  vaccinated: {
    distemper: true,
    rabies: true,
    felv: false,
  },
  'favorite cat food': 'meow mix',
  speak: function() {
    console.log('meow!');
  },
  about: function() {
    return `My cat ${this.name} is a ${this.breed}. he is ${this.age} years old.`
  }
};

let aboutValue = axelObject.about();
console.log(aboutValue);

console.log(axelObject);
console.log(axelObject.breed);
console.log(axelObject['breed']);
console.log(axelObject['favorite cat food']);

console.log(`My cat ${axelArray[0]} is a ${axelArray[2]}. he is ${axelArray[1]} years old.`);

console.log(`My cat ${axelObject.name} is a ${axelObject.breed}. he is ${axelObject.age} years old.`);

axelObject.favToy = ['lazer pointer', 'stuff mouse'];
console.log(axelObject);


// axelObject.hunger = prompt('Are you hungery');
console.log(axelObject.hunger);
console.log(axelObject);
axelObject.speak();

console.log(typeof console);

axelObject.log = function(logThis) {
  console.log(logThis);
}
axelObject.log('I\'m hungery!!!!');
axelObject.log('nap now!');
