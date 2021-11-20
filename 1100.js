const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const data = [];
let sum = 0;
for(let i=0; i<input.length; i++)   data.push(input[i]);

for(i=0; i<data.length; i+=2){
    for(let j=0; j<8; j+=2){
        if(data[i][j]=== 'F')   sum +=1;
    }
}

for(i=1; i<data.length; i+=2){
    for(let j=1; j<8; j+=2){
        if(data[i][j]=== 'F')   sum +=1;
    }
}

console.log(sum);