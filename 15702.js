const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0].split(' ')[0]);
const students = parseInt(input[0].split(' ')[1]);

const score = input[1].split(' ').map(e => parseInt(e));
const scores = [];

let maxStudent = 100001;
for(let i=2; i<students+2; i++){
    const num = parseInt(input[i].split(' ')[0]);
    const sol = input[i].split(' ').slice(1);
    let sum = 0;
    for(let j=0; j<N; j++){
        if(sol[j]==='O') sum+= score[j];
    }
    scores.push(sum);
    const max = scores.reduce((p,c) => Math.max(p,c), -1);
    if(sum===max && scores.indexOf(max)===scores.lastIndexOf(max)) maxStudent = num;   
    else if(sum===max) maxStudent = Math.min(maxStudent, num);   
}
const max = scores.reduce((p,c)=> Math.max(p,c), -1);
console.log(maxStudent, max);


