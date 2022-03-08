const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim();

const N = parseInt(input);
const arr = [];
for(let i=0; i<2*N-2; i++){
    if(i%2===0){
        const right = "* ".repeat(i/2);
        const ctr = "*".repeat(4*N - 3 - 4*i/2)
        const left = " *".repeat(i/2);
        const res = right + ctr + left;
        arr.push(res);
    }
    if(i%2===1){
        const right = "* ".repeat(Math.floor(i/2)+1);
        const ctr = " ".repeat(4*N - 3 - 4*(Math.floor(i/2)+1));
        const left = " *".repeat(Math.floor(i/2)+1);
        const res = right + ctr + left;
        arr.push(res);
    }
}
for(let i=0; i<2*N-2; i++) console.log(arr[i]);
let center = '* '.repeat(2*N-1);
console.log(center.trim());
for(let i=2*N-3; i>-1; i--) console.log(arr[i]);