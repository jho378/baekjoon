const fs = require('fs');
const input = fs.readFileSync('a.txt').toString();
const N = parseInt(input);

const fib = (n) => {
    if(n===0 || n===1)   return n;
    else return fib(n-1) + fib(n-2);
}
console.log(fib(N));