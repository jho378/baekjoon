const fs= require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = input[1].split(' ').map(e => parseInt(e));

let bool = true;

const row = [[1,2,3], [4,5,6], [7,8,9]];
const col = [[1,4,7], [2,5,8], [3,6,9]];
const dia = [[1,5,9], [7,5,3]];
const det = (arr) => {
    for(let i=0; i<arr.length; i++){
        const x = arr[i][0];
        const y = arr[i][2];
        const _x = data.indexOf(x);
        const _y = data.indexOf(y);
        if(_x===-1 || _y===-1) continue;
        if(Math.abs(_x - _y)===1 && data.indexOf(arr[i][1])===-1) bool = false;
        else if(Math.abs(_x - _y)===1 && (data.indexOf(arr[i][1]) > Math.min(_x, _y)))  bool = false;
    }    
}
det(row);
det(col);
det(dia);
if(data.filter((e, idx)=> data.indexOf(e)!==idx).length!==0) bool = false;
if(data.length<3) bool = false;
if(bool===true) console.log('YES');
else console.log('NO');



// for(let i=0; i<row.length; i++){
//     const x = row[i][0];
//     const y = row[i][2];
//     const _x = data.indexOf(x);
//     const _y = data.indexOf(y);
//     if(_x===-1 || _y===-1) continue;
//     if(data.indexOf(row[i][1])===-1) bool = false;
//     else if(Math.abs(_x - _y)===1 && data.indexOf(row[i][1]) > Math.min(_x, _y)) bool === false;
// }
// for(let i=0; i<col.length; i++){
//     const x = col[i][0];
//     const y = col[i][2];
//     const _x = data.indexOf(x);
//     const _y = data.indexOf(y);
//     if(_x===-1 || _y===-1) continue;
//     if(data.indexOf(col[i][1])===-1) bool = false;
//     else if(Math.abs(_x - _y)===1 && data.indexOf(col[i][1]) > Math.min(_x, _y)) bool === false;
// }


