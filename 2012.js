const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
const N = parseInt(input[0]);

const grades = new Array(N).fill(0);
grades.forEach((e, idx)=>{
    grades[idx] += idx+1;
})

const data = input.slice(1).map(e=>parseInt(e));
grades.sort((a,b)=> a-b);
data.sort((a,b) => a-b);

let sum = 0;

for(let i=0; i<grades.length; i++)   sum+=Math.abs(data[i]-grades[i]);
console.log(sum);