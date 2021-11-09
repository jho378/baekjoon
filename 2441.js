const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const N = parseInt(input);

for(let i=0; i<N; i++){
    let str = "";
    str += " ".repeat(i);
    str += "*".repeat(N-i);
    console.log(str);
}