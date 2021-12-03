const fs= require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
let i=1; 
let x = 1;
while(i<input.length-1){
    const count = parseInt(input[i]);
    let cnt = 0;
    for(let j=0; j<count; j++){
        if(input[i+1].slice(j, j+1)!== input[i+2].slice(j, j+1))    cnt+=1;
    }
    console.log(`Case ${x}: ${cnt}`);
    i+=3;
    x+=1;
}