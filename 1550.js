const fs = require('fs');
const str = fs.readFileSync('a.txt').toString();

let res = 0;

for(let i=0; i<str.length; i++){
    if(str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57){
        res += (str.charCodeAt(i)-48) * Math.pow(16, str.length - 1 - i);
    }
    else if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=70){
        res += (str.charCodeAt(i)-55)  * Math.pow(16, str.length -1 -i);
    }
}

console.log(res);

