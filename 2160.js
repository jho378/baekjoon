const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<5*N+1; i+=5){
    let str = '';
    str += input[i].trim() + input[i+1].trim() + input[i+2].trim() + input[i+3].trim() + input[i+4].trim(); 
    data.push(str);
}
console.log(data)
let min = 40;
let str = '';
for(i=0; i<N; i++){
    for(let j=i+1; j<N; j++){
        let diff = 0;
        for(let k=0; k<35; k++){
            if(data[i].slice(k, k+1)!== data[j].slice(k, k+1))  diff +=1;
        }
        if(diff<min){
            min = diff; 
            res = `${i+1} ${j+1}`
        }
    }
}
console.log(res);