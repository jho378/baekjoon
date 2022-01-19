const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const M = parseInt(input[0].split(' ')[0]);
const N = parseInt(input[0].split(' ')[1]);
let bool = true;

const img = [];
const data = [];
for(let i=1; i<M+1; i++) img.push(input[i].split(''));
for(let i=M+1; i<2*M+1; i++) data.push(input[i].split(''));

for(let i=0; i<M; i++){
    for(let j=0; j<N; j++){
        if(img[i][j]!==data[i][2*j] || img[i][j]!==data[i][2*j+1]) bool = false;
    }
}

if(bool===true) console.log("Eyfa");
else console.log("Not Eyfa");