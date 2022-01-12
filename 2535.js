const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);

const data = [];
for(let i=1; i<N+1; i++) data.push(input[i].split(' ').map(e => parseInt(e)));

data.sort((p,c) => {
    if(p[2]>c[2]) return -1;
    else if(p[2]<c[2]) return 1;
    return 0;
})

const awards = [];
for(let i=0; i<data.length; i++){
    if(awards.length===2 && awards[0]===awards[1] && awards[1] === data[i][0]) continue;
    console.log(`${data[i][0]} ${data[i][1]}`);
    awards.push(data[i][0]);
    if(awards.length ===3) break; 
}