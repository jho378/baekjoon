const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const num = '0123456789';
const arr = new Array(10).fill(0);

for(let i=0; i<input.length; i++){
    arr[num.indexOf(input[i])]+=1;
}

let result = "";
for(let i=9; i>=0; i--){
    result += String(i).repeat(arr[i]);
}

console.log(result);