const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N +1; i++)   data.push(input[i].split(' '));

const res = [];

for(i=0; i<data.length; i++){
    const x = parseInt(data[i][0]);
    const y = parseInt(data[i][1]);
    const z = parseInt(data[i][2]);
    if(x===y && y===z)  res.push(x*1000 + 10000);
    else if(x!== y && y!==z && z!==x)   res.push(Math.max(x, y, z) * 100);
    else if(x===y) res.push(100* x + 1000);
    else if(y===z) res.push(100 * y + 1000);
    else if(z===x) res.push(100 * z + 1000);
    else ;
}
console.log(res.reduce((p,c)=> Math.max(p,c), -1));