const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('');
const data = [];
for(let i=0; i<input.length; i++)   data.push(input[i]);

let str = "";
str += data[0];
for(let i=1; i<data.length; i++){
    if(data[i]==="-")   str+=data[i+1];
}
console.log(str);