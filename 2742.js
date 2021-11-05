const fs =require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const N = parseInt(input);
let str = "";
for(let i=N; i>0; i--){
    str += i+"\n";
}
console.log(str.trim())
