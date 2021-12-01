const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input);

for(let i=0; i<n; i++){
    let str = '*'.repeat(i+1);
    console.log(str);
}
for(i=n-1; i>0; i--){
    str = '*'.repeat(i);
    console.log(str);
}