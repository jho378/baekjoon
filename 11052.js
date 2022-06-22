const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = input[1].split(' ').map(e => parseInt(e));

const arr = [data[0]];

for (let i=1; i<data.length; i++){
    let prevMax = 0;
    for (let j=0; j<i/2; j++){
        prevMax = Math.max(prevMax, arr[j] + arr[i-j-1]);
    }
    const validMax = Math.max(prevMax, data[i]);
    arr.push(validMax);
}

console.log(arr[N-1]);