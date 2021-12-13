const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().split('\n');
console.log(input)
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const msg = input[0];
const code = input[1];
let str = '';
for(let i=0; i<msg.length; i++){
    if(msg.slice(i, i+1)===' ') str+=msg.slice(i, i+1);
    else{
        const codeLen = code.length;
        const idx = alphabet.indexOf(code.slice(i%codeLen, i%codeLen+1));
        if((alphabet.indexOf(msg.slice(i, i+1)) - idx + 26)%26===0) str+='z';
        // else if((alphabet.indexOf(msg.slice(i, i+1)) - idx + 26)%26===25)   str+='a';
        else str += alphabet.slice((alphabet.indexOf(msg.slice(i, i+1)) - idx + 26)%26 -1,(alphabet.indexOf(msg.slice(i, i+1)) - idx + 26)%26);
    }
}
console.log(str);