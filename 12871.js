const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

let str1 = input[0];
let str2 = input[1];

while(str1.length<2501){
    str1 += str1;
}
while(str2.length<2501){
    str2 += str2;
}
str1 = str1.slice(0, 2500);
str2 = str2.slice(0, 2500);
if(str1===str2) console.log(1);
else console.log(0);