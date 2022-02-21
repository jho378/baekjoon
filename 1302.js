const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = input.slice(1);

const res = [];
const cnt = [];
for(let i=0; i<N; i++){
    if(res.includes(data[i])) cnt[res.indexOf(data[i])]+=1;
    else{
        res.push(data[i]);
        cnt[res.indexOf(data[i])] = 1;
    }
}

const max = cnt.reduce((p,c) => Math.max(p, c), -1);

const filtered = [];
for(let i=0; i<cnt.length; i++){
    if(cnt[i]===max) filtered.push(res[i]);
}

filtered.sort();
console.log(filtered[0])