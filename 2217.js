const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const n = parseInt(input[0]);
const data = [];
for(let i=1; i<n+1; i++)    data.push(parseInt(input[i]));

const merge = (left, right) => {
    const resultArr = [];
    let leftIdx = 0;
    let rightIdx = 0; 
    while(leftIdx < left.length && rightIdx < right.length){
    if(left[leftIdx] < right[rightIdx]){
        resultArr.push(left[leftIdx]);
        leftIdx++;
    }   else{
        resultArr.push(right[rightIdx]);
        rightIdx++;
        }
    }
    return resultArr.concat(left.slice(leftIdx), right.slice(rightIdx));
    
}

const mergeSort = (arr) => {
    if(arr.length<2)    return arr;
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

const alligned = mergeSort(data);

for(let i=0; i< alligned.length; i++){
    alligned[i] *= (n - i);
}
let max = alligned.reduce((p,c) => Math.max(p,c), -1);
console.log(max);
// const len = data.length;
// for(let i=0; i<len; i++){
//     for(let j=i+1; j<len; j++){
//         if(data[i]>data[j]){
//             let temp = data[i];
//             data[i] = data[j];
//             data[j] = temp;
//         }
//     }
// }
// for(let i=0; i<len; i++){
//     data[i] = data[i] * (n-i);    
// }
// let max = data.reduce((p,c) => Math.max(p,c), -1);
// console.log(max)