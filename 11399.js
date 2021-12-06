const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const n = parseInt(input[0]);
let data = [];
let res = 0;
data = input[1].trim().split(' ').map(e => parseInt(e));

for(let i=0; i<data.length; i++){
    for(let j=i+1; j<data.length; j++){
        if(data[i]<data[j]){
            let tmp = data[i];
            data[i] = data[j];
            data[j] = tmp;
        }
    }
}

for(let i=0; i<data.length; i++){
    res += data[i]*(i+1);
}
console.log(res);


