
const fs =require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);

const data = [];
for(let i=1; i<N+1; i++){
    data.push(input[i].split(" "));
}

for(i=0; i<data.length; i++){
    
    const x1 = parseInt(data[i][0]);
    const y1 = parseInt(data[i][1]);
    const r1 = parseInt(data[i][2]);
    const x2 = parseInt(data[i][3]);
    const y2 = parseInt(data[i][4]);
    const r2 = parseInt(data[i][5]);
    if(x1 === x2 && y1 === y2 && r1 === r2)    console.log(-1);
    else if(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2) > Math.pow(r1+r2,2) || Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2) < Math.pow(r1-r2, 2))   console.log(0);
    else if(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2) === Math.pow(r1+r2,2) || Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2) === Math.pow(r1-r2, 2))    console.log(1);
    else if(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2) < Math.pow(r1+r2,2) && Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2) > Math.pow(r1-r2, 2))  console.log(2);
    else;
}