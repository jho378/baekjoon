const fs = require('fs');
const input = fs.readFileSync('a.txt').toString();
const N = parseInt(input);

for(let i=0; i<N; i++){
    let str = "";
    str += "*".repeat(N-i);
    console.log(str);
}