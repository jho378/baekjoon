const fs= require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let balls = parseInt(input[0]);
const box = parseInt(input[1]);

if(balls < (box+1)*box/2) console.log(-1);

else{
    balls -= (box+1)*box/2;
    if(balls%box===0)    console.log(box-1); 
    else console.log(box);
}