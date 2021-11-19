const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split("");

const data = [];
for(let i=0; i<input.length; i++)   data.push(parseInt(input[i]));
const init = data.reduce((p,c) => p+c, 0);
let cnt =1;

const decom = (x) => {
    const _x = x.toString();
    const data_x = [];
    for(i=0; i<_x.length; i++)  data_x.push(parseInt(_x.slice(i, i+1)));
    const res = data_x.reduce((p,c) => p+c, 0);
    return res;
}
const func = (x) => {
    if(x>=10){
        cnt+=1;
        return func(decom(x));
    } 
    else if(x<10)   return x; 
}
const bool = func(init)%3 === 0 ? 'YES' : 'NO';  
if(data.length === 1)   console.log(`0\n${bool}`)
else    console.log(`${cnt}\n${bool}`)