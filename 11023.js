const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let sum = 0;
for(let i=0; i<input.length; i++) sum += parseInt(input[i]);
console.log(sum)