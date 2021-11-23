const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const N = parseInt(input);

for(let i=0; i<N; i++){
    let str = '';
    str += " ".repeat(N-i-1);
    str += "*".repeat(2*i+1);
    console.log(str);
}