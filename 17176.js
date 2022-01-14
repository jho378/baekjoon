const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);

const upperAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerAlphabets = 'abcdefghijklmnopqrstuvwxyz';

const decoded = [];
const str = input[2];
for(let i=0; i<str.length; i++){
    const letter = str.slice(i, i+1);
    if(upperAlphabets.indexOf(letter)!==-1) decoded.push(upperAlphabets.indexOf(letter) + 1);
    else if(lowerAlphabets.indexOf(letter)!==-1) decoded.push(lowerAlphabets.indexOf(letter)+27);
    else decoded.push(0);
}

const data = input[1].split(' ').map(e => parseInt(e));

const decodedCnt = new Array(53).fill(0);
const dataCnt = new Array(53).fill(0);

data.forEach(e => dataCnt[e]+=1);
decoded.forEach(e => decodedCnt[e]+=1);

let canDecode = 'y';
for(let i=0; i<53; i++){
    if(dataCnt[i]!==decodedCnt[i]) canDecode ='n';
}
console.log(canDecode);