const fs =require('fs');
const input = fs.readFileSync('a.txt').toString().trim();
const len = input.length;
let allSame = true;

for(let i=0; i<len; i++){
    if(input[i] !== input[0]){
        allSame = false;
        break;
    }
}
if(allSame === true) console.log(len);

const pelinCnt = [];

for(let i=Math.floor(len/2); i<len; i++){
    let bool = true;
    for(let j=0; j<len-i; j++){
        if(input[i+j]===input[i-j]) continue;
        else{
            bool = false;
            break;
        }
    }
    if(bool === true){
        pelinCnt.push(len - (len-i-1)*2 - 1);
    }
}
for(let i=Math.floor(len/2); i<len; i++){
    let bool =true;
    for(let j=0; j<len-i; j++){
        if(input[i+j]===input[i-j-1]) continue;
        else{
            bool = false;
            break
        }
    }
    if(bool===true){
        pelinCnt.push(len - 2*(len-i));
    }
}


if(allSame === false){
    if(pelinCnt.length===0) console.log(2*len -1);
    else{
        const min = pelinCnt.reduce((p,c) => Math.min(p,c), 99);
        console.log(min + len);
    }
}

