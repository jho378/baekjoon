const fs = require('fs');
const input = fs.readFileSync('a.txt').toString();

const arr = new Array(26).fill(0);

for(let i=0; i<input.length; i++){
    arr[input.charCodeAt(i)-97] +=1;
}
let str = "";

for(i=0; i<arr.length; i++) str += arr[i] + " ";

console.log(str.trim());