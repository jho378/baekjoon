const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = parseInt(input[0]);
const data = [];

const fact = (n) => {
    if(n===0)  return 1;
    let res = 1;
    for(let i=1; i<=n; i++){
        res *= i;
    }
    return res;
}

for(i=1; i<N+1; i++){
    data.push(input[i].trim().split(" "))
}

for(i=0; i<data.length; i++){
    const n = parseInt(data[i][1]);
    const r = parseInt(data[i][0]);
    console.log(Math.round(fact(n)/(fact(r) * fact(n-r))));
}

