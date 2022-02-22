const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N =parseInt(input[0]);

for(let i=1; i<N+1; i++){
    let res = "";
    res+= input[i][0];
    res+= input[i][input[i].length-1];
    console.log(res);
}
