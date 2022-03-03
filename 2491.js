const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = input[1].split(' ').map(e => parseInt(e));

let isAscending = true;
let j=0;
while(true){
    if(data[j]===data[j+1]) continue;
    else if(data[j]>data[j+1]){
        isAscending = false;
        break;
    }
    else{
        isAscending = true;
        break;
    }
}

let max = 0;

let tmp = 0; 
let i=0;
let _tmp = 0;

while(i!==N-1){
    tmp = i;
    if(isAscending===true){
        while(true){
            if(data[i+1]>=data[i]) i++;
            else{
                isAscending = false;
                break;
            }
        }
    }  
    else{
        while(true){
            if(data[i+1]<=data[i]) i++;
            else{
                isAscending = true;
                break;
            } 
        }
    }
    _tmp = i;
    while(data[_tmp] === data[i]){
        _tmp--;
    }
    _tmp++;
    max = Math.max(max, i-tmp+1);
    i = _tmp;
}

console.log(max);