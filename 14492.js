const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);

const data = [];
for(let i=1; i<input.length; i++) data.push(input[i].split(' ').map(e => parseInt(e)));

const cntArr = [];
let k =0;

while(cntArr.length<N**2){
    let res = 0;
    for(let i=0; i<N; i++){
        for(let j=0; j<N; j++){
            res+= data[i][j] * data[N+j][k];
            if(res!==0) break;
        }
        cntArr.push(res);
        res =0;
    }
    k++;
}

console.log(cntArr.filter(e => e!==0).length);