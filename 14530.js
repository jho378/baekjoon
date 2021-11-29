const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(' ');

const d = parseInt(input[1]) - parseInt(input[0]);
const absD = Math.abs(d);

const data = [1];
for(let i=1; i<12; i++){
    data[i] = data[i-1] * 2 + 2;
}
let cnt = 0;
let res = 0;
while(Math.pow(2,cnt)< absD) cnt+=1;
if(d===0)  res = 0;
else if(d>0 && (cnt%2 === 0)) res = data[cnt] - Math.pow(2, cnt) + d;
else if(d>0 && (cnt%2 === 1)) res = data[cnt+1] - Math.pow(2, cnt+1)  + d;
else if(d<0 && (cnt%2 === 0)) res = data[cnt+1] - Math.pow(2, cnt+1) - d;
else if(d<0 && (cnt%2 === 1)) res = data[cnt] - Math.pow(2, cnt) - d;
else ; 

console.log(res);