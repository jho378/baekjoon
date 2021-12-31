const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0].split(' ')[0]);

const data = [];
for(let i=1; i<input.length; i++) data.push(input[i].split(' ').map(e => parseInt(e)));

const res = new Array(N+1).fill(0);
for(let i=0; i<data.length; i++){
    const x = data[i][0]; 
    const y = data[i][1];
    const value = data[i][2];
    for(let j=x; j<=y; j++)  res[j] = value;
}
console.log(res.slice(1).join(' '));
