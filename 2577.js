const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
const number = parseInt(input[0]) * parseInt(input[1]) * parseInt(input[2]);
const str = number.toString();
let arr = new Array(10).fill(0);
for(let i=0; i<str.length; i++){
    arr[parseInt(str.slice(i, i+1))]+=1;
}
for(i=0; i<arr.length; i++) console.log(arr[i]);