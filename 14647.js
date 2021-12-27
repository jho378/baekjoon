const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
const N = parseInt(input[0].split(' ')[0]);
const M = parseInt(input[0].split(' ')[1]);

const count = (str) => {
    const num = parseInt(str);
    let cnt = 0;
    if(Math.floor(num/1000) === 9)  cnt+=1;
    if(Math.floor(num/100)%10 === 9)   cnt+=1;
    if(Math.floor(num/10)%10 === 9)    cnt+=1;
    if(num%10===9)  cnt+=1;
    return cnt;
}

const data = [];
for(let i=1; i<N+1; i++) data.push(input[i].trim().split(' '));
for(let i=0; i<N; i++){
    for(let j=0; j<M; j++){
        data[i][j] = count(data[i][j]);
    }
}


const row = [];
const col = [];

for(let i=0; i<data.length; i++){
    let arr = data[i];
    arr = arr.reduce((p,c) => p+c, 0);
    row.push(arr);
}

for(let j=0; j<M; j++){
    let res =0;
    for(let i=0; i<N; i++){
        res+= data[i][j];
    }
    col.push(res);
}
let max = Math.max(...row, ...col);

const total = row.reduce((p,c) => p+c, 0);
console.log(total-max);

