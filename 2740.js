const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0].split(' ')[0]);
const M = parseInt(input[0].split(' ')[1]);

const matrix1 = [];
for (let i=1; i<N+1; i++){
    matrix1.push(input[i].split(' ').map(e => parseInt(e)));
}
const _N = parseInt(input[N+1].split(' ')[0]);
const _M = parseInt(input[N+1].split(' ')[1]);

const matrix2 = [];
for (let i=N+2; i<input.length; i++){
    matrix2.push(input[i].split(' ').map(e => parseInt(e)));
}

const result = [];
for (let i=0; i<N; i++){
    result.push([]);
}

for (let i=0; i<N; i++){
    for (let j=0; j<_M; j++){
        let idx = 0;
        let sum = 0;
        while(idx < M){
            sum += matrix1[i][idx]* matrix2[idx][j];
            idx++;
        }
        result[i][j] = sum;
    }
}
result.forEach(e => console.log(e.join(' ')));