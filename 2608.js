const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const A = input[0].split('');
const B = input[1].split('');

let sumA = 0;
let sumB = 0;
for(let i=0; i<A.length; i++){
    if(A[i]==='I') A[i] = 1;
    else if(A[i]==='V') A[i] = 5;
    else if(A[i]==='X') A[i] = 10;
    else if(A[i]==='L') A[i] = 50;
    else if(A[i]==='C') A[i] = 100;
    else if(A[i]==='D') A[i] = 500;
    else if(A[i]==='M') A[i] = 1000;
}
for(let i=0; i<B.length; i++){
    if(B[i]==='I') B[i] = 1;
    else if(B[i]==='V') B[i] = 5;
    else if(B[i]==='X') B[i] = 10;
    else if(B[i]==='L') B[i] = 50;
    else if(B[i]==='C') B[i] = 100;
    else if(B[i]==='D') B[i] = 500;
    else if(B[i]==='M') B[i] = 1000;
}
for(let i=0; i<A.length; i++){
    if(A[i]<A[i+1]) sumA-= A[i];
    else sumA += A[i];
}
for(let i=0; i<B.length; i++){
    if(B[i]<B[i+1]) sumB -= B[i];
    else sumB += B[i];
}
const sum = sumA + sumB;

let roma = '';

roma += 'M'.repeat(Math.floor(sum/1000));
if(Math.floor(sum/100)%10<4) roma += 'C'.repeat(Math.floor(sum/100)%10);
else if(Math.floor(sum/100)%10===4) roma += 'CD';
else if(Math.floor(sum/100)%10===5) roma += 'D';
else if(Math.floor(sum/100)%10===9) roma += 'CM';
else roma += 'D' + 'C'.repeat(Math.floor(sum/100)%10 - 5);

if(Math.floor(sum/10)%10<4) roma += 'X'.repeat(Math.floor(sum/10)%10);
else if(Math.floor(sum/10)%10===4) roma += 'XL';
else if(Math.floor(sum/10)%10===5) roma += 'L';
else if(Math.floor(sum/10)%10===9) roma += 'XC';
else roma += 'L' + 'X'.repeat(Math.floor(sum/10)%10 - 5);

if(sum%10<4) roma+= 'I'.repeat(sum%10);
else if(sum%10===4) roma+= 'IV';
else if(sum%10===5) roma+= 'V';
else if(sum%10===9) roma+= 'IX';
else roma+='V' + 'I'.repeat(sum%10-5);

console.log(sum);
console.log(roma);