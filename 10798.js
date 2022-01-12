const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
const len = input.length
const max = input.map(e => e.length).reduce((p,c)=> Math.max(p,c), 0);

let str = "";
for(let i=0; i<max; i++){
    for(let j=0; j<len; j++){
        str += input[j].slice(i,i+1);
    }
}
console.log(str);
