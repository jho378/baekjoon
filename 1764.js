const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0].split(' ')[0]);
const M = parseInt(input[0].split(' ')[1]);

const obj = {};
for(let i=1; i<N+1; i++){
    obj[input[i]] = 0;
}
for(let i=N+1; i<N+M+1; i++){
    obj[input[i]] +=1;
}

const arr = [];

for(const prop in obj){
    if(obj[prop]===1) arr.push(prop);
}
arr.sort();
console.log(arr.length);
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}