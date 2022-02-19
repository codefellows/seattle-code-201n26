'use strict';

let score = 0;
score++
console.log(score);

// Pseudo code
// plain language to describe the code we want to write

// Question 7:
// Ask the user of the question
// get the response
// evaluate the respone
// compare to possible values — is it in array? (tell them if they were right or wrong)
// Does the user have any more attempts to guess?


let myFavColors = ['blue', 'cream', 'gold'];
let userResponse = 'cream';




// // WHILE LOOP

let attemptsRemaining = 3;
while (attemptsRemaining) {

  for (let i = 0; i < myFavColors.length; i++) {
    if (userResponse === myFavColors[i]) {
      // Tell the user they are correct?
      console.log('You\'re are correct!');
    }
    // console.log(myFavColors[i]);
  }

  console.log(`You have ${attemptsRemaining - 1} attempts remaining `);
  attemptsRemaining--;

}




// FOR LOOP
let answeredCorrectly = false;
let attempts = 7;
for (let i = 0; i < attempts; i++) {
  for (let j = 0; j < myFavColors.length; j++) {
    if (userResponse === myFavColors[j]) {
        // Tell the user they are correct?
        console.log('You\'re are correct!');
    }
  }
  console.log( `I'm in the for loop. You have ${attempts - i - 1} attempts remaining`);
}




// // DO WHILE

let attemptsleft = 4;
do {
  console.log(`I'm in the do while loop. I have ${attemptsleft - 1} attempts remaining.`)
  attemptsleft--;
} while (attemptsleft > 0)



// Question 6:

// response if it's too high
  console.log('Sorry, that number is too high');
// response if it's too low
// response if it's correct
// response if guesses remaining
// response if no guesses remaining — what the answer was
// increment the score if they answered correctly
