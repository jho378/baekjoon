const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
const N = parseInt(input[0]);
const data = input.slice(1).map(e => parseInt(e));
const max = data.reduce((p,c) => Math.max(p,c), -1);

const minor = [];
for (let i=2; i<max; i++){
    let isMinor = true;
    for (let j=2; j<= Math.sqrt(i); j++){
        if(i % j === 0){
            isMinor = false;
            break;
        }
    }
    if(isMinor){
        minor.push(i);
    }
}
for (let i=0; i<N; i++){
    let idx = minor.findIndex(e => e>=data[i]/2);
    while(minor[idx]<data[i]){
        if (minor.indexOf(data[i] - minor[idx]) !== -1){
            console.log(`${data[i] - minor[idx]} ${minor[idx]}`);
            break;
        }
        idx++
    }
}
console.log(minor);

