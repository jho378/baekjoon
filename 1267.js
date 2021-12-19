const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
const N = parseInt(input[0]);
const data = input[1].split(' ').map(e => parseInt(e));

let ys = 0;
let ms = 0;

for(let i=0; i<data.length; i++){
    if(data[i]%30===0) ys += (data[i]/30 + 1) * 10;
    else ys += Math.ceil(data[i]/30) * 10;
}
for(let i=0; i<data.length; i++){
    if(data[i]%60===0) ms += (data[i]/60 + 1) * 15;
    else ms += Math.ceil(data[i]/60) * 15;
}
if(ys>ms)   console.log('M', ms);
else if(ys<ms)  console.log('Y', ys);
else console.log('Y', 'M', ys)