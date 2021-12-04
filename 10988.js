const fs = require('fs');
const word = fs.readFileSync('/dev/stdin').toString().trim();

let res = 1;
for(let i=0; i<word.length/2; i++){
    if(word.slice(i, i+1) === word.slice(word.length - i -1, word.length - i)) continue;
    else{
        res = 0;
        break;
    }
}
console.log(res);