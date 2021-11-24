const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const color = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

const A = input[0];
const B = input[1];
const C = input[2];

const res = (color.indexOf(A) * 10 + color.indexOf(B)) * Math.pow(10, color.indexOf(C));
console.log(res);