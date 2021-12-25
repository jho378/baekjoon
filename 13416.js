const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const days = input.filter(e => e.indexOf(' ')=== -1).slice(1);

let T = parseInt(input[0]);
const data = [];
for(let i=1; i<input.length; i++) data.push(input[i].split(' '));

let tmp = 1;
let j = 0;
while(T--){
    let res = 0;
    
    for(let i=tmp; i <tmp + parseInt(days[j]); i++){
        res += Math.max(Math.max(...data[i].map(e => parseInt(e))), 0);
    }
    console.log(res);
    tmp += parseInt(days[j]) +1;
    j++;
}


