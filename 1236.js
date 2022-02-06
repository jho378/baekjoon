const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const m = parseInt(input[0].split(' ')[0]);
const n = parseInt(input[0].split(' ')[1]);

const matrix = [];
for(let i=1; i<m+1; i++) matrix.push(input[i]);

let emptyRow = 0;
let emptyCol = 0;
for(let i=0; i<m; i++){
    if(matrix[i].indexOf('X')===-1) emptyRow +=1;
}
for(let j=0; j<n; j++){
    let i=0;
    let hasX = false
    while(i!==m){
        if(matrix[i][j]==='X'){
            hasX = true;
            break;
        }
        i++
    }
    if(!hasX) emptyCol+=1;
}
console.log(Math.max(emptyRow, emptyCol));