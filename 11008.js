const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);

for(let i=1; i<N+1; i++){
    const target = input[i].split(' ')[0];
    const copy = input[i].split(' ')[1];

    let idx = 0;
    let count = 0;
    while(target.slice(idx).indexOf(copy)!==-1){
        count+=1;
        idx+= target.slice(idx).indexOf(copy) + copy.length;
    }

    console.log(target.length - count * copy.length + count);
}