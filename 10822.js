const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const num = input.split(',').map(e => parseInt(e));

console.log(num.reduce((p,c) => p+c, 0));