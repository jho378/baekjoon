const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

let N = parseInt(input[0]);

let i=1; 
while(N--){
    const data =[];
    const len = parseInt(input[i].split(' ')[0]);
    const ants = parseInt(input[i].split(' ')[1]);
    for(let j=i+1; j<i+1+ants; j++) data.push(parseInt(input[j]));
    const _data = data.map(e => Math.min(e, len-e));
    const min = _data.reduce((p,c) => Math.max(p,c) , -1);

    const __data = data.map(e => Math.max(e, len-e));
    const max = __data.reduce((p,c) => Math.max(p,c), -1);
    console.log(min, max);
    i+= ants+1;
}

