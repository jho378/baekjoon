const fs = require('fs');
const input =fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const H = input[0].split(' ').map(e => parseInt(e))[0];
const W = input[0].split(' ').map(e => parseInt(e))[1];

const N = parseInt(input[1]);
const datas =[];
for(let i=2; i<N+2; i++) datas.push(input[i].split(' ').map(e => parseInt(e)));

const data = datas.filter(elem => (elem[0]<= H && elem[1] <= W) || (elem[0]<=W && elem[1]<=H));
const squares = [];

for(let i=0; i<data.length; i++){
    for(let j=i+1; j<data.length; j++){
        const [h1, w1, h2, w2] = [data[i][0], data[i][1], data[j][0], data[j][1]];
        if(h1*w1+ h2*w2> H*W) continue;
        
        const _max = Math.max(H, W);
        if(H >= h1+h2 && W>=Math.max(w1, w2)) squares.push(h1*w1 + h2*w2);
        else if(H>= h1+w2 && W>=Math.max(h2, w1))   squares.push(h1*w1 + h2*w2);
        else if(H>= w1+h2 && W>=Math.max(h1, w2))   squares.push(h1*w1 + h2*w2);
        else if(H>= w1+w2 && W>=Math.max(h1, h2))   squares.push(h1*w1 + h2*w2);
        else if(W>= h1+h2 && H>=Math.max(w1, w2))   squares.push(h1*w1 + h2*w2);
        else if(W>= h1+w2 && H>=Math.max(h2, w1))   squares.push(h1*w1 + h2*w2);
        else if(W>= w1+h2 && H>=Math.max(h1, w2))   squares.push(h1*w1 + h2*w2);
        else if(W>= w1+w2 && H>=Math.max(h1, h2))   squares.push(h1*w1 + h2*w2);
        else continue;
    }
}

if(squares.length===0) console.log(0);
else console.log(squares.reduce((p,c) => Math.max(p,c), -1));