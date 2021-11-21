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

    for(let i=1; i<N+1; i++){
        const arr = [];
        for(let j=0; j<input[i].length; j++){
        if(!arr.includes(input[i].charCodeAt(j))){
            arr.push(input[i].charCodeAt(j));
            }
        }
        console.log(2015 - arr.reduce((p,c) => p+c, 0));
    }
        process.exit()
});

// readline도 한번씩 연습해보자! 