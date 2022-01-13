const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim();

const data = [];
for(let i=0; i<input.length; i++){
    data.push(input.slice(i));
}

data.sort((p,c) => {
    if(p<c) return -1;
    if(c>p) return 1;
})
data.forEach(e => console.log(e));