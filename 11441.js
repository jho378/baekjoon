const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const data = input[1].split(' ').map(e => parseInt(e));
const sumData = [];
for(let i=0; i<data.length; i++){
    sumData.push(data.slice(0, i+1));
}
for(let i=3; i<input.length; i++){
    if(parseInt(input[i].split(' ')[0])=== 1)   console.log(sumData[parseInt(input[i].split(' ')[1])]);
    else console.log(sumData[parseInt(input[i].split(' ')[1]) -1] - sumData[parseInt(input[i].split(' ')[0]) -2]);
}