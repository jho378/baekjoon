const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]) 

const arr = [1, 3];
for(let i=2; i<N+1; i++){
    arr[i] = 2* (arr[i-1]%9901) + arr[i-2]%9901;
}
console.log(arr[N])
