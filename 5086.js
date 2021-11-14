const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const data = [];
for(let i=0; i<input.length; i++) data.push(input[i].split(" "));

for(i=0; i<data.length -1; i++){
    if(parseInt(data[i][0])>parseInt(data[i][1]) && parseInt(data[i][0])%parseInt(data[i][1])===0)  console.log('multiple');
    else if(parseInt(data[i][0])<parseInt(data[i][1]) && parseInt(data[i][1])%parseInt(data[i][0])===0)  console.log('factor');
    else console.log('neither');
}