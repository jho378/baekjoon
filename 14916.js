const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim();

const num = parseInt(input);
if(num===1 || num===3)  console.log(-1);
else if((num%5)%2===0)   console.log(Math.floor(num/5) + (num - 5*Math.floor(num/5))/2);
else console.log(Math.floor(num/5) - 1 + (num - 5* Math.floor(num/5) + 5 )/2);