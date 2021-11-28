const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++)    data.push(parseInt(input[i].trim()));

for(i=0; i<data.length; i++){
    if(Math.floor(data[i]/10)===6)  data[i] +=30;
    if(data[i]%10 === 0)    data[i] += 9;
    else if(data[i]%10 === 6)    data[i] += 3;    
    if(data[i]>=100)    data[i] = 100;
}

console.log(Math.round(data.reduce((p,c)=> p+c, 0)/N));