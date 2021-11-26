const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++) data.push(parseInt(input[i]));

let init = 0;
let left = 0;
let right = 0;
for(i=0; i<N; i++){
    if(data[i]>init){
        left+=1;
        init = data[i]; 
    }
}
init = 0;
for(i=N-1; i>=0; i--){
    if(data[i]>init){
        right+=1;
        init = data[i];
    }    
}
console.log(left);
console.log(right);