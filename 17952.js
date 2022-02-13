const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);

let score = 0;
const stack = [];

for(let i=1; i<N+1; i++){
    if(input[i]==='0' && stack.length===0) continue;
    else if(input[i]==='0') stack[stack.length-1][2]-=1;
    else{
        stack.push(input[i].split(' ').map(e => parseInt(e)));
        stack[stack.length-1][2]-=1;
    }
    
    if(stack.length>0 && stack[stack.length-1][2]===0){
        score+=stack[stack.length-1][1];
        stack.pop();
    }
}

console.log(score)




// const data = []; 
// for(let i=1; i<N+1; i++) data.push(input[i].split(' ').map(e => parseInt(e)));

// const times = [];
// const scores = [];
// const stack = [];
// let sum = 0;

// for(let i=0; i<N; i++){
//     if(data[i][0]!==0){
//         times.push(data[i][2]);
//         scores.push(data[i][1]);
//         stack.unshift(stack.length);
//         times[times.length-1]-=1;
//     }
//     else {
//         if(times.filter(e => e!==0).length ===0) continue;
//         else{
//             const idx = stack[0];
//             times[idx]-=1;
//         }
//     }
//     if(times.indexOf(0)!==-1){
//         const idx = times.indexOf(0);
//         sum+= scores[idx];
//         times.splice(idx, 1);
//         scores.splice(idx, 1);
//         stack.shift();
//     }
// }
// console.log(sum)