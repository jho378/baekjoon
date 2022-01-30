const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const n = parseInt(input[0]);
const data = [];
for(let i=1; i<n+1; i++) data.push(input[i].split(' ').map(e => parseInt(e)));

data.forEach((arr,idx) => {
    let max = -1;
    for(let i=0; i<3; i++){
        for(let j=i+1; j<4; j++){
            for(let k=j+1; k<5; k++){
                const num = (arr[i] + arr[j] + arr[k])%10;
                max = Math.max(max, num);
            }
        }
    }
    data[idx] = max;
})
const max = data.reduce((p,c) => Math.max(p,c), -1);
console.log(data.lastIndexOf(max)+1);