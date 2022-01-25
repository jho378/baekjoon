const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const str = input[1];

const arr = [];
let word = '';

for(let i=0; i<str.length; i+=N){
    if(arr.length%2===0){
        const _arr = [];
        for(let j=0; j<N; j++){
            _arr.push(str[i+j]);
        }
        arr.push(_arr)
    }   else if(arr.length%2===1){
        const _arr = [];
        for(let j=0; j<N; j++){
            _arr.unshift(str[i+j]);
        }
        arr.push(_arr);
    }
}
console.log(arr);

for(let i=0; i<N; i++){
    for(let j=0; j<arr.length;  j++){
        if(arr[j][i])   word+= arr[j][i];
    }
}
console.log(word);