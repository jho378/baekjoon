const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim();

const len = input.length;
let front = 0;
let rear = 0;

for(let i=0; i<len/2; i++){
    front += parseInt(input.slice(i, i+1));
}
for(i=len/2; i<len; i++){
    rear += parseInt(input.slice(i, i+1));
}
if(front===rear) console.log('LUCKY');
else console.log('READY');