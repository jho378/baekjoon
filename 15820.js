const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const X = parseInt(input[0].split(' ')[0]);
const Y = parseInt(input[0].split(' ')[0]);

let sample = true;
for(let i=1; i<X+1; i++){
    const data = input[i].split(' ');
    if(data[0]!==data[1]) sample = false;
}
if(!sample) console.log('Wrong Answer');
else{
    let test = true;
    for(let i=X+1; i<X+Y+1; i++){
        const data = input[i].split(' ');
        if(data[0]!==data[1]) test = false;
    }
    if(test===true) console.log('Accepted');
    else console.log('Why Wrong!!!');
}