const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().split('\n');

for(let i=0; i<input.length -1; i++){
    const string = input[i];
    let lower = 0;
    let upper = 0;
    let num = 0;
    let whiteSpace = 0;
    for(let j=0; j<string.length; j++){
        if(96<string.charCodeAt(j) && string.charCodeAt(j)<123) lower+=1;
        else if(64<string.charCodeAt(j) && string.charCodeAt(j)<91) upper+=1;
        else if(47<string.charCodeAt(j) && string.charCodeAt(j)<58) num+=1;
        else if(string.charCodeAt(j)===32) whiteSpace+=1;
    }
    console.log(lower, upper, num, whiteSpace)
}
