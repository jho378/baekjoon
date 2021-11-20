const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];

for(let i=1; i<9*N+1; i++)    data.push(input[i].split(' '));


for(i=0; i<N; i++){
    let ys =0;
    let kr =0;
    for(let j=9*i; j<9*i+9; j++){
        ys += parseInt(data[j][0]);
        kr += parseInt(data[j][1]);
    }
    if(ys>kr)   console.log('Yonsei');
    else if(ys === kr)  console.log('Draw');
    else if(ys<kr)  console.log('Korea');
    else;

}
