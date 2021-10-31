const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = parseInt(input[0]);

const data = [];
for(let i=1; i<N+1; i++){
    data.push(input[i].split(' '))
}
for(i=0; i<N; i++){
    console.log(parseInt(data[i][0])+parseInt(data[i][1]));
}