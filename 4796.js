const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=0; i<input.length-1; i++){
    const data = input[i].split(' ').map(e => parseInt(e));
    const x = data[0];
    const y = data[1];
    const total = data[2];
    const res = x * Math.floor(total/y) + Math.min(x, total%y);
    console.log(`Case ${i+1}: ${res}`)
}