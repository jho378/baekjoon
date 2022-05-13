const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = input.slice(1).map(e => parseInt(e));
const max = data.reduce((p,c) => Math.max(p,c), -1);

const storage = [1, 2, 4];

for(let i=3; i<max; i++){
    storage[i] = (storage[i-1] + storage[i-2] + storage[i-3]) % 1000000009;
}
for (let i=0; i<data.length; i++){
    console.log(storage[data[i]-1]); 
}