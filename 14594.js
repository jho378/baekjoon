const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const villain = parseInt(input[1]);

const wall = new Array(N).fill(1);

for(let i=2; i<input.length; i++){
    const start = parseInt(input[i].split(' ')[0]);
    const end = parseInt(input[i].split(' ')[1]);

    for(let j=start-1; j<end-1; j++){
        wall[j] = 0 ;
    }
}
console.log(wall.filter(e => e===1).length);