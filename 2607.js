const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++) data.push(input[i].trim());

let cnt = 0; 

const std = data[0];
const stdArr = new Array(26).fill(0);

for(i=0; i<std.length;i++){
    stdArr[std.charCodeAt(i) - 65] += 1;
}

for(i=1; i<N; i++){
    if(data[i].length === std.length +1){
        const dataArr = new Array(26).fill(0);
        for(let j=0; j<data[i].length; j++) dataArr[data[i].charCodeAt(j) -65] +=1;
        const resArr = new Array(26).fill(0);
        for(let k=0; k<resArr.length; k++)  resArr[k] += dataArr[k] - stdArr[k];
        if(resArr.filter(e => e!== 0).length === 1) cnt +=1;
    }
    else if(data[i].length === std.length){
        const dataArr = new Array(26).fill(0);
        for(let j=0; j<data[i].length; j++) dataArr[data[i].charCodeAt(j) -65] +=1;
        const resArr = new Array(26).fill(0);
        for(let k=0; k<resArr.length; k++)  resArr[k] += dataArr[k] - stdArr[k];
        let finalArr = resArr.filter(e => e !== 0);
        if(finalArr.length === 0 || (finalArr.length === 2 && finalArr[0]*finalArr[1]===-1)) cnt+=1;
    }
    else if(data[i].length === std.length -1){
        const dataArr = new Array(26).fill(0);
        for(let j=0; j<data[i].length; j++) dataArr[data[i].charCodeAt(j) -65] +=1;
        const resArr = new Array(26).fill(0);
        for(let k=0; k<resArr.length; k++)  resArr[k] += dataArr[k] - stdArr[k];
        if(resArr.filter(e => e!== 0).length === 1) cnt +=1;
    }
};

console.log(cnt);