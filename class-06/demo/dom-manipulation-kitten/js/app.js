'use strict';

const kittenProfiles = document.getElementById('kittenProfiles');
console.log(kittenProfiles);


// ADD ELEMENTS TO THE DOM
// 1. create an element
let art = document.createElement('article');

// 2. give that element content
// 3. append that element to the DOM
kittenProfiles.appendChild(art);

// Add a headline
let header = document.createElement('h3');
art.appendChild(header);
header.textContent = 'Jumper';

// Add a paragraph
let p = document.createElement('p');
p.textContent = 'Jumper the cat is available for adoption.'
art.appendChild(p);

// Add ul
let ul = document.createElement('ul');
art.appendChild(ul);

// Add an image
let image = document.createElement('img');
image.src = 'images/jumper.jpeg';
image.alt = 'Jumper is ready for adoption.';
image.setAttribute('height', 184);
image.setAttribute('width', 275);
art.appendChild(image);

let jumper = {
  name: 'Jumper',
  cookiesSoldEachHourArray: [],
  likes: ['cuddling', 'lazer pointer', 'catnip'],
  render: function () {
    for (let i = 0; i < this.likes.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${this.name} likes ${this.likes[i]}`;
      ul.appendChild(li);
    }
  }
};

jumper.render();


// let li = document.createElement('li');
// li.textContent - `6 a.m.: ${seattle.someValueInAnArray[i]}`
