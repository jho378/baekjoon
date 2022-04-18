const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const dataX = [];
const dataY = [];

for(let i=0; i<3; i++){
    dataX.push(input[i].split(' ')[0]);
    dataY.push(input[i].split(' ')[1]);
}
let x = "";
let y = "";
if ( dataX[0] === dataX[1] ){
    x = dataX[2];
}
if ( dataX[0] === dataX[2] ){
    x = dataX[1];
}
if ( dataX[1] === dataX[2] ){
    x = dataX[0];
}

if ( dataY[0] === dataY[1] ){
    y = dataY[2];
}
if ( dataY[0] === dataY[2] ){
    y = dataY[1];
}
if ( dataY[1] === dataY[2] ){
    y = dataY[0];
}

console.log(x, y)