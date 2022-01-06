const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(e => parseInt(e));

const data = [];
const arr = new Array(10101).fill(0);

for(let i=1; i<N+1; i++) data.push(input[i].split(' ').map(e => parseInt(e)));

for(let i=0; i<data.length; i++){
    const x1 = data[i][0];
    const y1 = data[i][1];
    const x2 = data[i][2];
    const y2 = data[i][3];

    for(let j=x1; j<=x2; j++){
        for(let k=y1; k<=y2; k++){
            arr[100*j+k] +=1;
        }
    }
}
console.log(arr.filter(e => e>M).length)