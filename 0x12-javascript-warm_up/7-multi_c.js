#!/usr/bin/node

const argv = require('process').argv;

const numOfOccurrences = parseInt(argv[2]);

if (isNaN(numOfOccurrences)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < numOfOccurrences; i++) {
    console.log('C is fun');
  }
}
