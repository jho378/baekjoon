const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const A = Math.ceil(Math.sqrt(parseInt(input[0])));
const B = Math.floor(Math.sqrt(parseInt(input[1])));

const sum = B*(B+1)*(2*B+1)/6 - A*(A-1)*(2*A-1)/6;
const min = Math.pow(A,2);

if(A>B) console.log(-1);
else{
    console.log(`${sum}\n${min}`);
}