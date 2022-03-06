const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++) data.push(input[i]);

let words = 0;
while(data.length){
    const prototype = data.shift();
    for(let i=0; i<data.length; i++){
        if(prototype.length!==data[i].length) continue;
        else{
            for(let j=0; j<prototype.length; j++){
                const prev = prototype.slice(j)
                const latter = prototype.slice(0, j);
                const word = prev.concat(latter);
                if(word===data[i]){
                    data.splice(i, 1);
                    i--;
                    break;
                }
            }
        }
    }
    words+=1;
}
console.log(words);