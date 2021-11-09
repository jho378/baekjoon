const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);
let res = 0;
if(A%10 > B%10) res = A;
else if(A%10 < B % 10) res = B;
else if(Math.floor((A%100)/10)>Math.floor((B%100)/10)) res = A;
else if(Math.floor((B%100)/10)>Math.floor((A%100)/10)) res = B;
else if(Math.floor(A/100) > Math.floor(B/100)) res = A;
else if(Math.floor(B/100) > Math.floor(A/100)) res = B;

console.log((res%10)*100 + Math.floor((res%100)/10)*10 + Math.floor(res/100)) 