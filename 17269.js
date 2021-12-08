// 아래처럼 풀면 이름 길이로 100같은 것 들어오면 overflow나나봐요
const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
const data = [];
const obj = {A:3, B:2, C:1, D:2, E:4, F:3, G:1, H:3, I:1, J:1, K:3, L:1, M:3, N:2, O:1, P:2, Q:2, R:2, S:1, T:2 , U:1, V:1, W:1, X:2, Y:2, Z:1};
// const fact = (n) => {
//     if(n===0 || n===1)  return 1;
//     else return n * fact(n-1);
// }
for(let i=0; i<input.length; i++)  data.push(input[i].split(' '));

const N = parseInt(data[0][0]);
const M = parseInt(data[0][1]);

const x = data[1][0].trim();
const y = data[1][1].trim();

const min = Math.min(N, M);
const max = Math.max(N, M)

let str = "";
for(let i=0; i<min; i++){
    str += x.slice(i, i+1);
    str += y.slice(i, i+1);
}
if(x.length> y.length)  str+= x.slice(min, max);
else str+= y.slice(min,max);

const arr = [];
for(let i=0; i<str.length; i++){
    arr.push(obj[str.slice(i,i+1)]);
}

const func = (arr) => {
    const newArr = [];
    if(arr.length===2)  return arr;
    else{
        for(let i=0; i<arr.length -1; i++){
            newArr.push((arr[i]+arr[i+1])%10);
        }
        return func(newArr);
    }
}
const res = func(arr);
console.log(`${res[0]* 10 + res[1]}%`)
// let sum1 = 0;
// let sum2 = 0;
// for(let i=0; i<M+N-1; i++){
//     sum1 += obj[str.slice(i,i+1)] * (fact(M+N-2)/(fact(i)* fact(M+N-2-i)))
// }
// for(let i=1; i<M+N; i++){
//     sum2 += obj[str.slice(i, i+1)]*(fact(M+N-2)/ (fact(i-1) * fact(M+N-1-i)));
// }
// sum1 %= 10;
// sum2 %= 10;
// if(sum1 === 0 && sum2 === 0)    console.log('0%');
// else console.log(`${sum1*10+ sum2}%`);
