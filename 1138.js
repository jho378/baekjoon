const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = input[1].split(' ').map(e => parseInt(e));

const result = new Array(N).fill(0);

for(let i=0; i<N; i++){
    let idx = 0;
    for(let j=0; j<N; j++){
        if(result[j]!==0 && result[j] <= i+1) continue; 
        if(data[i]===idx){
            result[j] = i+1;
            break;
        } 
        if(result[j] === 0 || result[j] > i+1) idx+=1;
        else continue;
    }
}
console.log(result.join(' '));