const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const N = parseInt(input[0]);
const x = parseInt(input[1]);
const y = parseInt(input[2]);

for(let i=0; i<N; i++){
    let str ='';
    for(let j=0; j<N; j++){
    // if odd sum given, v at odds
        if((x+y)%2===0){
            if((i+j)%2===0) str+='v';
            else str+='.';
        }
        else{
            if((i+j)%2===1) str+='v';
            else str+='.';
        }
    }
    console.log(str);
}