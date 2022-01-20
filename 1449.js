const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const L = input[0].split(' ').map(e => parseInt(e))[0];
const len = input[0].split(' ').map(e => parseInt(e))[1];

const data = input[1].split(' ').map(e => parseInt(e));
data.sort((x, y)=> x-y);

let tapes = 0;

const arr = new Array(2001).fill(0);
for(let i=0; i<L; i++){
    arr[2*data[i]-2] = 1;
    arr[2*data[i]-1] = 1;
    arr[2*data[i]] = 1;
}

const taping = (arr) => {
    const idx1 = arr.indexOf(1);
    for(let i=idx1; i<idx1+2*len+1; i++) arr[i] = 0;
    tapes+=1;
}


while(true){
    if(arr.indexOf(1)===-1) break;
    taping(arr);
}
console.log(tapes);