const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++) data.push(input[i].split(' ').map(e => parseInt(e)));

const shouldBe = N * (Math.pow(N,2)+1)/2
let isMagic = true;

for(let i=0; i<N; i++){
    const sum = data[i].reduce((p,c) => p+c, 0);
    if(sum!==shouldBe) isMagic = false;
}

for(let j=0; j<N; j++){
    let sum = 0;
    for(let i=0; i<N; i++){
        sum+= data[i][j];
    }
    if(sum!==shouldBe) isMagic = false;
}
let diag1 = 0;
let diag2 = 0;
for(let i=0; i<N; i++){
    diag1 += data[i][i];
    diag2 += data[N-i-1][i];
}
if(diag1!==shouldBe || diag2!== shouldBe) isMagic =false;

const nums = new Array(N*N).fill(0);
for(let i=0; i<N; i++){
    const _data = data[i]
    while(_data.length!==0) nums[_data.pop()-1]+=1;
}

if(nums.filter(e => e!==1).length!==0) isMagic = false;
if(isMagic) console.log('TRUE');
else console.log('FALSE');