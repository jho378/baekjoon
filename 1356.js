const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim();
let special = false;

let i=0;
while(i<input.length){
    let front = 1;
    let back = 1;
    const frontPart = input.slice(0, i);
    const backPart = input.slice(i, input.length);
    for(let j=0; j<frontPart.length; j++){
        front*=parseInt(frontPart.slice(j,j+1));
    }
    for(let k=0; k<backPart.length; k++){
        back*=parseInt(backPart.slice(k,k+1));
    }
    if(front === back)  special = true;
    i++
}
if(parseInt(input)===1) console.log('NO');
else special ? console.log('YES') : console.log('NO');