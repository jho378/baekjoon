const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

const num = Math.ceil((N - 5) / 2);

const res = num * (num+1) /2;
if(N<=5)    console.log(0);
else console.log(res);