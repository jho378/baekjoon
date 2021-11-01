const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const N = parseInt(input);
let X = parseInt(input);

const f = x => (x%10)*10 + (Math.floor(x/10) + x%10)%10;

let cnt = 0;
do{
    X = f(X);
    cnt++;
}   while(X!==N);
console.log(cnt);