const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');
const data = [];
const N = parseInt(input[0]);
for(let i =1; i<N+1; i++)   data.push(input[i]);

let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q',
'r','s','t','u','v','w','x','y','z']
let cnt =0;

for(i=0; i<N; i++){
    for(let j=0; j<26; j++){
        let temp = 0;
        let firstIndex = data[i].indexOf(alphabet[j]);
        let lastIndex = data[i].lastIndexOf(alphabet[j]);
        if(data[i].slice(firstIndex, lastIndex)!==alphabet[j].repeat(lastIndex-firstIndex)){
            cnt++;
            temp++;
        }
        if(temp===1) break;
        else continue;
    }
}

console.log(N - cnt);
