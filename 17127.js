const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = input[1].split(' ').map(e => parseInt(e));

const det = [];

for(let i=0; i<4; i++){
    const arr = data.slice(i, i+N-3);
    let multiplied = arr.reduce((p,c) => p*c, 1);
    for(let j=0; j<i; j++) multiplied += data[j];
    for(let j=i+N-3; j<N; j++) multiplied += data[j];
    det.push(multiplied);
}

console.log(det.reduce((p,c)=> Math.max(p,c), -1));