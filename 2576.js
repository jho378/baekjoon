const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const data = [];

for(i=0; i<7; i++){
    if(parseInt(input[i])%2 === 1)   data.push(parseInt(input[i]));
    else continue;
}

if(data.length===0) console.log(-1);
else{
    const sum = data.reduce((p,c) => p+c, 0);
    const min = data.reduce((p,c) => Math.min(p,c), 101);
    console.log(`${sum}\n${min}`);
}
