const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim();
const N = parseInt(input);

let happiness = 0;
const happy = (num) => {
    if(num===1) return 0;
    else{
        happiness += Math.floor(num/2) * (num - Math.floor(num/2));
        return happy(Math.floor(num/2)) + happy(num - Math.floor(num/2));
    }
}
happy(N);
console.log(happiness);