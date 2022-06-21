const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);


const addNum = (string1 , string2) => {
    
    const arr1 = string1.split('').map(e => parseInt(e));
    const arr2 = string2.split('').map(e => parseInt(e));
    const max = Math.max(arr1.length, arr2.length) + 1 ;
    if (max === arr1.length + 1 ){
        let diff = max - arr2.length ;
        while(diff--){
            arr2.unshift(0);
        }
        arr1.unshift(0);
    }   else {
        let diff = max - arr1.length;
        while(diff--){
            arr1.unshift(0)
        }
        arr2.unshift(0);
    }
    const result = [];
    for (let i=0; i<max; i++){
        result.push(arr1[i] + arr2[i]);
    }
    for (let i=max-1; i>=0; i--){
        if (result[i]>=10){
            if (i>=1){
                result[i] -= 10;
                result[i-1] +=1;
            }
        }
    }
    
    const resultString = String(result.join(''));
    return resultString;
}

const fib = ['1', '1'];
for(let i=2; i<N; i++){
    fib.push(addNum(fib[i-1], fib[i-2]));
    
}
let res = fib[N-1].split('');
let sum = 0;
for(let i=0; i<res.length; i++){
    if (res[i] === '0'){
        sum+=1;
    }   else {
        break;
    }
}
res = res.slice(sum, res.length);
console.log(res.join('')); 
