const fs =require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++)    data.push(parseInt(input[i]));

const nonZeroArr = [];

for(i=0; i<data.length; i++){
    if(data[i]!==0) nonZeroArr.push(data[i]);
    else nonZeroArr.pop()
}
let sum =0;
for(i=0; i<nonZeroArr.length; i++){
    sum += nonZeroArr[i];
}

console.log(sum);
