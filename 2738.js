const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0].split(' ')[0]);
const M = parseInt(input[0].split(' ')[1]);

const matrix1 = [];
const matrix2 = [];
for(let i=1; i<N+1; i++) matrix1.push(input[i].split(' ').map(e => parseInt(e)));
for(let i=N+1; i<2*N+1; i++) matrix2.push(input[i].split(' ').map(e => parseInt(e)));


const res = [];

for(let i=0; i<N; i++){
    for(let j=0; j<M; j++){
        res.push(matrix1[i][j] + matrix2[i][j]);
    }
}

for(let i=0; i<res.length; i+=M){
    const ans = res.slice(i, i+M);
    const result = ans.join(' ');
    console.log(result);
}