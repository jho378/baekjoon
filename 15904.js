const fs = require('fs');
let str = fs.readFileSync('/dev/stdin').toString().trim();

const idxU = str.indexOf('U');
str = str.slice(idxU);
const idxC = str.indexOf('C');
str = str.slice(idxC);
const idxP = str.indexOf('P');
str = str.slice(idxP);
const idx_C = str.lastIndexOf('C');

if(idxU===-1 || idxC === -1 || idxP===-1 || idx_C===-1) console.log('I hate UCPC');
else console.log('I love UCPC');