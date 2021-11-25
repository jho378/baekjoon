const fs= require('fs');
const input = fs.readFileSync('a.txt').toString();

const N = parseInt(input);

const arr = new Array(6).fill(0);
for(let i=0; i<6; i++){
    if(N % Math.pow(2, i+1)>= Math.pow(2, i)) arr[i] += 1;
}
if(N===64)  console.log(1);
else   console.log(arr.reduce((p,c) => p+c, 0));