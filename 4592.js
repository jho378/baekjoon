const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const data = [];
for(let i=0; i<input.length-1; i++) data.push(input[i].split(' ').map(e => parseInt(e)).slice(1));

for(let i=0; i<data.length; i++){
    const res = [];
    for(let j=0; j<data[i].length; j++){
        if(res[res.length-1]!==data[i][j]) res.push(data[i][j]);
    }
    let str = res.join(' ');
    str += " $";
    console.log(str);
}
