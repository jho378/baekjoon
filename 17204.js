const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0].split(' ')[0]);
const target = parseInt(input[0].split(' ')[1]);

const data = input.map(e => parseInt(e)).slice(1);
let cnt = 1;
let tmp = data[0];

if(data.indexOf(target)===-1) console.log(-1);
else{
    while(true){
        if(cnt>22500){
            console.log(-1);
            break;
        }
        if(tmp === data[tmp] && tmp!==target){
            console.log(-1);
            break;
        }
        if(tmp!==target){
            cnt+=1;
            tmp = data[tmp];
        }
        else{
            console.log(cnt);
            break;
        }
    }
}