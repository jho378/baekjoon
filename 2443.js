const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

for(let i=0; i<N; i++){
    let str = '';
    str+=" ".repeat(i);
    str+='*'.repeat(2*N-2*i-1);
    console.log(str);
}