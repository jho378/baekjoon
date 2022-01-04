const fs =require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim();

let res = '';
str[0] === 'E' ? res+='I' : res+='E';
str[1] === 'N' ? res+='S' : res+='N';
str[2] === 'T' ? res+='F' : res+='T';
str[3] === 'P' ? res+='J' : res+='P';

console.log(res);