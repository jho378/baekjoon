const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
console.log(input);
const data = [];

for(let i=0; i<input.length; i++){
    data.push(input[i].trim().split(" "));
}
const cntArr = [];
let cnt =0;
for(i=0; i<4; i++){
    cnt += parseInt(data[i][1]) 
    cnt -= parseInt(data[i][0]);
    cntArr.push(cnt)
    console.log(cnt);
}
const max = cntArr.reduce((p,c) => Math.max(p, c), -1);
console.log(max);

// 하... nodejs 쓰면서 백준 풀 때 무조건 trim().