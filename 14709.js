const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
if(N!==3) console.log('Woof-meow-tweet-squeek')
else{
    const data = [];
    for(let i=1; i<4; i++) data.push(input[i].split(' '));
    const datas = [...data[0], ...data[1], ...data[2]];
    console.log(datas);
    if(datas.filter(e => e==='1').length===2 && datas.filter(e => e==='3').length===2 && datas.filter(e => e==='4').length===2) console.log('Wa-pa-pa-pa-pa-pa-pow!');
    else console.log('Woof-meow-tweet-squeek')
}