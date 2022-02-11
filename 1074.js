const fs= require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(' ');

let N = parseInt(input[0]);
let r = parseInt(input[1]);
let c = parseInt(input[2]);

let cnt = 0;
const Z = (N,r,c) => {
    if(N===1){
        if(r===0 && c===0) return 0;
        if(r===0 && c===1) return 1;
        if(r===1 && c===0) return 2;
        if(r===1 && c===1) return 3;
    }

   if(Math.pow(2, N)/2 <= r && Math.pow(2,N)/2 <= c)    return Math.pow(2, 2*N)* 3/4 + Z(N-1, r - Math.pow(2, N-1), c - Math.pow(2, N-1));
   else if(Math.pow(2, N)/2 <= r && Math.pow(2,N)/2 > c)  return Math.pow(2, 2*N)* 2/4 + Z(N-1, r - Math.pow(2, N-1), c);
   else if(Math.pow(2, N)/2 > r && Math.pow(2,N)/2 <= c)  return Math.pow(2, 2*N)* 1/4 + Z(N-1, r, c - Math.pow(2, N-1));
   else if(Math.pow(2, N)/2 > r && Math.pow(2,N)/2 > c) return Z(N-1, r, c);                   

}

console.log(Z(N,r,c));