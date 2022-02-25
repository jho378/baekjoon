const fs =require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = []; 
for(let i=1; i<N+1; i++){
    data.push(input[i]);
}

for(let i=0; i<N; i++){
    let str = data[i];
    let _str = data[i].split('').reverse().join('');
    
    let num = parseInt(str) + parseInt(_str);
    const numStr = String(num);
    const _numStr = String(num).split('').reverse().join('');

    if(numStr === _numStr) console.log('YES');
    else console.log('NO');
}