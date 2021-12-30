const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const startingTime = input[0].split(":").map(e => parseInt(e));
const endingTime = input[1].split(":").map(e => parseInt(e));

const startingValue = startingTime[0]*3600+startingTime[1]*60+startingTime[2];
const endingValue = endingTime[0]*3600+endingTime[1]*60+endingTime[2];

const remainingSeconds = 0;
if(startingValue<=endingValue)  remainingSeconds = endingValue - startingValue;
else remainingSeconds = endingValue + 60*60*24 - startingValue;

const hh = Math.floor(remainingSeconds/3600);
const mm = Math.floor((remainingSeconds - hh*3600)/60);
const ss = Math.floor(remainingSeconds%60);

console.log(`${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`);
