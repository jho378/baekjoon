const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const M = parseInt(input[2]);

let data = input[1].split(' ').map(e => parseInt(e));
const comparison = input[3].split(' ').map(e => parseInt(e));

data.sort((a,b) => a-b);

// const findNumber = (arr, num) => {
//     const idx = Math.ceil((arr.length-1)/2);
//     if (arr.length === 0 ||  arr.length === 1 && arr[idx] !== num ){
//         return 0;
//     }
//     if ( arr[idx] === num ){
//         return 1;
//     }   else if (arr[idx] < num){
//         arr = arr.slice(idx+1);
//         return findNumber(arr, num);
//     }   else {
//         arr = arr.slice(0, idx);
//         return findNumber(arr, num);
//     }
// }
const answer = [];
comparison.forEach(elem => {
    let left = 0;
    let right = N - 1;

    let found = false;
    while ( left<= right ){
        let mid = Math.floor((left + right) / 2);
        if (data[mid] === elem){
            found = true;
            answer.push(1);
            break;
        }   else if (data[mid] < elem){
            left = mid + 1;
        }   else if (data[mid] > elem){
            right = mid -1;
        }
    }
    if (found === false){
        answer.push(0);
    }
})
console.log(answer.join('\n'));