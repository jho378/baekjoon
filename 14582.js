const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const home = input[0].split(' ').map(e => parseInt(e));
const away = input[1].split(' ').map(e => parseInt(e));

let isReversed = false;

let homeScore = 0;
let awayScore = 0;

for(let i=0; i<9; i++){
    homeScore+= home[i];
    if(homeScore>awayScore){
        isReversed = true;
        break;
    }
    awayScore+= away[i];
}
if(isReversed===true) console.log('Yes');
else console.log('No')