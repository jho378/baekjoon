const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++)    data.push(input[i].split(' '));

const res = new Array(N).fill(0);
const scoreArr = [];
const countArr = [];
let minCnt = 51;
const timeArr = [];
let minTime = 180;
for(let i=0; i<N; i++){
    scoreArr.push(parseInt(data[i][0]));
    countArr.push(parseInt(data[i][1]));
    timeArr.push(parseInt(data[i][2]));
}

const max = scoreArr.reduce((p,c) => Math.max(p,c), -1);

for(let i=0; i<N; i++){
    if(scoreArr[i]===max)   res[i] += 1;
}


for(let i=0; i<N; i++){
    if(res[i]!==0)  minCnt = Math.min(countArr[i], minCnt);
}
for(let i=0; i<N; i++){
    if(countArr[i]!==minCnt)    res[i]=0;
}

for(let i=0; i<N; i++){
    if(res[i]!==0) minTime = Math.min(timeArr[i], minTime);  
}
for(let i=0; i<N; i++){
    if(timeArr[i]!== minTime)   res[i]=0;
}


let x = 0;
while(res[x]===0){
    x+=1
}
console.log(x+1);