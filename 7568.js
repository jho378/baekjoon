const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++){
    data.push(input[i].split(" "));
}
const rank = new Array(N).fill(1);

for(i=0; i<data.length; i++){
    for(let j=i+1; j<data.length; j++){
        if(parseInt(data[i][0])>parseInt(data[j][0])    &&
           parseInt(data[i][1])>parseInt(data[j][1]) 
        ) rank[j]++
        else if(
            parseInt(data[i][0])<parseInt(data[j][0])    &&
            parseInt(data[i][1])<parseInt(data[j][1])
        ) rank[i]++
        else continue;
    }
}

let str = '';
for(i=0; i<rank.length; i++){
    str = str.concat(rank[i]+' ');
}
console.log(str);
