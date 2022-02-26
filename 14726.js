const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++) data.push(input[i]);

for(let i=0; i<N; i++){
    let arr = data[i].split('').map(e => parseInt(e));
    let res = 0;
    for(let j=0; j<arr.length; j++){
        if(j%2===1) res+= arr[j];
        else res += (arr[j]*2)%10 + Math.floor((arr[j]*2)/10);
    }
    console.log(res);
    if(res%10===0) console.log('T');
    else console.log('F')
}