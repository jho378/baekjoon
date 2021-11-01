const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split("");

const numArr = [];
for(let i=0; i<input.length; i++) numArr.push(parseInt(input[i]));
const cntArr = new Array(10).fill(0);

for(i=0; i<numArr.length; i++){
    cntArr[numArr[i]]++;
}

let sixNine = Math.ceil((cntArr[6] + cntArr[9])/2);

let min =sixNine;
for(i=0; i<cntArr.length; i++){
    if(i===6 || i===9) continue;
    if(cntArr[i]>min) min = cntArr[i]; 
}

console.log(min);