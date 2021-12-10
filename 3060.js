// const fs = require('fs');
// const input = fs.readFileSync('a.txt').toString().trim().split('\n');
// const N = parseInt(input[0]);
// const total = [];
// let sample = [];
// for(let i=1; i<2*N+1; i+=2){
//     total.push(parseInt(input[i]));
//     sample.push(input[i+1].split(' '));
// }
// sample = sample.map(e  => e.reduce((p,c) => parseInt(p)+parseInt(c), 0));


// for(let i=0; i<N; i++){
//     let cnt = 1;
//     let k=0;
//     while(total[i]>= sample[i] * Math.pow(4, k)){
//         cnt+=1;
//         k+=1;
//     }
//     console.log(cnt);
// }

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let input = [];

rl.on('line', function(line){
    input.push(line);
}).on('close', function(){
  const N = parseInt(input[0]);
    const total = [];
    let sample = [];
    for(let i=1; i<2*N+1; i+=2){
        total.push(parseInt(input[i]));
        sample.push(input[i+1].split(' '));
    }
    sample = sample.map(e  => e.reduce((p,c) => parseInt(p)+parseInt(c), 0));
    for(let i=0; i<N; i++){
        let cnt = 1;
        let k=0;
        while(total[i]>= sample[i] * Math.pow(4, k)){
            cnt+=1;
            k+=1;
        }
        console.log(cnt);
    }

    process.exit();
})