const fs =require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const N = parseInt(input);

for(let i=0; i<N; i++){
    console.log(`${" ".repeat(N-i-1) +"*".repeat(i+1)}`)
}