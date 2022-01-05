const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = input[0].split(' ').map(e => parseInt(e))[0];
const x = input[0].split(' ').map(e => parseInt(e))[1];

const data = [];
for(let i=1; i<input.length; i++)    data.push(parseInt(input[i]));

let res = data[data.length-1]; 
for(let i=data.length-1; i>0; i--){
    res = (x * res + data[i-1])%(Math.pow(10, 9)+7);
}
res*=x;

console.log(res%(Math.pow(10, 9)+7));