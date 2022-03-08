'use strict';

/// Using a 2d array
let numberArray = [
    [1900, 1920, 1929],
    [1894, 1921, 1965],
    [1925, 1946, 2014]
];

console.log(numberArray[1][1]); // Log "1921" to the console
console.log(numberArray[1][0]); // Log "1894" to the console
console.log(numberArray[0][2]); // Log "1929" to the console

// Log all numbers to the console, by column 
for (let i = 0; i < numberArray.length; i++) {
    for (let j = 0; j < numberArray.length; j++) {
        console.log(`numberArray[${j}][${i}]: `, numberArray[j][i]);
        // Notice that this code is using j first, then i
    }
}

// build multiplicationArray - an array with arrays for a multiplication table
let muliplicationArray = [];
for (let i = 1; i <= 12; i++) {
    let multiplicationRow = [];

    for (let j = 1; j <= 12; j++) {
        let product = i * j;
        multiplicationRow.push(`${i}*${j} = ${product}`);
    }

    muliplicationArray.push(multiplicationRow);
}


console.log(muliplicationArray);


// create DOM table for muliplicationArray
let table = document.querySelector('table#multiplication tbody');

for(let i = 0; i < muliplicationArray.length; i++) {
    let row = document.createElement('tr');

    for(let j = 0; j < muliplicationArray[i].length; j++) {
        let product = muliplicationArray[i][j];

        let cell = document.createElement('td');
        cell.textContent = `${product}`;
        row.appendChild(cell);
    }

    table.appendChild(row);
}
