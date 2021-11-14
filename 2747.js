const fs = require('fs');
const input = fs.readFileSync('a.txt').toString();
const N = parseInt(input);

const arr = [0, 1];
if(N===0 || N===1)  console.log(N);
else{
    for(let i=2; i<=N; i++){
        tmp = arr[i-1] + arr[i-2];
        arr.push(tmp);
    }
    console.log(arr[arr.length-1]);
}
