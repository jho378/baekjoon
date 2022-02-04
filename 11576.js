const fs= require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const a = parseInt(input[0].split(' ')[0]);
const b = parseInt(input[0].split(' ')[1]);

const N = parseInt(input[1]);
const data = input[2].split(' ').map(e => parseInt(e));

let num = 0;
for(let i=0; i<N; i++){
    num += data[i] * Math.pow(a, N-1-i);
}
const res = [];
while(num){
    res.unshift(num%b);
    num-=num%b;
    num/=b;
}
console.log(res.join(' '));