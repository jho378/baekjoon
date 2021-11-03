const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const N = parseInt(input);

let str = '';
for(let i=1; i<N+1; i++){
    str += i + "\n";
}

console.log(str);