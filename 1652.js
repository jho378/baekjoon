const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
const N = parseInt(input[0]);

const data = [];
for(let i=1; i<N+1; i++) data.push(input[i].split(''));

let rowCnt = 0;
let colCnt = 0;

for(let i=1; i<N+1; i++){
    const row = input[i].split('X');
    for(let j=0; j<row.length; j++){
        if(row[j].length>1) rowCnt+=1;
    }
}

for(let j=0; j<N; j++){
    let str = "";
    for(let i=0; i<N; i++)  str+= data[i][j];
    const col = str.split('X');
    for(let k=0; k<col.length; k++){
        if(col[k].length>1) colCnt+=1;
    }
}

console.log(rowCnt, colCnt);