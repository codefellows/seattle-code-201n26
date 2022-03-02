'use strict';

let hour = ['6 a.m.', '7 a.m.' ]

let seattleObject = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  dailyTotal: 0,
  avgCookiesSoldEachHourArray: [],
  getRandomCustomers: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }
};

console.log(seattleObject.getRandomCustomers());
