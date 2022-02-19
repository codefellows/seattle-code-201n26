'use strict';

// ARRAYS
// - a container that holds values
// - a data structure
// - a list
// - a collection

// counts starting at 0:
// 0. 1. 2. 3.

//.                0.        1.       2.      3.      4.     5
let parksNRec = ['Leslie', 'April', 'Ron', 'Andy', 'Ann', 'Tom'];

// let names = 'parksNRec: ' + parksNRec;
// console.log('parksNRec: ' + parksNRec);
// console.log(typeof names);

// console.log(parksNRec[2]);

let waffles = ['JJ\'s', true, [228, 343], 'bacon'];

// console.log(waffles);
// console.log(typeof waffles);
// console.log(Array.isArray(waffles));

// console.log(parksNRec.length);

parksNRec[6] = 'Donna';
parksNRec.push('Tammy', 'Chris', 'Jerry');

// FOR LOOPS

//.    Inistantitate  - evaluate - increment
for (let i = 0; i < parksNRec.length; i++) {
  //console.log(i);
  // console.log('Item ' + i + ' is ' + parksNRec[i]);
  // console.log(`Item ${i} is ${parksNRec[i]}`);

  if (parksNRec[i] !== 'Ron') {
    console.log(`Hello ${parksNRec[i]}`);
  } else {
    console.log(`I'm ${parksNRec[i]}`);
  }

};


// // These two blocks do the same thing:
// let i = 0;
// i = i + 1;
//
// let i = 0;
// i++
