const fs= require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
let cnt = 0 
for(let i=1; i<N+1; i++)    data.push(input[i].split(' ').map(e => parseInt(e)));

let dots = [];
for(let i=0; i<data.length; i++){
    const x = data[i][0];
    const y = data[i][1];
    for(let j=x; j<x+10; j++){
        for(let k=y; k<y+10; k++){
            dots.push(100*j + k);
        }
    }
    dots = dots.filter((e,i) => dots.indexOf(e) === i);
}

for(let i=0; i<dots.length; i++){
    const x = Math.floor(dots[i]/100);
    const y = dots[i]%100;
    
    if(!dots.includes((x-1)*100+y)) cnt+=1;
    if(!dots.includes((x+1)*100+y)) cnt+=1; 
    if(!dots.includes(100*x+y+1)) cnt+=1;
    if(!dots.includes(100*x+y-1))    cnt+=1;
}
console.log(cnt);