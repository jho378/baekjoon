const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = parseInt(input);
const data = [];
for(let i=0; i<=30; i++)    data.push(Math.pow(2, i));

if(data.includes(n))    console.log(1);
else console.log(0);