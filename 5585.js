const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
let n = 1000 - parseInt(input);

let cnt = 0 
while(n!==0){
    if(n>=500){
        n-=500;
        cnt+=1;
    }
    else if(n>=100){
        n-=100;
        cnt+=1;
    }
    else if(n>=50){
        n-=50;
        cnt+=1;
    }
    else if(n>=10){
        n-=10;
        cnt+=1;
    }
    else if(n>=5){
        n-=5;
        cnt+=1;
    }
    else{
        n-=1;
        cnt+=1;
    }
}
console.log(cnt);