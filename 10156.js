const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const x = parseInt(input[0]);
const y = parseInt(input[1]);
const z = parseInt(input[2]);

const res = x*y-z;
if(res<0)   console.log(0);
else console.log(res);