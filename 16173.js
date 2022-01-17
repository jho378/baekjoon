const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++)    data.push(input[i].split(' ').map(e => parseInt(e)));


const pass = 'HaruHaru';
const fail = 'Hing'
let res = fail;

if(N===2){
    if(data[0][0]===1 && data[0][1]===1) res=pass;
    else if(data[0][0]===1 && data[1][0]===1) res=pass;
    // else if(data[0][0]===2) res=pass;
    console.log(res);
}
if(N===3){
    // if(data[0][0]===4) res=pass;
    // else if(data[0][0]===3 && data[2][1]===1) res=pass;
    // else if(data[0][0]===3 && data[1][2]===1) res=pass;
    // else if(data[0][0]===2 && data[1][1]===2) res=pass;
    // else if(data[0][0]===2 && data[1][1]===1 && data[2][1]===1) res=pass;
    // else if(data[0][0]===2 && data[1][1]===1 && data[1][2]===1) res=pass;
    // else if(data[0][0]===1 && data[1][0]===1 && data[1][1]===2) res=pass;
    // else if(data[0][0]===1 && data[0][1]===1 && data[1][1]===2) res=pass;
    // else if(data[0][0]===1 && data[0][1]===2 && data[1][2]===1) res=pass;
    // else if(data[0][0]===1 && data[1][0]===2 && data[2][1]===1) res=pass;
    if(data[0][0]===2 && data[0][2]===2) res = pass;
    else if(data[0][0]===2 && data[2][0]===2) res = pass;
    else if(data[0][0]===2 && data[2][0]===1 && data[2][1]===1) res=pass;
    else if(data[0][0]===2 && data[0][2]===1 && data[1][2]===1) res=pass;
    else if(data[0][0]===1 && data[0][1]===1 && data[0][2]===2) res=pass;
    else if(data[0][0]===1 && data[0][1]===1 && data[0][2]===1 && data[1][2]===1) res=pass;
    else if(data[0][0]===1 && data[1][0]===1 && data[2][0]===2) res=pass;
    else if(data[0][0]===1 && data[1][0]===1 && data[2][0]===1 && data[2][1]===1) res=pass;
    else if(data[0][0]===1 && data[0][1]===2 && data[2][1]===1) res=pass;
    else if(data[0][0]===1 && data[1][0]===2 && data[1][2]===1) res=pass;
    else if(data[0][0]===1 && data[0][1]===1 && data[1][1]===1 && data[1][2]===1) res=pass;
    else if(data[0][0]===1 && data[0][1]===1 && data[1][1]===1 && data[2][1]===1) res=pass;
    else if(data[0][0]===1 && data[1][0]===1 && data[1][1]===1 && data[1][2]===1) res=pass;
    else if(data[0][0]===1 && data[1][0]===1 && data[1][1]===1 && data[2][1]===1) res=pass;
    console.log(res);
}
