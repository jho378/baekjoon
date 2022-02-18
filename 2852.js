const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data =[];
for(let i=1; i<N+1; i++) data.push(input[i].split(' '));

let score1 = 0;
let score2 = 0;
let time1 = 0;
let time2 = 0;
let isWinning = false;

let tmp = 0;
for(let i=0; i<data.length; i++){
    const score = parseInt(data[i][0]);
    const min = data[i][1].split(':')[0];
    const sec = data[i][1].split(':')[1];
    const time = parseInt(min)*60 + parseInt(sec);
    if(score===1) score1+=1;
    if(score===2) score2+=1;
    if(isWinning === true && score1>score2) time1 += time - tmp;
    else if(isWinning === true && score1<score2) time2 += time - tmp;
    else if(isWinning === true && score ===1) time2 += time - tmp;
    else if(isWinning === true && score ===2) time1 += time - tmp;
    if(score1!==score2) isWinning = true;
    if(score1===score2) isWinning = false;
    tmp = time;
    if(i===N-1 && score1>score2) time1 += 48*60-time;
    else if(i===N-1 && score1<score2) time2+=48*60-time;
}
const min1 = String(Math.floor(time1/60));
const sec1 = String(Math.floor(time1%60));
const min2 = String(Math.floor(time2/60));
const sec2 = String(Math.floor(time2%60));

console.log(`${min1.padStart(2, '0')}:${sec1.padStart(2, '0')}`);
console.log(`${min2.padStart(2, '0')}:${sec2.padStart(2, '0')}`);