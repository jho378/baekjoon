const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const A1 = parseInt(input[0].split(' ')[0]);
const B1 = parseInt(input[0].split(' ')[1]);

const A2 = parseInt(input[1].split(' ')[0]);
const B2 = parseInt(input[1].split(' ')[1]);

let numerator = A1 * B2 + A2 * B1;
let denominator = B1* B2;

let i=2;
while(1){  
    if(numerator%i===0 && denominator%i===0){
        numerator/=i;
        denominator/=i;
        i = 2;
    }
    else i++;
    if(i>Math.min(numerator, denominator)) break;
}

console.log(numerator, denominator);