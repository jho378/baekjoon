const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(' ');

const A = input[0].split('').map(e => parseInt(e));
const B = input[1].split('').map(e => parseInt(e));

const diff = Math.abs(A.length - B.length);
if(A.length > B.length){
    for(let i=0; i<diff; i++){
        B.unshift(0);
    }
}   else{
    for(let i=0; i<diff; i++){
        A.unshift(0);
    }
}

const res = [];
for(let i=0; i<A.length; i++){
    res[i] = A[i] + B[i];
}
for(let i=res.length; i>0;i--){
    if(res[i]>=10){
        res[i]-=10;
        res[i-1]+=1;
    }
}
console.log(res.join(''));