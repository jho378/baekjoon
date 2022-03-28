const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim();
const N = parseInt(input);

let start = "";
start += '*'.repeat(N);
start += ' '.repeat(2*N-3);
start += '*'.repeat(N);
let end = start;

let middle = "";
middle += ' '.repeat(N-1);
middle += '*';
middle += ' '.repeat(N-2);
middle += '*'
middle += ' '.repeat(N-2);
middle += '*';

console.log(start);
for(let i=1; i<N-1; i++){
    let str = " ".repeat(i);
    str += '*';
    str += ' '.repeat(N-2);
    str += '*';
    str += ' '.repeat(2*N - 3 - 2*i);
    str += '*';
    str += ' '.repeat(N-2);
    str += '*';
    console.log(str);
}
console.log(middle);
for(let i=N-2; i>0; i--){
    let str = " ".repeat(i);
    str += '*';
    str += ' '.repeat(N-2);
    str += '*';
    str += ' '.repeat(2*N - 3 - 2*i);
    str += '*';
    str += ' '.repeat(N-2);
    str += '*';
    console.log(str);
}
console.log(end);