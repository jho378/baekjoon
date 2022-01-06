const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);

const data = [];
for(let i=1; i<2*N+1; i++) data.push(input[i]);

for(let i=0; i<data.length; i+=2){
    const n = parseInt(data[i]);
    const candies = data[i+1].split(' ').map(e=>parseInt(e));
    candies.forEach((e, i) => {
        if(e%2!==0) candies[i]+=1;
    })
    let cnt = 0;
    while(candies.filter(e => e!==candies[0]).length!==0){
        const tmp = candies.map(e => e/2);
        candies[0] = candies[0]/2 + candies[candies.length -1]/2;
        for(let i=1; i<candies.length; i++){
            candies[i] = candies[i]/2 + tmp[i-1];
        }
        candies.forEach((e,i) => {
            if(e%2!==0) candies[i] +=1;
        });
        cnt+=1;
    }
    console.log(cnt);
}