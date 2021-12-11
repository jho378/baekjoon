const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);

let A = input[1].split(' ').map(e => parseInt(e));
let B = input[2].split(' ').map(e => parseInt(e));

const DescendingmergeSort = (arr) => {
    if(arr.length<2)    return arr;
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return Descendingmerge(DescendingmergeSort(left), DescendingmergeSort(right));   
}
const Descendingmerge = (left, right) => {
    const resArr = [];
    let leftIdx = 0;
    let rightIdx = 0;
    while(leftIdx < left.length && rightIdx < right.length){
        if(left[leftIdx]<right[rightIdx]){
            resArr.push(right[rightIdx]);
            rightIdx++
        }   else{
            resArr.push(left[leftIdx]);
            leftIdx++;
        }
    }
    return resArr.concat(left.slice(leftIdx), right.slice(rightIdx));
}

const AscendingmergeSort = (arr) => {
    if(arr.length<2)    return arr;
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return Ascendingmerge(AscendingmergeSort(left), AscendingmergeSort(right));   
}
const Ascendingmerge = (left, right) => {
    const resArr = [];
    let leftIdx = 0;
    let rightIdx = 0;
    while(leftIdx < left.length && rightIdx < right.length){
        if(left[leftIdx]<right[rightIdx]){
            resArr.push(left[leftIdx]);
            leftIdx++;
        }   else{
            resArr.push(right[rightIdx]);
            rightIdx++
        }
    }
    return resArr.concat(left.slice(leftIdx), right.slice(rightIdx));
}


A = DescendingmergeSort(A);
B = AscendingmergeSort(B);
let res = 0;
for(let i=0; i<N; i++){
    res+=A[i] * B[i];
}
console.log(res);
