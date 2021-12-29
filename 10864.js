const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0].split(' ')[0]);

const data = [];
for(let i=1; i<input.length; i++)   data.push(input[i].split(' ').map(e => parseInt(e)));

const cntArr = new Array(N+1).fill(0);
data.forEach(arr => {
    cntArr[arr[0]]+=1;
    cntArr[arr[1]]+=1;
})

for(let i=1; i<cntArr.length; i++) console.log(cntArr[i]);
