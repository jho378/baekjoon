const fs = require('fs');
const str = fs.readFileSync('a.txt').toString().trim();
for(let i=0; i<str.length; i+=10){
    console.log(str.slice(i, i+10));
}

