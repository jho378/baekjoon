const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);
let res = '';

for(let i=0; i<input.length; i++){
    switch(parseInt(input.slice(i, i+1))){
        case 0: 
            res+='000';
            break;
        case 1:
            res+='001';
            break;
        case 2:
            res+='010';
            break;
        case 3:
            res+='011';
            break;
        case 4:
            res+='100';
            break;   
        case 5:
            res+='101';
            break;
        case 6:
            res+='110';
            break;
        case 7:
            res+='111';
            break; 
    }
}
console.log(res.slice(res.indexOf('1')));