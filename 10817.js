const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(" ");

const data = [];
for(let i=0; i<input.length; i++) data.push(parseInt(input[i]));

const max = data.reduce((p,c)=> Math.max(p,c), 0);
const filteredArr = data.filter(e => e!==max);

if(filteredArr.length<=1) console.log(max);
else  console.log(filteredArr.reduce((p,c)=> Math.max(p,c),0));