const fs = require('fs');
let input = fs.readFileSync('a.txt').toString().trim().split(" ");
let cnt =0;
for(let i=0; i<input.length; i++){
    if(input[i]==="")   continue;
    else cnt+=1;
}

console.log(cnt);