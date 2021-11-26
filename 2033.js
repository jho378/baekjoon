const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim();
const length = input.length;
const N = parseInt(input);
let res = N;
for(let i=0; i<length-1; i++){
    if(i===0){
        if(res%Math.pow(10, i+1)>=5) res = Math.ceil(res/10) * 10;
        else    res = Math.floor(res/10) * 10;
    }
    else{
        if((res%Math.pow(10, i+1))/Math.pow(10, i) >=5) res = Math.ceil(res/Math.pow(10, i+1)) * Math.pow(10, i+1);
        else res = Math.floor(res/Math.pow(10, i+1)) * Math.pow(10, i+1);
    }
}

if(res/Math.pow(10, length) > 1){
    if((res%Math.pow(10, length))/ Math.pow(10, length-1)>= 5) res = Math.ceil(res/Math.pow(10,length)) * Math.pow(10, length);
    else res = Math.floor(res/Math.pow(10,length)) * Math.pow(10, length);
}

console.log(res);