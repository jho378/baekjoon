const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const N = parseInt(input[0]);
const data = [];

for(let i=1; i<N+1; i++){
    data.push(input[i]);
}
for(i=0; i<N; i++){
    let res =0;
    let oxArr = data[i].split("X");
    oxArr = oxArr.filter(e => e!=='X');
    for(let j=0; j<oxArr.length; j++)
        res += (oxArr[j].length)*(oxArr[j].length + 1)/2;
    console.log(res);
}