const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0].split(' ')[0]);
const min = parseInt(input[0].split(' ')[1]);

const data = input[1].split(' ').map(e => parseInt(e));

let time = 0;
let cnt = 0;
for(let i=0; i<N; i++){
    time+= data[i];
    if(time>min) break;
    cnt+=1;
}
console.log(cnt);