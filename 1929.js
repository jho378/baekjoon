const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

for(let i=a; i<b+1; i++){
    const root = Math.sqrt(i);
    let isPrime = true;
    if(i===1) isPrime = false;
    for(let j=2; j<=root; j++){
        if(i%j===0){
            isPrime = false;
            break;
        }
    }
    if(isPrime===true) console.log(i);
}