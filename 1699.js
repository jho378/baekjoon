const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number(input);
const arr = new Array(N+1).fill(0);

for(let i=0; i<=N; i++){
    if(Math.sqrt(i)===Math.floor(Math.sqrt(i)))   arr[i]+=1;
}

for(let i=0;i<=N; i++){
    if(arr[i]===1)  continue;
    else{
        let min = 99999;
        for(let j=1; j<=i/2; j++){
            min = Math.min(min, arr[j]+arr[i-j]);
        }
        arr[i] = min;
    }
}
//     else{
//         const newArr = [];
//         for(let j=1; j<=i/2; j++)    newArr.push(arr[j] + arr[i-j]);
//         arr[i] = newArr.reduce((p,c) => Math.min(p, c), 999999);
//     }
// }
console.log(arr[N]);
// 메모리 초과 안나게 최대한 메모리 줄여서 제출합시다 