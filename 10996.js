const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim();
const N = parseInt(input);

let str1 = '';
let str2 = '';
for(let i=0; i<N; i++){
    if(i%2===0) str1+='*';
    else str1+=' ';
}

for(let i=0; i<N; i++){
    if(i%2===0) str2 +=' ';
    else str2+= '*'
}

for(let i=0; i<2*N; i++){
    if(i%2===0) console.log(str1);
    else console.log(str2);
}