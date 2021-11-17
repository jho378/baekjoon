const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(N);

const one = Math.floor(N/5);
const two = Math.floor(N/25);
const three = Math.floor(N/125);

console.log(one + two + three);