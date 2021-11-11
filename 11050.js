const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

const fact = (n) => {
    let res = 1;
    for(let i=1; i<=n; i++){
        res *=i;        
    }
    return res;
}

console.log(fact(A)/(fact(B)*fact(A-B)));
