const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const data = [];
for(let i=0; i<input.length; i++)   data.push(parseInt(input[i]));

const x = data[0];
const y = data[1];
const z = data[2];

if(x===y && y===z)  console.log(10000 + 1000*x);
else if(x===y && y!==z) console.log(1000 + 100*x);
else if(y===z && z!==x) console.log(1000 + 100*y);
else if(z===x && x!==y) console.log(1000 + 100*z);
else if(x!==y && y!==z && z!==x)    console.log(Math.max(x, y, z)*100);