// const fs = require('fs');
// const input = fs.readFileSync('a.txt').toString().trim().split('\n');

// const N = parseInt(input[0]);
// const data = [];
// for(let i=1; i<N+1; i++) data.push(input[i].split(' '));

// // const zero = new Array(100).fill(0);
// const zeroArr = new Array(100).fill(new Array(100).fill(0));

// for(let i=0; i<data.length; i++){
//     // console.log(parseInt(data[i][0]))
//     // console.log(parseInt(data[i][1]));
//     for(let j=parseInt(data[i][0]); j<parseInt(data[i][0])+10; j++){
//         for(let k=parseInt(data[i][1]); k<parseInt(data[i][1])+10; k++){
//            zeroArr[j][k] += 1;
//         }    
//     }
// }
// let sum =0;
// for(i=0; i<100; i++){
//     for(j=0; j<100; j++){
//         sum+=zeroArr[i][j];
//     }
// }
// console.log(sum);

// let cnt = 0;
// for(i=0; i<100; i++){
//     for(j=0; j<100; j++){
//         if(zeroArr[i][j]!==0)  cnt+=1;
//     }
// }
// console.log(cnt);

const fs= require('fs');

const input= fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++) data.push(input[i].split(' '));
const arr = new Array(10000).fill(0)

i=0;
while(i<data.length){
    const x = parseInt(data[i][0]);
    const y = parseInt(data[i][1]);
    for(j=x; j<x+10; j++){
        for(let k=y; k<y+10; k++){
            arr[100*j +k] +=1;
        }
    }
    i++
}
let cnt = 0;
console.log(arr.length)
for(i=0; i<arr.length; i++){
    if(arr[i]!==0)  cnt +=1;    
}
console.log(cnt);