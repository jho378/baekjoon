const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(' ');

const data = input.map(e => parseInt(e));

const _data = Math.min(1000 * data[0] + 100*data[1] + 10*data[2] + data[3], 
    1000*data[1]+100*data[2]+10*data[3]+data[0],
    1000*data[2]+100*data[3]+10*data[0]+data[1],
    1000*data[3]+100*data[0]+10*data[1]+data[2]
);

let res = [];

for(let i=1; i<10; i++){
    for(let j=1; j<10; j++){
        for(let k=1; k<10; k++){
            for(let l=1; l<10; l++){
                const arr = [i,j,k,l];
                const min = Math.min(1000*arr[0] + 100*arr[1]+ 10*arr[2]+arr[3],
                    1000*arr[1] + 100*arr[2]+ 10*arr[3]+arr[0],
                    1000*arr[2] + 100*arr[3]+ 10*arr[0]+arr[1],
                    1000*arr[3] + 100*arr[0]+ 10*arr[1]+arr[2])
                res.push(min);
            }
        }
    }
}
res.sort((a,b) => a-b);
res = res.filter((e,idx) => res.indexOf(e)===idx);

console.log(res.indexOf(_data)+1);