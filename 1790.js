const fs= require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(' ');

const N = parseInt(input[0]);
let k = parseInt(input[1]);

let i=1;
while(k - 9*Math.pow(10,i-1)*i > 0){
    k -= 9*Math.pow(10,i-1)*i
    i++;
}
const num = Math.pow(10, i-1) + Math.ceil(k/i) -1;
if(num > N) console.log(-1);
else{
    k = (k - Math.ceil(k/i)*i + i);
    const res = String(num);
    console.log(res[k-1]);
}