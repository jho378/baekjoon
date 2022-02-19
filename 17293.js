const fs = require('fs');
let N = fs.readFileSync('a.txt').toString().trim();
N = parseInt(N);
let tmp = N;
while(1){
    if(N<0) break;
    if(N>=3){
        console.log(`${N} bottles of beer on the wall, ${N} bottles of beer.`)
        console.log(`Take one down and pass it around, ${N-1} bottles of beer on the wall.\n`)
    }
    else if(N===2){
        console.log(`${N} bottles of beer on the wall, ${N} bottles of beer.`)
        console.log(`Take one down and pass it around, ${N-1} bottle of beer on the wall.\n`)
    }
    else if(N===1){
        console.log(`1 bottle of beer on the wall, 1 bottle of beer.`)
        console.log(`Take one down and pass it around, no more bottles of beer on the wall.\n`)
    }
    else{
        if(tmp===1){
            console.log(`No more bottles of beer on the wall, no more bottles of beer.`)
            console.log(`Go to the store and buy some more, ${tmp} bottle of beer on the wall.`)
        }   
        else{
            console.log(`No more bottles of beer on the wall, no more bottles of beer.`)
            console.log(`Go to the store and buy some more, ${tmp} bottles of beer on the wall.`)
        }
        
    }
    N--
}