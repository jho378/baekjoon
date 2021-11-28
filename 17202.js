const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
const A = input[0];
const B = input[1];
let data = [];
for(let i=0; i<8; i++){
    data.push(parseInt(A.slice(i, i+1)));
    data.push(parseInt(B.slice(i, i+1)));
}

const func = (arr) => {
    const newArr = [];
    for(let i=0; i<arr.length; i++) newArr.push((arr[i] + arr[i+1])%10)
    return newArr;
}

let res = data;
let j =14;
while(j--){
    res = func(res); 
}
console.log(res[0].toString() + res[1].toString());