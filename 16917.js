const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(' ');

const [A, B, C, X, Y] = input.map(e => parseInt(e));

if(2*C>A+B) console.log(A*X + B*Y);
else if(X>=Y) console.log(Math.min((C*2*Y + (X-Y)*A), C*2*X));
else console.log(Math.min((C*2*X + (Y-X)*B), C*2*Y));
