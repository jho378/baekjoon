const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
const N = parseInt(input[0]);
const data = [];
for(let i=1; i<input.length; i++)   data.push(parseInt(input[i]));

const result = [];
let i=0;
while(result.length!==N){
    const candidates = data[i];
    const votes = data.slice(i+1, i+candidates+1);
    const max = votes.reduce((p,c) => Math.max(p,c), -1);
    if(votes.indexOf(max)!==votes.lastIndexOf(max)) result.push('no winner');
    else{
        const sum = votes.filter(e => e!==max).reduce((p,c) => p+c, 0);
        const winner = votes.indexOf(max) + 1;
        if(max>sum) result.push(`majority winner ${winner}`);
        else result.push(`minority winner ${winner}`);
    }
    i = i + 1 + candidates;
}
result.forEach(e => console.log(e));