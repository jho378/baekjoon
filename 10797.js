const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const ban = parseInt(input[0]);
const data = input[1].split(" ");
let cnt = 0;
for(let i=0; i<data.length; i++){
    if(parseInt(data[i])===ban) cnt+=1;
}

console.log(cnt);