const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

let N = parseInt(input[0]);
const data =[];
for(let i=1; i<N+1; i++) data.push(input[i].split('.')[1]);

const obj = {};
while(N--){
    const expand = data.pop();
    if(obj[expand]) obj[expand]+=1;
    else{obj[expand]=1}; 
}

const expands = Object.keys(obj);

expands.sort();
for(let i=0; i<expands.length; i++){
    console.log(`${expands[i]} ${obj[expands[i]]}` )
}