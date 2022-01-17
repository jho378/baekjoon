const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const total = parseInt(input[0].split(' ')[0])
const N = parseInt(input[0].split(' ')[1]);

const set = [];
const single = [];

for(let i=1; i<N+1; i++){
    set.push(input[i].split(' ').map(e => parseInt(e))[0]);
    single.push(input[i].split(' ').map(e => parseInt(e))[1]);
}
const perOnePrice = set.map(e => e/6);
const setPerOnePriceMin = perOnePrice.reduce((p,c)=>Math.min(p,c), 9999);
const singleMin = single.reduce((p,c) => Math.min(p,c), 9999);

if(setPerOnePriceMin>singleMin) console.log(singleMin * total);
else{
    const res= Math.min(setPerOnePriceMin*6 * Math.floor(total/6) + singleMin*(total%6), setPerOnePriceMin*6*Math.ceil(total/6));
    console.log(res);
}