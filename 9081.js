const fs =require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const datas = [];
for(let i=1; i<N+1; i++) datas.push(input[i]);

for(let i=0; i<N; i++){
    const data = datas[i].split('').map(e => e.charCodeAt());
    let tmp = -1; 
    for(let j=data.length-1; j>=0; j--){
        if(data[j]>data[j-1]){
            tmp = j-1;
            break;
        }
    }
    if(tmp===-1) console.log(datas[i]);
    else{
        const arr1 = data.slice(0, tmp);
        const arr2 = data.slice(tmp);
        const min = arr2.filter((e) => e > arr2[0]).reduce((p,c)=>Math.min(p,c), 99);
        arr1.push(min);
        arr2.splice(arr2.indexOf(min), 1);
        arr2.sort((a, b) => a-b);
        const res = arr1.concat(arr2);
        console.log(res.map(e => String.fromCharCode(e)).join(''));
    }
}