const fs =require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(' ');

const N = parseInt(input[0]);
const d = parseInt(input[1]);

const data = [];
for(let i=1; i<=N; i++){
    data.push(i);
}
const str =data.join();
console.log(str)
let cnt = 0;
for(let i=0; i<str.length; i++){
    if(parseInt(str.slice(i, i+1))===d) cnt+=1;
}
console.log(cnt)