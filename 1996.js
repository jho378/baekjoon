const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);

const data = [];
for(let i=1; i<N+1; i++) data.push(input[i].split(''));

for(let i=0; i<N; i++){
    const datas = data[i].map(e => parseInt(e));
    datas.forEach((e, idx)=> {
        if(isNaN(e)) datas[idx] =0;
    })    
    datas.push(0);
    datas.unshift(0);
    data[i] = datas;
}
const zero = new Array(N+2).fill(0);

data.push(zero);
data.unshift(zero);

for(let i=1; i<N+1; i++){
    let str = "";
    for(let j=1; j<N+1; j++){        
        if(data[i][j]!==0) str+="*";
        else{
            let sum = 0;
            sum += data[i-1][j-1] + data[i-1][j] + data[i-1][j+1]
            + data[i][j-1] + data[i][j+1] + data[i+1][j-1] + data[i+1][j] + data[i+1][j+1];
            if(sum>=10) str+='M';
            else str += String(sum);
        }
    }
    console.log(str);
}