const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0].split(' ')[0]);
const K = parseInt(input[0].split(' ')[1]);

const data = [];
for(let i=1; i<N+1; i++) data.push(input[i].split(' ').map(e => parseInt(e)));

let n = parseInt(input[N+1].split(' ')[0]);
const X = parseInt(input[N+1].split(' ')[1]);
const Y = parseInt(input[N+1].split(' ')[2]);

const obj = {};

for(let i=1; i<K+1; i++){
    obj[i]=[];
}


for(let i=0; i<N; i++){
    for(let j=0; j<N; j++){
        if(data[i][j]!==0){
            obj[data[i][j]].push(Math.abs(X-i-1)+ Math.abs(Y-j-1));
        }
    }
}

for(const num in obj){
    obj[num] = obj[num].reduce((p,c) => Math.min(p,c), Math.pow(N+1, 2));
}
const distance = Object.values(obj);
const min = distance.reduce((p,c) => Math.min(p,c), Math.pow(N+1,2));
if(min>n) console.log(0);
else{
    console.log(distance.indexOf(min) +1);
}