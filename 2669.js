const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const data = input.map(e => e.split(' ').map(e => parseInt(e)));

const square = new Array(9999).fill(0);
for(let i=0; i<data.length; i++){
    const [x, y, _x, _y] = data[i];
    for(let X = x; X < _x; X++){
        for(let Y = y; Y<_y; Y++){
            square[100*X+Y]+=1;
        }
    }
}
console.log(square.filter(e => e!==0).length);