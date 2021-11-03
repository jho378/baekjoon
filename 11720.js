const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const N = parseInt(input[0]);
let res = 0; 

for(let i=0; i<N; i++){
    res += parseInt(input[1].slice(i, i+1));
}

console.log(res);