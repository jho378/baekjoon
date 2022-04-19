const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(' ');

const [A, B] = input.map(e => parseInt(e));

const arr = new Array(A).fill(false);
let cnt = 0;

let res = 0;
for (let i=2; i<A+1; i++){
    for(let j=0; j<A; j++){
        if ((j+1) % i ===0 && arr[j] === false){
            arr[j] = true;
            cnt+=1;
            if(cnt===B){
                res = j+1;
            }
        }   else if ((j+1) & i === 0){
            continue;
        }
    }
}
console.log(res);