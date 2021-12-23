const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(' ');

const data = input.map(e => parseInt(e));
const full = [100, 100, 200, 200, 300, 300, 400, 400, 500];

if(data.some((e, i) => e> full[i])) console.log('hacker');
else if(data.reduce((p,c)=> p+c, 0)>=100)    console.log('draw');
else console.log('none');