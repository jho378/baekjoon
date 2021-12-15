const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim();

let N = parseInt(input);

const devide = (N) => {
    if(N===1)   return ;
    for(let i=2; i<N; i++){
        if(N%i===0){
            console.log(i);
            N/=i;
            return devide(N);
        }   else continue;
    }
    console.log(N);
    N/=N
    return devide(N);
}

devide(N);