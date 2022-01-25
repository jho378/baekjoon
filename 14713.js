const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++) data.push(input[i].split(' '));

const datas = [];
for(let i=0; i<data.length; i++) datas.push(data[i].shift());
console.log(datas)

const target = input[N+1].split(' ');
let isPossible = true;
while(target.length!==0){
    const word = target[0];
    if(datas.indexOf(word)===-1){
        isPossible = false;
        break;
    }
    const idx = datas.indexOf(word);
    target.shift();
    if(data[idx].length!==0) datas[idx] = data[idx].shift();
    else datas[idx] = 'X';
}

if(datas.filter(e => e!=='X').length!==0) isPossible = false;

if(isPossible) console.log('Possible');
else console.log('Impossible');
