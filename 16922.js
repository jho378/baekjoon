const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim();
const N = parseInt(input);

const data = [];

for(let i=0; i<=N; i++){
    for(let j=0; j<=N; j++){
        if(i+j>N) break;
        for(let k=0; k<=N; k++){
            if(i+j+k>N) break;
            const arr = [i, j, k, N-i-j-k]
            data.push(arr);
        }
    }
}

const res = [];

for(let i=0; i<data.length; i++){
    const sum = data[i][0] + data[i][1]*5 + data[i][2]*10 + data[i][3]*50;
    res.push(sum);
}
console.log(res.filter((elem,idx) => res.indexOf(elem)===idx).length);
