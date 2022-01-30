const fs= require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const M = parseInt(input[0].split(' ')[0]);
const N = parseInt(input[0].split(' ')[1]);
const startX = parseInt(input[1].split(' ')[0]);
const startY = parseInt(input[1].split(' ')[1]);
const cnt = parseInt(input[2]);
const x = cnt%(2*M);
const y = cnt%(2*N);

let resX = 0;
let resY = 0;

if(x<=M-startX) resX = x + startX;
else if(x<=2*M - startX) resX = 2*M - startX - x;
else resX = startX - (2*M - x) 

if(y<=N-startY) resY = y + startY;
else if(y<=2*N -startY) resY = 2*N - startY - y;
else resY = startY - (2*N - y);

console.log(resX, resY)