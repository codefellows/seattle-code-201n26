"use strict";

showMsg();

function showMsg() {
  console.log("I am the showMsg function");
}

let msgExpression = function () {
  console.log("I am the msgExpression function expression");
};

msgExpression();
