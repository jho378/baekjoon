const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

let str = input[0];
const target = input[1];
const targetLength = target.length;
let cnt = 0;

while(str.indexOf(target)!==-1){
    const idx = str.indexOf(target);
    cnt+=1;
    str = str.slice(idx+targetLength);
}
console.log(cnt);