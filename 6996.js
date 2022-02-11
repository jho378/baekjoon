const fs= require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++) data.push(input[i].split(' '));


for(let i=0; i<N; i++){
    const inspect = new Array(26).fill(0);
    const first = data[i][0];
    const second = data[i][1];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    for(let j=0; j<first.length; j++){
        inspect[alphabet.indexOf(first[j])]+=1;
    }
    for(let j=0; j<second.length; j++){
        inspect[alphabet.indexOf(second[j])]-=1;
    }

    if(inspect.filter(e => e!==0).length===0) console.log(`${first} & ${second} are anagrams.`);
    else    console.log(`${first} & ${second} are NOT anagrams.`)
}

