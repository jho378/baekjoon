const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);


const candidate1 = [];
const candidate2 = [];
const candidate3 = []; 

for(let i=1; i<N+1; i++){
    const data = input[i].split(' ').map(e => parseInt(e));
    candidate1.push(data[0]);
    candidate2.push(data[1]);
    candidate3.push(data[2]);
}
const candidates = [candidate1, candidate2, candidate3];
const sum1 = candidate1.reduce((p,c) => p+c, 0);
const sum2 = candidate2.reduce((p,c) => p+c, 0);
const sum3 = candidate3.reduce((p,c) => p+c, 0);

const arr = [sum1, sum2, sum3];
const max = arr.reduce((p,c) => Math.max(p,c), -1);
if(arr.indexOf(max)===arr.lastIndexOf(max)) console.log(`${arr.indexOf(max) + 1} ${max}`);
else{
    arr.forEach((sum,i) => {
        if(sum!==max) candidates[i] = 0;
    })
    const counts3 = [];
    for(let i=0; i<candidates.length; i++){
        if(candidates[i]===0){
            counts3.push(-1);
            continue;
        }
        counts3.push(candidates[i].filter(e => e===3).length);
    }
    const max3 = counts3.reduce((p,c) => Math.max(p,c), -1);
    if(counts3.indexOf(max3) === counts3.lastIndexOf(max3)) console.log(`${counts3.indexOf(max3)+1} ${max}`);
    else{
        const counts2 = [];
        for(let i=0; i<candidates.length; i++){
            if(candidates===0 || counts3[i]!==max3){
                counts2.push(-1);
                continue;
            }
            else{
                counts2.push(candidates[i].filter(e => e===2).length);
            }
        }
        const max2 = counts2.reduce((p,c) => Math.max(p,c), -1);
        if(counts2.indexOf(max2) === counts2.lastIndexOf(max2)) console.log(`${counts2.indexOf(max2)+1} ${max}`);
        else console.log(`0 ${max}`);
    }
}