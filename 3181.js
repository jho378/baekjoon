const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(' ');

const exception = ['i', 'pa', 'te', 'ni', 'niti', 'a', 'ali', 'nego', 'no', 'ili'];

for(let i=input.length-1; i>0; i--){
    for(let j=0; j<exception.length; j++){
        if(input[i]=== exception[j])    input.splice(i, 1);
    }
}
let res = "";
console.log(input);
for(let i=0; i<input.length; i++){
    res+= input[i][0].toUpperCase();
}
console.log(res);