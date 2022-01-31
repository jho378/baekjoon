const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);

for(let i=1; i<N+1; i++){
    console.log(`${i}. ${input[i]}`)
}