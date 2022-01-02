const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = parseInt(input[0]);
const first = parseInt(input[1]);
let second = 0;
if(first === 0) second = 1;
else if(first === 1) second = 0;
if(N===2) console.log(second);
else if(N===3)  console.log(`${second}\n${first}`);
else if(N===4)  console.log(`${second}\n${first}\n${second}`);
else if(N===5)  console.log(`${second}\n${first}\n${second}\n${first}`);

if(N>=6) console.log('Love is open door');
