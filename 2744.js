const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim()

const solution = '';
for(let i=0; i<str.length; i++){
    if(str.charCodeAt(i)>=97)   solution+= str.slice(i, i+1).toUpperCase();
    else solution+=str.slice(i, i+1).toLowerCase();
}
console.log(solution);