const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++) data.push(parseInt(input[i]));

const sum = data.reduce((p,c) => p+c, 0) / 2 ;

const res =[];
let tmp = 0;
for(let i=1; i<N; i+=2){
    tmp+=data[i];
}
res.push(sum-tmp);

while(res.length!==N){
    const prev = res[res.length-1];
    res.push(data[res.length-1] - prev);
}
res.forEach(e => console.log(e));