const fs =require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
const N =parseInt(input[0]);
const data = input[1].split(' ').map(e => parseInt(e));

let res =0;
for(let i=0; i<N; i++){
    if(data.filter(e => e===data[i]).length === data[i]) res = Math.max(res, data[i]);
}

if(data.filter(e => e!==0).length===0)   console.log(-1);
else if(res === 0 && data.includes(0))  console.log(-1);
else    console.log(res);