const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim();
const N = parseInt(input);

for(let i=1; i<=N; i++){
    if(30%(i+1) === 0) console.log(i)
}