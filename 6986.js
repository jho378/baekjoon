const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = input[0].split(' ').map(e => parseInt(e))[0];
const K = input[0].split(' ').map(e => parseInt(e))[1];

const data = [];
for(let i=1; i<N+1; i++) data.push(Number(input[i]));

data.sort((a,b) => a-b);

const datas = data.slice(K,N-K);

const sum = datas.reduce((p,c)=> p+c, 0);
const avg = (sum/(N-2*K) + 0.00000001).toFixed(2);

const _sum = sum + datas[0] * K + datas[N-2*K-1] * K;
const _avg = (_sum/N + 0.00000001).toFixed(2);

console.log(avg, _avg);