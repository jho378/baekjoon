const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim()

const n = parseInt(input);
// 20 E6 /12 + 8  = E 
// / 10 = 0 -> 6 
const alpha = 'ABCDEFGHIJKL';
const num = '0123456789'
let _alpha = "";
if(n%12>=4) _alpha =alpha.slice(n%12-4, n%12-3);
else _alpha = alpha.slice(n%12 + 8 , n%12 + 9);

let _num = "";
if(n%10<4) _num = num.slice(n%10+6, n%10+7);
else _num = num.slice(n%10 -4, n%10 -3);

let res = _alpha + _num;
console.log(res);