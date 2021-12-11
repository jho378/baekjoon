const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');


if(input.length===2){
    const N = parseInt(input[0].split(' ')[0]);
    const newScore = parseInt(input[0].split(' ')[1]);
    const total = parseInt(input[0].split(' ')[2]);
    const data = input[1].split(' ').map(e => parseInt(e));

    let cnt = 0;
    let res = 0;
    for(let i=0; i<data.length; i++){
        if(newScore < data[i]){
            cnt+=1;
            res+=1;
        }
        else if(newScore===data[i]) cnt+=1;
        else break;
    }
    if(cnt>=total)   console.log(-1);
    else console.log(res+1);
}
else{
    console.log(1);
}