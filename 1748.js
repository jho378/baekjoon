const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim();

let N = parseInt(input);

let i = 0;
let res = 0;
while(N > 0){
    if (N - 9*Math.pow(10, i) > 0){
        res += 9*Math.pow(10,i) * (i+1);
        N-= 9*Math.pow(10,i);
        i++;
    }   else {
        break;
    }
}
res+= N*(i+1);

console.log(res)