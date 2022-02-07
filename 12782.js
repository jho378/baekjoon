const fs =require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++) data.push(input[i].split(' '));

for(let i=0; i<N; i++){
    let sum = 0;
    const num = data[i][0];
    const _num = data[i][1];
    const numOne = num.split('').filter(e => e==='1').length;
    const _numOne = _num.split('').filter(e => e==='1').length;
    for(let i=0; i<num.length; i++){
        if(num[i]==='1' && _num[i]==='1') sum+=1; 
    }
    console.log(Math.abs(numOne - _numOne) + Math.min(numOne, _numOne) - sum);
}