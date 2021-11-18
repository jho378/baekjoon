const fs = require('fs');
const input =fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++)    data.push(parseInt(input[i]));

for(i=0; i<data.length; i++){
    console.log(Math.floor(Math.sqrt(data[i]+1/4) - 1/2));
}