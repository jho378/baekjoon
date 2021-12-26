const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++) data.push(input[i].trim().split(''));

let max = 0;
let maxRow =0;
for(let i=0; i<N; i++){
    let cnt=0;
    for(let j=0; j<N; j++){
        if(data[i][j]==='*')    cnt+=1;
    }
    max = Math.max(max, cnt);
    if(max===cnt)   maxRow = i;
}

const headCol = data[maxRow-1].indexOf('*');

const leftArm = headCol - data[maxRow].indexOf('*');
const rightArm = data[maxRow].lastIndexOf('*') - headCol;

let waist = 0;
for(let i=maxRow+1; i<N; i++){
    if(data[i][headCol]==='*')  waist+=1;
    else break;
}
let leftLeg = 0, rightLeg =0;
for(let i=maxRow + waist +1; i<N; i++){
    if(data[i][headCol-1]==='*')    leftLeg+=1;
    if(data[i][headCol+1]==='*')    rightLeg+=1;
}
console.log(maxRow+1, headCol+1);
console.log(leftArm, rightArm, waist, leftLeg, rightLeg);