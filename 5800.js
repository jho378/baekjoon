const fs =require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);

const datas = [];
for(let i=1; i<N+1; i++) datas.push(input[i].split(' ').map(e => parseInt(e)));

for(let i=0; i<N; i++){
    const n = datas[i][0]
    const data = datas[i].slice(1);
    const min = data.reduce((p,c) => Math.min(p,c), 101);
    const max = data.reduce((p,c) => Math.max(p,c), -1);
    const _data = data.sort((a,b) => a-b);
    const gap = [];
    for(let i=1; i<n; i++){
        gap.push(_data[i] - _data[i-1]);
    }
    const largestGap = gap.reduce((p,c) => Math.max(p,c), -1);
    console.log(`Class ${i+1}`);
    console.log(`Max ${max}, Min ${min}, Largest gap ${largestGap}`)
}