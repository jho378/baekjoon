const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const str = input[1].trim();

const score = new Array(N).fill(0);
const bonus = new Array(N).fill(0);

for(let i=0; i<N; i++){
    const x = str.slice(i, i+1);
    if(x === 'O'){
        if(i===0)   bonus[i] += 1;
        else    bonus[i] += bonus[i-1] + 1;
    }
    else continue;
}
for(i=0; i<N; i++){
    const x = str.slice(i, i+1);
    if(x === 'O'){
        score[i] += i+1+bonus[i];
    }
    else continue;
}
const rightCnt = score.filter(e => e!==0).length;
console.log(score.reduce((p,c) => p+c, 0) - rightCnt);