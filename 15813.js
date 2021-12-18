const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const data = [];
for(let i=0; i<input[1].length; i++) data.push(input[1].slice(i, i+1));

const str = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let res = 0;
for(let i=0; i<data.length; i++)    res += str.indexOf(data[i]);
console.log(res);