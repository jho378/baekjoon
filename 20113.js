const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const data = input[1].split(' ').map(e => parseInt(e));

const cntArr = new Array(data.length+1).fill(0);

data.forEach(e => cntArr[e]+=1);

const max = cntArr.reduce((p,c) => Math.max(p,c), -1);
if(cntArr.indexOf(max) === 0){
    if(cntArr.filter(e => e===max).length===1){
        const secondMax = cntArr.slice(1).reduce((p,c) => Math.max(p,c), -1);
        if(cntArr.filter(e => e===max).length===1)  console.log(cntArr.indexOf(secondMax));
        else console.log('skipped');
    }
    else if(cntArr.filter(e => e===max).length===2) console.log(cntArr.lastIndexOf(max));
    else console.log('skipped');
}
else if(cntArr.indexOf(max)!==0){
    if(cntArr.filter(e => e===max).length===1)    console.log(cntArr.indexOf(max));
    else console.log('skipped');
}
