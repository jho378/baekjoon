const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(' ');
const A = parseInt(input[0]);
const B = parseInt(input[1]);
let min = Math.min(A, B);
let max = Math.max(A, B);

let cnt = 1;
let tmp = min;
let _tmp = max;

while(tmp){
    
    if(max%tmp===0 && min%tmp===0){
        console.log(tmp);
        break;
    }
    else tmp--;
}

while(true){
    _tmp = max * cnt; 
    if(_tmp%min===0){
        console.log(max*cnt);
        break;
    }
    else cnt++;
}
