const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++)    data.push(input[i]);

const str = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ';

for(let i=0; i<N; i++){
    let res = 0;
    for(let j=0; j<data[i].length; j++){
        if(str.indexOf(data[i].slice(j, j+1)) !== -1)   res+= str.indexOf(data[i].slice(j, j+1));
    }
    if(res===100) console.log('PERFECT LIFE');
    else console.log(res);
}