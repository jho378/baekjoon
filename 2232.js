const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
let data = input.slice(1).map(e => parseInt(e));

if(N===1) console.log(data[0]);
if(data[0]>=data[1]) console.log(1);
for(let i=1; i<data.length-1; i++){
    if(data[i]>=data[i-1] && data[i]>=data[i+1]) console.log(i+1);
}
if(data[N-1]>=data[N-2]) console.log(N);