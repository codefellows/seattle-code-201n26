'use strict';

// global varriables
let allGoats = [];
let goatContainer = document.querySelector('section');
// let resultButton = document.querySelector('section + div');
let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');

let clicks = 0;
let maxClicksAllowed = 9;

// functional logic

function Goat(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.votes = 0;
  allGoats.push(this);
}

function getRandomNumber() {
  return Math.floor(Math.random() * allGoats.length);
}

let uniqueIndexes = [];
function renderGoats() {
  // call the getRandomNumber

  // in busmall we start with three, and then want six unique images.
  // in goats we start with two, and then want four unique images.

  while (uniqueIndexes.length < 4) {
    // not confidednt this numnber is unique here
    let someIndex = getRandomNumber();
    while (uniqueIndexes.includes(someIndex)) {
      someIndex = getRandomNumber();
      // console.log('duplicate hit:', someIndex);
    }
    // confident this is unique now!
    uniqueIndexes.push(someIndex);
  }
  console.log('uniqueIndexes:', uniqueIndexes);
  let goatIndexOne = uniqueIndexes.shift();
  let goatIndexTwo = uniqueIndexes.shift();

  image1.src = allGoats[goatIndexOne].src;
  image2.src = allGoats[goatIndexTwo].src;
  image1.alt = allGoats[goatIndexOne].name;
  image2.alt = allGoats[goatIndexTwo].name;
  allGoats[goatIndexOne].views++;
  allGoats[goatIndexTwo].views++;
}

function handleGoatClick(event) {
  if (event.target === goatContainer) {
    alert('Please click on an image');
  }
  clicks++;
  let clickGoat = event.target.alt;
  for (let i = 0; i < allGoats.length; i++) {
    if (clickGoat === allGoats[i].name) {
      allGoats[i].votes++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    goatContainer.removeEventListener('click', handleGoatClick);
    // give the button an event listener and styles so the user
    // knows its an active button:
    // resultButton.addEventListener('click', renderResults);
    // resultButton.className = 'clicks-allowed';
    goatContainer.className = 'no-voting';
    renderChart();
  } else {
    renderGoats();
  }
}

// function renderResults() {
//   let ul = document.querySelector('ul');
//   for (let i = 0; i < allGoats.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = `${allGoats[i].name} had ${allGoats[i].votes} votes and was seen ${allGoats[i].views} times.`;
//     ul.appendChild(li);
//   }
// }

// executable code

new Goat('Cruising Goat', './images/cruisin-goat.jpg');
new Goat('Float Your Goat', './images/float-your-goat.jpg');
new Goat('Goat Out of Hand', './images/goat-out-of-hand.jpg');
new Goat('Kissing Goat', './images/kissing-goat.jpg');
new Goat('Sassy Goat', './images/sassy-goat.jpg');
new Goat('Smiling Goat', './images/smiling-goat.jpg');
new Goat('Sweater Goat', './images/sweater-goat.jpg');
new Goat('Bunny Goat', './images/bunny-goat.png');

renderGoats();

function renderChart() {
  let views = [];
  let votes = [];
  let names = [];

  for (let i = 0; i < allGoats.length; i++) {
    let goat = allGoats[i];
    views.push(goat.views);
    votes.push(goat.votes);
    names.push(goat.name);
  }
  // console.log('views:', views);
  // console.log('votes:', votes);
  // console.log('names:', names);

  let config = {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: '# of Votes',
        data: votes,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: views,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      // don't need this, its default, could change to false...
      responsive: true
    }
  };

  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, config);
}

goatContainer.addEventListener('click', handleGoatClick);
