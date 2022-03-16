"use strict";

// Find the infinite loop!

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(i, j, i * j);
  }
}

/*
 Uncomment each block of error code, and determine what is going wrong.
*/

// const someObj = {
//   a: 10,
//   b: 9,
// };

// someObj.push(20);

//-------

// const price = 10;
// price.toFixed(25);

// const impossibleArray = new Array(-1);
