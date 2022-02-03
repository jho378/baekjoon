const fs= require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const letters = parseInt(input[0].split(' ')[0]);
const cnt = parseInt(input[0].split(' ')[1]);

const data = [];
for(let i=2; i<cnt+2; i++) data.push(input[i]);

for(let i=0; i<data.length; i++){
    const word = input[1].split('');
    let isTrue = true;
    let _data = data[i].split('');
    while(word.length){
        const x = _data.indexOf(word.shift())
        if(x===-1) isTrue = false;
        else _data = _data.slice(x+1);
    }
    console.log(isTrue)
}