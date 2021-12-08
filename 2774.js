const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++) data.push(input[i].trim());


for(let i=0; i<data.length; i++){
    const arr =[];
    let cnt = 0;
    for(let j=0; j<data[i].length; j++){
        if(arr.includes(data[i].slice(j, j+1)))    continue;
        else{
            arr.push(data[i].slice(j, j+1)) 
            cnt+=1;
        }
    }
    console.log(cnt);
}