const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim();

const N = parseInt(input);

for(let i=0; i<N; i++){
    let str = '';
    str += '*'.repeat(i+1);
    str += ' '.repeat(2*N - 2*(i+1));
    str += '*'.repeat(i+1);
    console.log(str);
}
for(i=N-1; i>0; i--){
    let str = '';
    str += '*'.repeat(i);
    str += ' '.repeat(2*N - 2*i);
    str += '*'.repeat(i);
    console.log(str);
}