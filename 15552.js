const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = parseInt(input[0]);
let str ="";
for(let i=1; i<N+1; i++){
    str += parseInt(input[i].split(" ")[0]) + parseInt(input[i].split(" ")[1]) + "\n";
}

console.log(str);