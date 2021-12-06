const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
const N = parseInt(input[0]);
const data = [];
let res =0;
for(let i=1; i<N+1; i++)    data.push(parseInt(input[i]));

for(let i=0; i<N; i++){
    for(let j=i+1; j<N; j++){
        if(data[i]<data[j]){
            let tmp = data[i];
            data[i] = data[j];
            data[j] = tmp;
        }
    }
}
for(let i=0; i<data.length; i++){
    if(data[i] - i<=0) break;
    else    res += data[i] - i;
}
console.log(res);