const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const orders = input.slice(1).map(e => e.trim());

const arr = [];
const push = (x) => {
    arr.push(x);
}
const front = () => {
    if(arr.length===0) return -1;
    else return arr[0];
}
const pop = () => {
    if(arr.length===0) return -1;
    else return arr.shift();
}
const size = () => {
    return arr.length; 
}
const empty = () => {
    if(arr.length===0) return 1;
    else return 0;
}
const back = () => {
    if(arr.length===0) return -1;
    else return arr[arr.length-1];
}

const res = [];
for(let i=0; i<N; i++){
    const o = orders[i];
    if(o==='front') res.push(front());
    else if(o==='size') res.push(size());
    else if(o==='back') res.push(back());
    else if(o==='empty') res.push(empty());
    else if(o==='pop') res.push(pop());
    else{
        const num = o.split(' ')[1];
        push(num);
    }
}
console.log(res.join('\n'));