const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const data = [];
for(let i=0; i<input.length -1; i++){
    data.push(parseInt(input[i]));
}
console.log(data);
for(let i=0; i<data.length; i++){
    if(data[i]%2===0)   console.log(`even ${data[i]/2}`);
    else console.log(`${i+1}. odd ${(data[i]-1)/2}`)
}