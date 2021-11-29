const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const [a,b] = input[0].trim().split(' ');
let min = parseInt(a) * 60 + parseInt(b) + parseInt(input[1]);

if(min>=1440)   min-=1440;

const hh = Math.floor(min/60);

const mm = min - hh * 60;
console.log(`${hh} ${mm}`);
