const fs= require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);

const enter = input.slice(1,N+1);
const exit = input.slice(N+1);

const res = [];
let cnt = 0;

while(enter.length!==0){
    res.push(exit.indexOf(enter.pop()));
}
for(let i=0; i<N; i++){
    for(let j=i+1; j<N; j++){
        if(res[i]<res[j]){
            cnt+=1;
            break;
        }
    }
}
console.log(cnt);
