const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++)    data.push(input[i]);

const lengthMergeSort = (arr) => {
    if(arr.length<2)    return arr;
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return lengthMerge(lengthMergeSort(left), lengthMergeSort(right));
}

const lengthMerge = (left, right) => {
    const resultArr = [];
    let leftIdx = 0;
    let rightIdx = 0;
    while(leftIdx < left.length && rightIdx < right.length){
        if(left[leftIdx].length < right[rightIdx].length){
            resultArr.push(left[leftIdx]);
            leftIdx++
        }   else{
            resultArr.push(right[rightIdx]);
            rightIdx++
        }
    }
    return  resultArr.concat(left.slice(leftIdx), right.slice(rightIdx));
}

const lengthMergedData = lengthMergeSort(data);

const asciiMergeSort = (arr) => {
    if(arr.length<2)    return arr;
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return asciiMerge(asciiMergeSort(left), asciiMergeSort(right));
}


const asciiMerge = (left, right) => {
    const resultArr = [];
    let leftIdx = 0;
    let rightIdx = 0;
    while(leftIdx < left.length && rightIdx < right.length){
        if(left[leftIdx]<right[rightIdx]){
            resultArr.push(left[leftIdx]);
            leftIdx++
        }   else{
            resultArr.push(right[rightIdx]);
            rightIdx++
        }
    }
    return  resultArr.concat(left.slice(leftIdx), right.slice(rightIdx));
}

let finalData = [];
// console.log(lengthMergedData)
let cnt = 0;
while(finalData.length !== N){
    if(cnt+1 >= N || lengthMergedData[cnt].length!==lengthMergedData[cnt+1].length){
        finalData.push(lengthMergedData[cnt]);
        cnt++
    }
    else{
        const len = lengthMergedData[cnt].length;
        const tmp = lengthMergedData.filter(e => e.length === len);
        finalData.push(...asciiMergeSort(tmp));
        cnt+= tmp.length;
    }
}

finalData = finalData.filter((e, i) => finalData.indexOf(e) === i);
finalData.forEach(e => console.log(e));