const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(' ');

const data = input.map(e => parseInt(e));
const x = data[0];
const y = data[1];
const z = data[2];
let res = 0;
if(z >= Math.abs(x-y))  res = 2 * Math.max(x, y) + Math.floor((z - Math.abs(x-y))/2) *2; 
else{
    res = (Math.min(x, y) + z) * 2
}
console.log(res);