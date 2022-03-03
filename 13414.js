const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const n = parseInt(input[0].split(' ')[0]);
const N = parseInt(input[0].split(' ')[1]);

const data = [];
for(let i=1; i<N+1; i++){
    if(data.includes(input[i])){
        data.splice(data.indexOf(input[i]), 1);
        data.push(input[i]);
    }
    else{
        data.push(input[i]);
        data.splice(input[i], 1)
    }
}

data.slice(0, n).forEach(e => console.log(e));