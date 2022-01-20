const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim();
const N = parseInt(input);

const data = [];
let num=666;
while(true){
    if(String(num).indexOf('666')!==-1) data.push(num);
    if(data.length===N) break;
    num++;
}
console.log(num)