const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().split(" ");
const A = parseInt(input[0]);
const B = parseInt(input[1]);

const arr = [];
for(let i=A; i<B+1; i++){
    arr.push(Math.ceil(Math.sqrt(2*i+1/4)-1/2));
}
console.log(arr.reduce((p,c) => p+c, 0));
