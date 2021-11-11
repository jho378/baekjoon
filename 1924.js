const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(" ");

const m = parseInt(input[0]);
const d = parseInt(input[1]);
const arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
let sum =0;
if(m===1)   sum = d;
else{
    for(let i=0; i<m-1; i++){
        sum+= arr[i]
    }
    sum += d;
}
const res = sum % 7;
console.log(day[res]);