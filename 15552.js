const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split("\n");

const N = parseInt(input[0]);

for(let i=1; i<N+1; i++){
    console.log(parseInt(input[i].split(" ")[0]) + parseInt(input[i].split(" ")[1]));
}
