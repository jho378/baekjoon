const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(" ");

const A = input[0];
const B = input[1];

const a = A.length;
const b = B.length;

const arr =new Array(b-a+1).fill(0);
for(let i=0; i<= b-a; i++){
    const tempb = B.slice(i, i+a);
    for(let j=0; j<a; j++){
        if(A[j]===tempb[j]) arr[i]+=1;
    }
}
const max = arr.reduce((p,c) => Math.max(p,c), -1);

console.log(a - max);