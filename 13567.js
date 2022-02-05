const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const M = input[0].split(' ').map(e => parseInt(e))[0];
const n = input[0].split(' ').map(e => parseInt(e))[1];

const orders = [];
for(let i=1; i<n+1; i++) orders.push(input[i]);

let cnt = 0;
let tmp = 'east';
let x = 0;
let y = 0;
while(cnt<n){
    const order = orders[cnt].split(' ');
    if(order[0] === 'MOVE'){
        const num = parseInt(order[1]);
        if(tmp==='east') x+= num;
        else if(tmp==='west') x-= num;
        else if(tmp==='north') y+=num;
        else y-= num;
    }
    else{
        if(order[1]==='0'){
            if(tmp==='east') tmp = 'north';
            else if(tmp==='north') tmp = 'west';
            else if(tmp==='west') tmp = 'south';
            else tmp = 'east';
        } else{
            if(tmp==='east') tmp='south';
            else if(tmp==='south') tmp = 'west';
            else if(tmp==='west') tmp = 'north';
            else tmp ='east'
        }
    }
    if(x > M || x < 0 || y > M || y  < 0) break;
    cnt++;
}
console.log(cnt)
if(cnt!==n) console.log(-1);
else console.log(x, y);