const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const data = input[0];
const score = input[1];

const percentile = data.indexOf(score)/5;

if(percentile<1) console.log('A+');
else if(percentile<3) console.log('A0');
else if(percentile<6) console.log('B+');
else if(percentile<7) console.log('B0');
else if(percentile<9) console.log('C+');
else if(percentile<=9.4) console.log('C0');
else console.log('F');