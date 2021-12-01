const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const data = [];
let i=1;

while(i<=A){
    if(A%i===0) data.push(i);
    i++;
}

if(data.length<B)   console.log(0);
else    console.log(data[B-1]);