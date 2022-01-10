const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

const str = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const data = [];

for(let i=A; i<=B; i++){
    const num = i;
    const ten = Math.floor(num/10); 
    const one = num%10;
    if(ten!==0) data.push(`${str[ten]} ${str[one]}`); 
    else data.push(`${str[one]}`);
}

const res = data.sort();

const answer = [];
res.forEach(e => {
    const number = e;
    const strNumber = number.split(' ');
    if(strNumber.length===1) answer.push(str.indexOf(strNumber[0]));
    else{
        answer.push(str.indexOf(strNumber[0]) * 10 + str.indexOf(strNumber[1]));
    }
})

for(let i=0; i<answer.length; i+=10){
    const arr = answer.slice(i, i+10);
    console.log(arr.join(' '));
}