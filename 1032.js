const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++)    data.push(input[i].trim());
const len = data[0].length;
let str = '';

for(i=0; i<len; i++){
    for(let j=1; j<N; j++){
        if(data[0][i]!==data[j][i]){
            str += '?';
            break;
        }
    }
    if(str.length!== i+1) str+= data[0][i];
}
console.log(str);