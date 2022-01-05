const fs =require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const N = parseInt(input);

if(N%2===0) console.log('CY');
else console.log('SK');