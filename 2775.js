const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n")

// a층 b호
const func = (a, b) => {
    if(a===0) return b;
    else if(a===1) return b*(b+1)/2
    else if(b===1) return 1;
    else if(b===2) return a+2;
    else if(b===3) return (a+2) * (a+3) /2;
    else return func(a-1, b) + func(a, b-1);
}

let i=1; 
while(i<input.length){
    console.log(func(parseInt(input[i]), parseInt(input[i+1])));
    i += 2;
}

// 재귀함수 돌 때 조건을 더 주니까 시간이 절반으로 줄었어요