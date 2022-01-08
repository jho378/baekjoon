const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
const alphabets = 'abcdefghijklmnopqrstuvwxyz';

for(let i=0; i<input.length -1; i++){
    const str = input[i];
    let cnt = 0;
    for(let j=0; j<alphabets.length; j++){
        if(str.indexOf(alphabets[j])!==-1 || str.indexOf(alphabets[j].toUpperCase())!==-1) cnt+=1;
    }
    console.log(cnt);
}