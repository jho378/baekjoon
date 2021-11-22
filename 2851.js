
const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const data = [];
for(let i=0; i<input.length; i++)   data.push(parseInt(input[i]));

let sum = 0;
let cnt = -1;
for(i=0; i<data.length; i++){
    sum += data[i];
    cnt += 1;
    if(sum>100) break;
}

let under = 0;
let up = 0;
for(i=0; i<cnt; i++){
    under+=data[i];
}


up = under + data[cnt];

if(up - 100 < 100 - under || up - 100 ===100-under)  console.log(up);
else if(up - 100>100-under)   console.log(under);
