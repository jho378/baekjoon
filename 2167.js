const fs= require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0].split(" ")[0]);
const M = parseInt(input[0].split(" ")[1]);
const cases = parseInt(input[N+1]);

const data = [];
for(let i=1; i<N+1; i++) data.push(input[i].split(' ').map(e => parseInt(e)));

const ranges = [];
for(let i=N+2; i<N+2+cases; i++) ranges.push(input[i].split(' ').map(e => parseInt(e)));

for(let i=0; i<cases; i++){
    const [m, n, x, y] = ranges[i];
    let sum = 0;
    for(let j=m-1; j<x; j++){
        for(k=n-1; k<y; k++){
            sum+=data[j][k]
        }
    }
    console.log(sum);
}