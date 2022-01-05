const fs = require('fs');
const input = fs.readFileSync('./baekjoon/a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);

const data = [];
for(let i=1; i<N+1; i++)    data.push(parseInt(input[i]));

let dasom = data[0];
let cnt = 0;

while(true){
    const max = data.reduce((p,c) => Math.max(p,c), -1);
    if(data.indexOf(max)===0 && data.lastIndexOf(max)===0){
        console.log(cnt);
        break;
    }
    else{
        cnt+=1;
        data[0]+=1;
        data[data.lastIndexOf(max)]-=1;
    }
}