const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
let str = "";
for(let i=97; i<123; i++){
    str += input.indexOf(String.fromCharCode(i)) + " ";
}
console.log(str);