const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(' ');
const [A, B, C] = input.map(e => parseInt(e));
const [a, b, c] = [A%2, B%2, C%2];

const arr = [a,b,c];
const num = [A,B,C]
let res =1;
if(a===0 && b===0 && c===0) console.log(A * B * C);
else{
    for(let i=0; i<arr.length; i++){
        if(arr[i]===1) res*= num[i];
    }
    console.log(res);
}