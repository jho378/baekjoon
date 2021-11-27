const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data =[];
for(let i=1; i<N+1; i++)    data.push(input[i].trim().split(' '));

let sum = 0;
const grade = ['A+', 'A0', 'A-', 'B+', 'B0', 'B-', 'C+', 'C0', 'C-', 'D+', 'D0', 'D-'];
const score = [4.3, 4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.7, 1.3, 1.0, 0.7];
for(i=0; i<data.length; i++){
    for(j=0; j<grade.length; j++){
        if(data[i][2]===grade[j]){
            sum+= parseInt(data[i][1]) * score[j];
        }
    }
}
const res = sum / data.reduce((p,c) => p + parseInt(c[1]), 0);
console.log((res+0.000001).toFixed(2));