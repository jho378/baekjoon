const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++) data.push(parseInt(input[i]));

const recursive = (n) => {
    if(n===1) return 1;
    if(n===2) return 2;
    if(n===3) return 4;
    else return recursive(n-1) + recursive(n-2) + recursive(n-3);
} 
for(let i=0; i<N; i++){
    console.log(recursive(data[i]));
}