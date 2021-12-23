const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const color = [];
let num = [];
for(let i=0; i<input.length; i++) color.push(input[i].split(' ')[0]);
for(let i=0; i<input.length; i++) num.push(input[i].split(' ')[1]);

num = num.map(e => parseInt(e));
for(let i=0; i<num.length; i++){
    for(let j=i+1; j<num.length; j++){
        if(num[j]<num[i]){
            let tmp = num[j];
            num[j] = num[i];
            num[i] = tmp; 
        }
    }
}
let cnt = new Array(9).fill(0);
for(let i=0; i<num.length; i++) cnt[num[i] -1]+=1;

let res = 0;
// 1
if(color[0]=== color[1] && color[1] === color[2] && color[2] === color[3] && color[3] === color[4] && num[4] === num[3]+1 && num[3] === num[2] + 1 && num[2] === num[1]+1 && num[1] === num[0]+1)    res = 900 + num[4];
// 4
else if(color[0]=== color[1] && color[1] === color[2] && color[2] === color[3] && color[3] === color[4]) res = 600 + num[4];
// 5
else if(num[4] === num[3]+1 && num[3] === num[2] + 1 && num[2] === num[1]+1 && num[1] === num[0]+1) res = 500+ num[4];
// 2
else if(Math.max(...cnt) === 4) res= 800 + 1 + cnt.indexOf(4);
//3
else if(Math.max(...cnt) === 3 && cnt.indexOf(2)!= -1)  res = 10 * (cnt.indexOf(3)+1)+ cnt.indexOf(2)+1 + 700;
// 6
else if(Math.max(...cnt) === 3) res = cnt.indexOf(3)+1+400;
// 7
else if(Math.max(...cnt) === 2 && cnt.indexOf(2)!== cnt.lastIndexOf(2)) res = 300 + cnt.indexOf(2)+1 + (cnt.lastIndexOf(2)+1)*10;
// 8
else if(Math.max(...cnt) === 2) res = cnt.indexOf(2) + 1 + 200;
// 9 
else res = num[4] + 100;

console.log(res);
