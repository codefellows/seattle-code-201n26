'use strict';

// let string = 'this is a string';
// let nums = new Array(10).fill(false);

// console.log(nums);
// console.log(typeof nums);
// console.log(Array.isArray(string));


let months = ['March', 'April', 'May', 'June', 'July'];

// months[8] = 'November';
console.log(months);

console.log(months[5]);

// Array Methods
// functions that can only be performed on specific types of data. In this case Arrays


//.pop()
// remove the last item on the end of an array
let poppedItem = months.pop();
console.log(months);
console.log('poppedItem: ', poppedItem);

// .shift()
// removes the first element from an array. It reorders the indexes
let shifttedItem = months.shift();
console.log(months);
console.log('shifttedItem: ', shifttedItem);

//.push()
// adds an element to the end of an array
months.push('July');
console.log(months);
months.push('August', 'September', 'October');
console.log(months);

// .unshift()
// insert an element into the front of an array. It also reorders the index
months.unshift('February');
console.log(months);

// .splice()
// syntax: splice(<start-index>, <number-of-items-to-remove>, <what-if-anything-to-add>)
months.splice(1, 0, 'March');
console.log(months);

months.unshift('January');
months.push('November', 'December');
console.log(months);
