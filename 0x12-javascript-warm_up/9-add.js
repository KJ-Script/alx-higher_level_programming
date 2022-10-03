#!/usr/bin/node

const argv = require('process').argv;

const firstNum = parseInt(argv[2]);
const secondNum = parseInt(argv[3]);

function add (a, b) {
  return a + b;
}

if (isNaN(firstNum) || isNaN(secondNum)) {
  console.log('NaN');
} else {
  console.log(add(firstNum, secondNum));
}
