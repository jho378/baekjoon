// const fs = require('fs');
// const input = fs.readFileSync('a.txt').toString().split(" ");
// let A = parseInt(input[0]);
// let B = parseInt(input[1]);
// let C = parseInt(input[2]);

// let i = 1;
// while(true){
//     if(
//         (i - A) % 15 === 0 &&
//         (i - B) % 28 === 0 &&
//         (i - C) % 19 === 0
//     ) console.log(i)
//     i++
// };

const { Console } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    const [A, B, C] = line.split(" ").map(Number);
    let i =1;
    while(true){
        if(
            (i - A)%15 === 0 &&
            (i - B)%28 === 0 &&
            (i - C)%19 === 0
        ){
            console.log(i);
            process.exit();
        }
        count++;
    }
});
// readline 숙지하기