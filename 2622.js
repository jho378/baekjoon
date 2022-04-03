const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim();

const N = parseInt(input);

let cnt = 0;

let a = Math.ceil(N/2 -1);

while(true){
    if(a< N/3) break;
    for(let b = Math.min(N-a-1, a); b>= Math.ceil((N-a)/2); b--){
        cnt+=1;
    }
    a--;
}
console.log(cnt);