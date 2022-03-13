const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim();

let N = parseInt(input);
const prime = [];

for(let i=2; i<105; i++){
    let isPrime = true;
    for(let j=2; j<i; j++){
        if(i%j===0) isPrime = false;
    } 
    if(isPrime===true) prime.push(i);
}

const primeMultiply = [];
for(let i=0; i<prime.length-1; i++){
    primeMultiply.push(prime[i] * prime[i+1]);
}

primeMultiply.sort((a,b) => a-b);
for(let i=0; i<primeMultiply.length; i++){
    if(primeMultiply[i]>N){
        console.log(primeMultiply[i]);
        break;
    }
}