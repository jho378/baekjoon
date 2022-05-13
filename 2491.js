const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = input[1].split(' ').map(e => parseInt(e));

let ascendingMax = 1;
let descendingMax = 1;

let ascendingCount = 1;
let descendingCount = 1;

let i = 0;
while(i < N-1){
    if (data[i] <= data[i+1]){
        ascendingCount+=1;
    }   else {
        ascendingMax = Math.max(ascendingCount, ascendingMax);
        ascendingCount=1;
    }
    if (i===N-2){
        ascendingMax = Math.max(ascendingCount, ascendingMax);
    }
    i++;
}

i = 0;

while(i < N-1){
    if (data[i] >= data[i+1]){
        descendingCount+=1;
    }   else {
        descendingMax = Math.max(descendingCount, descendingMax);
        descendingCount= 1 ;
    }
    if (i===N-2){
        descendingMax = Math.max(descendingCount, descendingMax);
    }
    i++;
    
}
const max = Math.max(ascendingMax, descendingMax);
console.log(max);