const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input.length-1;
const arr = [];
for(let i=0; i<21; i++){
    arr.push([]);
}
for (let i=0; i<21; i++){
    for(let j=0; j<21; j++){
        arr[i].push([]);
    }
}

let sum = 0;
while(sum<64){
    for(let i=0; i<21; i++){
        for(let j=0; j<21; j++){
            for(let k=0; k<21; k++){
                if (i+j+k === sum){
                    if (i<=0 || j<=0 || k<=0 ){
                        arr[i][j][k] = 1;
                    }   else if (i < j && j < k){
                        arr[i][j][k] = arr[i][j][k-1] + arr[i][j-1][k-1] - arr[i][j-1][k];
                    }   else {
                        arr[i][j][k] = arr[i-1][j][k] + arr[i-1][j-1][k] + arr[i-1][j][k-1] - arr[i-1][j-1][k-1];
                    }
                }
            }
        }
    }
    sum++;
}

for (let i=0; i<N; i++){
    const data = input[i].split(' ').map(e => parseInt(e));
    let [a,b,c] = data;
    if (a<=0 || b<=0 || c<=0){
        console.log(`w(${a}, ${b}, ${c}) = 1`);
    }   else if (a>20 || b>20 || c>20){
        console.log(`w(${a}, ${b}, ${c}) = ${arr[20][20][20]}`);
    }   else {
        console.log(`w(${a}, ${b}, ${c}) = ${arr[a][b][c]}`);
    } 
}

// for (let i=0; i<N; i++){
//     const [x,y,z] = input.split[i](' ').map(e => parseInt(e));
//     if ( x<=0 || y<=0 || z<=0 ){
//         return 1;
//     }
// }

// const fib = (a, b, c){
//     if ( a <= 0 || b<= 0 || c<=0 ){
//         return 1;
//     }   else if (a>20 || b>20 || c>10){
//         return fib(20, 20, 20);
//     }   else if (a < b && b < c){
//         return fib(a, b, c-1) + fib(a, b-1, c-1) - fib (a, b-1, c);
//     }   else {
//         return fib(a-1, b, c) + fib(a-1, b-1, c) + fib(a-1, b, c-1) - fib(a-1, b-1, c-1);
//     }
// }

