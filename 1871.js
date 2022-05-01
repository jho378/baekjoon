const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);

for (let i=1; i<N+1; i++){
    const data = input[i].split('-');
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabet = data[0];
    const alphabetValue = Math.pow(26, 2) * alphabets.indexOf(alphabet[0]) + Math.pow(26, 1) * alphabets.indexOf(alphabet[1]) + alphabets.indexOf(alphabet[2]);

    const number = parseInt(data[1]);
    if (Math.abs(alphabetValue - number) <= 100){
        console.log('nice');
    }   else {
        console.log('not nice'); 
    }
}
