const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [L, C] = input[0].split(' ').map(e => parseInt(e));
const rawData = input[1].split(' ');

// const fact = (n) => {
//     if(n===0 || n===1)  return 1;
//     else return n * fact(n-1);
// }

let data = [];
let cnt = 0;
for(let i=0; i<C; i++){
    const ch = rawData[i];
    data.push(ch.charCodeAt(0));
    // const charCh = ch.charCodeAt(0);
    // data.push(String.fromCharCode(charCh));
}

for(let i=0; i<data.length; i++){
    for(let j=i+1; j<data.length; j++){
        if(data[i]>data[j]){
            let tmp = data[j];
            data[j] = data[i];
            data[i] = tmp;
        }
    }
}
// console.log(data);

const combination = (arr, selectNumber) => {
    const results = [];
    if(selectNumber === 1)  return arr.map(e => [e]);

    arr.forEach((v, idx, arr) => {
        const fixed = v;
        const rest = arr.slice(idx+1);
        const combinationArr = combination(rest, selectNumber -1);
        const finalArr = combinationArr.map(e => [v, ...e])
        results.push(...finalArr);
    })
    return results
}
const unfilteredRawData = combination(data, L);
// console.log(unfilteredRawData);
const unfilteredData = [];
for(let i=0; i<unfilteredRawData.length; i++){
    let str = "";
    for(let j=0; j<L; j++){
        str+=String.fromCharCode(unfilteredRawData[i][j]);
    }
    unfilteredData.push(str);
}

for(let i=0; i<unfilteredData.length; i++){
    const test = unfilteredData[i];
    let _cnt = 0;
    for(let i=0; i<test.length; i++){
        if(test[i]==='a' || test[i]==='e' || test[i]==='i' || test[i]==='o' || test[i]==='u')   _cnt+=1;
    }
    if(test.indexOf('a')===-1 &&
       test.indexOf('e')===-1 &&
       test.indexOf('i')===-1 &&
       test.indexOf('o')===-1 &&
       test.indexOf('u')===-1 
    )   continue;
    else if(test.length - _cnt <2)  continue;
    else console.log(unfilteredData[i]);
}


