const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const A = parseInt(input[0].split(' ')[0]);
const B = parseInt(input[0].split(' ')[1]);
const chicken = parseInt(input[1]);

if(A+B - 2 * chicken >= 0)   console.log(A+B - 2 * chicken);
else console.log(A+B)