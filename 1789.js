const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

let cnt = 0;
let i = 1;
while(i + 1/2 <= Math.sqrt(2*N+1/4)){
    cnt+=1;
    i++;
}

console.log(cnt);