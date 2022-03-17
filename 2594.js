const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const arr = new Array(720).fill(1);

for(let i=1; i<input.length; i++){
    const start = input[i].split(' ')[0];
    const end = input[i].split(' ')[1];

    const startTime = parseInt(start.slice(0,2)) * 60 + parseInt(start.slice(2));
    const endTime = parseInt(end.slice(0,2)) * 60 + parseInt(end.slice(2));
    for(let i=Math.max(0,startTime-610); i<Math.min(endTime-590, 720); i++){
        arr[i] = 0;
    }
}

let max = 0;
let curr = 0;

let j=0;
while(j<720){
    if(arr[j]===0){
        max = Math.max(max, curr);
        curr = 0;
    }
    else{
        curr++;
    }    
    j++ 
}
max = Math.max(max, curr);
console.log(max);
