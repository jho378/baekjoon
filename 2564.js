const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

// 블록 크기
const M = parseInt(input[0].split(' ')[0]);
const N = parseInt(input[0].split(' ')[1]);

// 동근이 
const n = parseInt(input[1]);

const X = parseInt(input[n+2].split(' ')[0]);
const Y = parseInt(input[n+2].split(' ')[1]);

const stores = [];
for(let i=2; i<n+2; i++) stores.push(input[i].split(' ').map(e => parseInt(e)));

let distanceSum = 0;

for(let i=0; i<n; i++){
    const A = stores[i][0];
    const B = stores[i][1];

    if((X===1 || X===2) && (A===1 || A===2)){
        if(X===A){
            distanceSum += Math.abs(Y-B);
        }   else{
            distanceSum += Math.min(N+2*M-Y-B, N+Y+B);
        }       
    }

    else if((X===3 || X===4) && (A===3 || A===4)){
        if(X===A){
            distanceSum += Math.abs(Y-B);
        }   else{
            distanceSum += Math.min(2*N+M-Y-B. M+Y+B);
        }
    }
    else if((X===1 || X===2) && (A===3 || A===4)){
        if(X===1 && A===4) distanceSum += M-Y+B;
        else if(X===1 && A===3) distanceSum += Y+B;
        else if(X===2 && A===4) distanceSum += M-Y+N-B;
        else if(X===2 && A===3) distanceSum += N-B+Y;
    }
    else if((X===3 || X===4) && (A===1 || A===2)){
        if(X===4 && A===1) distanceSum += M-B+Y;
        else if(X===4 && A===2) distanceSum += M-B+N-Y;
        else if(X===3 && A===1) distanceSum += Y+B;
        else if(X===3 && A===2) distanceSum += N-Y+B;
    }
}

console.log(distanceSum);
