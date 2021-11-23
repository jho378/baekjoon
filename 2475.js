const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const data = [];
for(let i=0; i<input.length; i++)   data.push(parseInt(input[i]));

let sum =0;
for(i=0; i<data.length; i++)    sum+=Math.pow(data[i], 2);

const res = sum%10;
console.log(res);