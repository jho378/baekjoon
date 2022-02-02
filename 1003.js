const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N  = parseInt(input[0]);

const fib = [1, 1];

let cnt = 2;
while(cnt<40){
    fib[cnt] = fib[cnt-1] + fib[cnt-2];
    cnt++;
}

for(let i=1; i<N+1; i++){
    const n = parseInt(input[i]);
    if(n===0) console.log(`1 0`);
    else if(n===1) console.log(`0 1`);
    else console.log(fib[n-2], fib[n-1]);
}