const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim();
const total = parseInt(input.length);

let specialAlp = ['c=', 'c-', 'd-', 'lj', 'nj', 's='];
let cnt = 0; 
for(let i=0; i<specialAlp.length; i++){
    const split = input.split(specialAlp[i]);
    cnt += split.length-1;
}

const splits = input.split("dz=");
let _cnt = splits.length-1;
for(i=0; i<splits.length; i++){
    const splits_split = splits[i].split('z=');
    cnt += splits_split.length -1;
}


console.log(total - cnt - 2*_cnt);