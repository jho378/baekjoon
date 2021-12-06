const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
const req = parseInt(input[0].split(' ')[0]);
const N = parseInt(input[0].split(' ')[1]);
const data = [];
for(let i=1; i<N+1; i++)    data.push(input[i].trim().split(' '));
const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let total = 0;
for(i=0; i<data.length; i++){
    total+= 24 * (day.indexOf(data[i][2]) - day.indexOf(data[i][0]))+ parseInt(data[i][3])-parseInt(data[i][1]);
}

if(total>= req) console.log(0);
else if(req>total && req<=total+48)  console.log(req - total);
else console.log(-1)