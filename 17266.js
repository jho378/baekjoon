const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);

const location = input[2].split(' ').map(e => parseInt(e));

let max = -1;
for(let i=1; i<location.length; i++){
    max = Math.max(max, location[i]-location[i-1]);
}
max = Math.max(max, location[0]);
max = Math.max(max, N-location[location.length-1]);
console.log(Math.ceil(max));