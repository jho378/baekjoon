const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
let count = 0;
const data = [];
for(let i=1; i<N+1; i++){
    data.push(input[i].split(' ').map(e => parseInt(e)));
}

const isDuplicate = (num) => {
    if( Math.floor(num/100) === Math.floor(num/10) % 10 || Math.floor(num/10) % 10 === num%10 || Math.floor(num/100) === num%10 ){
        return true;
    }   else {
        return false;
    }
}
const hasZero = (num) => {
    if( Math.floor(num/10)%10 === 0 || num%10 === 0 ){
        return true;
    }   else {
        return false;
    }
}

const checkPossibility = (n1, arr) => {
    const num = arr[0];
    const strike = arr[1];
    const ball = arr[2];
    const answerCandidate = [Math.floor(n1/100), Math.floor(n1/10)%10, n1%10];
    const comparingNum = [Math.floor(num/100), Math.floor(num/10)%10, num%10];
    let _strike = 0;
    let _ball = 0;
    for(let i=0; i<3; i++){
        for (let j=0; j<3; j++){
            if (answerCandidate[i] === comparingNum[j]){
                if (i===j){
                    _strike++;
                }   else {
                    _ball++;
                }
            }   
        }
    }
    if (strike === _strike && ball === _ball){
        return true;
    }   else {
        return false;
    }
}
const main = () => {
    for(let i=123; i<988; i++){
        
        if(isDuplicate(i) || hasZero(i)){
            continue;
        }
        
        let isPossible = true;
        for (let j=0; j<N; j++){
            if (checkPossibility(i, data[j]) === false){
                isPossible = false;
                break;
            }   else {
                continue;
            }
        }
        if (isPossible){
            count++;
        }
    }
    console.log(count);
}
main();
