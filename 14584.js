const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

let encrypted = input[0].trim();
const N = parseInt(input[1]);
const data = [];
for(let i=2; i<N+2; i++){
    data.push(input[i].trim());
}
let isDecoded = false;
for(let i=0; i<26; i++){
    if(isDecoded) break;
    let decoded = [];
    for(let j=0; j<encrypted.length; j++){
        decoded.push(encrypted.charCodeAt(j));
    }
    decoded = decoded.map(e => 97 + (e+i -97)%26);
    decoded = decoded.map(e => String.fromCharCode(e));
    decoded = decoded.join('');
    for(let j=0; j<data.length; j++){
        if(decoded.indexOf(data[j])!==-1){
            console.log(decoded);
            isDecoded = true;
            break;
        }
    }
}