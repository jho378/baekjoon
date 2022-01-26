const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = parseInt(input);

for(let i=0; i<N; i++){
    let str = '';
    str+=' '.repeat(N-i-1);
    str+='*'.repeat(i+1);
    console.log(str);
}
for(let i=1; i<N; i++){
    let str = '';
    str+=' '.repeat(i);
    str+='*'.repeat(N-i);
    console.log(str);
}
