const fs = require('fs');;
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const n = parseInt(input[0]);
const data = [];
for(let i=1; i<n+1; i++) data.push(input[i].split(' '));

for(let i=0; i<n; i++){
    const bigO = data[i][0];
    const N = parseInt(data[i][1]);
    const T = parseInt(data[i][2]);
    const L = parseInt(data[i][3]);

    if(bigO==='O(N)'){
        console.log('May Pass.');
    }
    else if(bigO==='O(2^N)'){
        if(N > Math.log2(L*Math.pow(10, 8)/T)) console.log('TLE!');
        else console.log('May Pass.');
    }
    else if(bigO==='O(N!)'){
        let res = 1;
        let cnt = 0;
        for(let i=1; i<N+1; i++){
            res*=i;
            cnt++;
            if(res*T>L*Math.pow(10, 8)){
                cnt--;
                break;
            }
        }
        if(cnt===N) console.log("May Pass.");
        else console.log("TLE!");
    }
    else if(bigO==='O(N^3)'){
        if(N>Math.cbrt(L*Math.pow(10,8)/T)) console.log('TLE!');
        else console.log('May Pass.');
    }
    else if(bigO === 'O(N^2)'){
        if(N>Math.sqrt(L*Math.pow(10,8)/T)) console.log('TLE!');
        else console.log('May Pass.');
    }
}