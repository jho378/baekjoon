const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = input.slice(1).map(e => parseInt(e));

const res = [];
const operators = [];

let isPlausible = true;
let num = 1;
while(data.length!==0){
    if(res.length === 0 && data.length === N){
        res.push(num++);
        operators.push("+");
        continue;
    }
    if(res[res.length-1] > data[0]){
        isPlausible = false;
        break;
    }   else if(res[res.length-1]===data[0]){
        res.pop();
        data.shift();
        operators.push("-");
    }   else {
        res.push(num++);
        operators.push("+");
    }
}

if(isPlausible === true){
    for(let i=0; i<operators.length; i++){
        console.log(operators[i]);
    }
}   else {
    console.log('NO');
}



// 코드 실행시간 차이
const arr = [];

let func1start = new Date();
const func1 = () => {
    const arr = [];
    for(let i=0; i<100000; i++){
        arr[i] = i;
    }
    for(let i=0; i<100000; i++){
        console.log(arr[i]);
    }
}
func1();
let func1end = new Date();

let func2start = new Date();
const func2 = () => {
    const arr = [];
    for(let i=0; i<100000; i++){
        arr[i] = i;
    }
    console.log(arr.join('\n'));
}
func2();
let func2end = new Date();

console.log(func1end-func1start, func2end-func2start);



