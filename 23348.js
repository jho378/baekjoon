const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

let max = 0;
const A = parseInt(input[0].split(' ')[0]);
const B = parseInt(input[0].split(' ')[1]);
const C = parseInt(input[0].split(' ')[2]);

const teams = parseInt(input[1]);


for(let i=2; i<input.length; i+=3){
    const score1 = parseInt(input[i].split(' ')[0]) * A + parseInt(input[i].split(' ')[1]) * B + parseInt(input[i].split(' ')[2]) * C;
    const score2 = parseInt(input[i+1].split(' ')[0]) * A + parseInt(input[i+1].split(' ')[1]) * B + parseInt(input[i+1].split(' ')[2]) * C ;
    const score3 = parseInt(input[i+2].split(' ')[0]) * A + parseInt(input[i+2].split(' ')[1]) * B + parseInt(input[i+2].split(' ')[2]) * C ;
    const score = score1 + score2 + score3;
    max = Math.max(score, max);
}
console.log(max);