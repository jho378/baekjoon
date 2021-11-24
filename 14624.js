const fs = require('fs');
const input = fs.readFileSync('a.txt').toString();
const n = parseInt(input);

if(n%2===0) console.log('I LOVE CBNU');
else{
    console.log('*'.repeat(n));
    for(let i=0; i<=+Math.floor(n/2); i++){
        let str = '';
        str += ' '.repeat(Math.floor(n/2) - i);
        str += '*';
        if(i>0){
            str += ' '.repeat(2*i-1);
            str += '*';
        }
        console.log(str);
    }
}