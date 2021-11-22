const fs = require('fs');
const input = fs.readFileSync('a.txt').toString();
const N = parseInt(input);

// const a = Math.floor(N/100001);
// const b = Math.floor((N - a*100001)/10001);
// const c = Math.floor((N - a*100001 - b*10001)/1001);
// const d = Math.floor((N - a*100001 - b*10001-c*1001)/101);
// const e = Math.floor((N - a*100001 - b*10001-c*1001-d*101)/11);
// const f = Math.floor((N - a*100001 - b*10001-c*1001-d*101-e*11)/2);
// if((N - a*100001 - b*10001-c*1001-d*101-e*11)%2!==0)    console.log(0);
// else    console.log(a*100000+b*10000+c*1000+d*100+e*10+f);

const arr = [];
for(let a=0; a<10; a++){
    for(let b=0; b<10; b++){
        for(let c=0; c<10; c++){
           for(let d =0; d<10; d++){
               for(let e=0; e<10; e++){
                   for(let f=0; f<10; f++){
                       if(a*100001+b*10001+c*1001+d*101+e*11+f*2 === N && f===Math.floor(f)) arr.push(100000*a +10000*b + 1000*c+100*d+10*e+f);
                   }
               }
           }
        }
    }
}
if(arr.length === 0)    console.log(0);
console.log(arr.reduce((p,c) => Math.min(p,c), 1000001));