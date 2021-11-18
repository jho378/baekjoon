const fs = require('fs');

const input = fs.readFileSync('a.txt').toString().trim().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

const rev = (x) => {
    if(x<10)    return x;
    else if(x>=10 && x<100)     return (x%10) * 10 + Math.floor(x/10);
    else if(x>=100 && x<1000) return  (x%10)*100 + (Math.floor(x/10)%10)*10 + Math.floor(x/100); 
    else if (x>=1000)   return (x%10) * 1000 + (Math.floor(x/10)%10) *100 + (Math.floor(x/100)%10) * 10 + Math.floor(x/1000);
    else ;
}
console.log(rev(rev(A) + rev(B)));