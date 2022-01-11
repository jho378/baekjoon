const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);

if(input.indexOf('anj')===-1) console.log('뭐야?');
else console.log('뭐야;')