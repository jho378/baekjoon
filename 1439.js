const fs = require('fs');
const str = fs.readFileSync('a.txt').toString().trim();

const zero = str.split('1').filter(e => e!=='');
const one = str.split('0').filter(e => e!=='');

console.log(Math.min(zero.length, one.length))