const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(' ');

const n = parseInt(input[0]);
const c = parseInt(input[1]);

const fiveCnt = (n) => {
    let exp = 0;
    while(Math.pow(5, exp)<=n) exp++;
    exp--;
    
    let _fiveCnt = 0;
    let i=1;
    const tmp = Math.floor(n/5);

    while(i<=exp){
        _fiveCnt += Math.floor(tmp/Math.pow(5, i-1));
        i++;
    }
    return _fiveCnt;
}

const twoCnt = (n) => {
    let exp = 0;
    while(Math.pow(2, exp) <= n) exp++;
    exp--;

    let _twoCnt = 0;
    let i=1;
    const tmp = Math.floor(n/2);
    while(i<=exp){
        _twoCnt += Math.floor(tmp/Math.pow(2, i-1));
        i++;
    }
    return _twoCnt;
}

const five = fiveCnt(n) - fiveCnt(c) - fiveCnt(n-c);
const two = twoCnt(n) - twoCnt(c) - twoCnt(n-c);
console.log(Math.min(five, two));

