const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const orders = input.slice(1).map(e => e.trim());

const arr = [];

const push = (x) => {
    arr.push(x);
}
const pop = () => {
    if(arr.length===0) return -1;
    else return arr.pop();
}
const size = () => {
    return arr.length;
}
const empty = () => {
    if(arr.length) return 0;
    else return 1;
}
const top = () => {
    if(arr.length===0) return -1;
    else return arr[arr.length-1];
}
const res = [];
for(let i=0; i<N; i++){
    if(orders[i]==='top') res.push(top());
    else if(orders[i]==='pop') res.push(pop());
    else if(orders[i]==='size') res.push(size());
    else if(orders[i]==='empty') res.push(empty());
    else{
        const num = orders[i].split(' ')[1];
        push(num);
    }
}
console.log(res.join('\n'));