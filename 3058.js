const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);

for(let i=1; i<N+1; i++){
    const data = input[i].split(' ').map(e => parseInt(e));
    const res = data.filter(e => e%2===0);
    const sum = res.reduce((p,c) => p+c, 0);
    const min = res.reduce((p,c) => Math.min(p,c), 100001);
    console.log(`${sum} ${min}`);
}