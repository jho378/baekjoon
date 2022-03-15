const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = parseInt(input);
let cnt = 0;
for(let i=1; i<Math.sqrt(2*N + 1/4) ; i++){
    if((N-i*(i+1)/2) % i === 0) cnt+=1;
}
console.log(cnt);