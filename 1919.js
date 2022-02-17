const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const w1 = input[0].trim();
const w2 = input[1].trim();

const arr1 = new Array(26).fill(0);
const arr2 = new Array(26).fill(0);

for(let i=0; i<w1.length; i++){
    arr1[w1.charCodeAt(i) - 97] +=1;
}
for(let i=0; i<w2.length; i++){
    arr2[w2.charCodeAt(i) - 97] +=1;
}

const double = [];

for(let i=0; i<26; i++){
    double.push(Math.min(arr1[i], arr2[i]));
}

const sum = double.reduce((p,c)=> p+c, 0);
console.log(w1.length + w2.length - 2*sum)