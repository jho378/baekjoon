const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0].split(' ')[0]);
const M = parseInt(input[0].split(' ')[1]);
const data = [];
for(let i=1; i<N+1; i++) data.push(input[i]);

for(let i=0; i<N; i++){
    const str = data[i];
    let res = [];
    let latestCloud = -1;
    while(res.length!==M){
        if(str[res.length]==='c'){
            res.push(0);
            latestCloud = res.length - 1;
        }
        else{
            if(latestCloud===-1) res.push(-1);
            else res.push(res.length - latestCloud);
        } 
    }
    console.log(res.join(' '));    
}