const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const name = input[0];
const _name = input[1];

const alphabets1 = 'CLOSUVWZ';
const alphabets2 = 'BDGJKMNPQRTXY';
const alphabets3 = 'AEFHI'

let combination = '';
for(let i=0; i<name.length; i++){
    combination+= name.slice(i, i+1);
    combination+= _name.slice(i, i+1);
}

let valueArr = combination.split('').map(e => {
    if(alphabets1.includes(e))  return 1;
    else if(alphabets2.includes(e)) return 2;
    else if(alphabets3.includes(e)) return 3;
})
let sol = valueArr;
while(sol.length !== 2){
    for(let i=0; i<sol.length-1; i++){
        sol[i] = (valueArr[i]+valueArr[i+1])%10;
    }
    sol.pop();
    valueArr = sol;
}


console.log((sol[0]*10 + sol[1]).toString().padStart(2, '0'));
