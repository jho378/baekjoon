const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const now = input[0].split(' ').map(e => parseInt(e));

let seconds = now[0] * 60 * 60 + now[1] * 60 + now[2] + parseInt(input[1]);

const finalSeconds = seconds%(24*60*60);

const hour = Math.floor(finalSeconds/(60*60));
const minute = Math.floor((finalSeconds - hour * 60 * 60)/60);
const second = finalSeconds - hour * 60 * 60 - minute * 60;

console.log(`${hour} ${minute} ${second}`);