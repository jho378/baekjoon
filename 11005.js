const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(' ');

const A = parseInt(input[0]);
const n = parseInt(input[1]);
let tmp = A;
let cnt = 0;

const func = (arr) => {
    let str = "";
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for(let i=0; i<arr.length; i++){
        if(arr[i]<10)   str += arr[i];
        else    str+= alphabet[arr[i]-10];
    }
    return str;
}
// 몫이랑 나머지 구해주고 나서 나중에 console.log 찍어주기용 함수 


while(tmp>=n){
    tmp/=n; 
    cnt+=1;
}

let res = [];
if(A<n) res.push(A);
else{
    res.push(Math.floor(A / Math.pow(n, cnt)));
    tmp = A - Math.floor(A/Math.pow(n, cnt))*Math.pow(n, cnt);
    while(cnt>0){
        res.push(Math.floor(tmp/Math.pow(n, cnt-1)));
        tmp = tmp - Math.floor(tmp/Math.pow(n, cnt-1)) * Math.pow(n, cnt-1);
        cnt--;
    }
}
console.log(func(res));
