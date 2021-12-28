const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0].split(' ')[0]);
const n = parseInt(input[0].split(' ')[1]);

const data = input[1].split(' ').map(e => parseInt(e));

const solArr = [];
for(let i=0; i<data.length; i++){
    let multiply = 1;
    const x = data[i];
    while(multiply*x<=N){
        if(solArr.indexOf(multiply*x)===-1) solArr.push(multiply*x);
        multiply++;
    }
}
const sum = solArr.reduce((p,c) => p+c, 0);
console.log(sum);