const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);

const data = [];
const origin = [];
for(let i =1; i <N+1 ; i++) data.push(input[i].trim().split(''));
for(let i =1; i <N+1 ; i++) origin.push(input[i].trim());

let ans = '';
for(i=0; i<N; i++){
    const len = data[i].length;
    let arr = data[i];
    for(let j=0; j<Math.floor(len/2); j++){
        let temp = arr[len-j-1];
        arr[len-j-1] = arr[j]
        arr[j] = temp;  
    }
    if(origin.includes(arr.reduce((p,c) => p+c, ''))){
        console.log(`${arr.length} ${arr[Math.floor(len/2)]}`)
        break;
        }
}