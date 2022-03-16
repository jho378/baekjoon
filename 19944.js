const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const N = parseInt(input[0]);
const M = parseInt(input[1]);

if(M===1 || M===2) console.log('NEWBIE!');
else if(M<=N) console.log("OLDBIE!");
else console.log("TLE!");
