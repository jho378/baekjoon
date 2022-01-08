const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = input[1].split(' ').map(e => parseInt(e));

for(let i=0; i<N; i++){
    const n = data[i];
    const sum = [];
    for(let j=1; j<=Math.sqrt(n); j++){
        if(n%j===0 && j!==n/j) sum.push(j, n/j);
        else if(n%j===0) sum.push(j)
    }
    if(sum.reduce((p,c) => p+c, 0) > 2 * n) console.log('Abundant');
    else if(sum.reduce((p,c) => p+c, 0) === 2*n) console.log('Perfect');
    else console.log('Deficient');
}