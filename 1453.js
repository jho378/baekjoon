const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);

const data = input[1].split(' ').map(e => parseInt(e));

const filtered = data.filter((e, i)=> data.indexOf(e) === i);
console.log(N - filtered.length);