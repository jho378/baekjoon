const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(' ');

const [x, y] = [parseInt(input[0]), parseInt(input[1])];

const res = [];
res.push(x);
let ans = 0;
while(1){
    const len = res.length;
    const prev = res[len-1];
    const cur = Math.pow((prev%10), y) + Math.pow((Math.floor(prev/10))%10, y) + Math.pow((Math.floor(prev/100)%10), y) + Math.pow((Math.floor(prev/1000)%10), y) + Math.pow((Math.floor(prev/10000)%10), y) + Math.pow((Math.floor(prev/100000)%10), y)
    
    if(res.includes(cur)){
        ans = res.indexOf(cur);
        break;
    }
    else res.push(cur);
}

console.log(ans)