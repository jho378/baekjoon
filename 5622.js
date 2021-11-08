const fs = require('fs');
const input = fs.readFileSync('a.txt').toString();

let cnt = 0;
for(let i=0; i<input.length; i++){
    const X = input.charCodeAt(i);
    if(X>=87) cnt += 10;
    else if(X>=84) cnt += 9;
    else if(X>=80) cnt += 8;
    else if(X>=77) cnt += 7;
    else if(X>=74) cnt += 6;
    else if(X>=71) cnt += 5;
    else if(X>=68) cnt += 4;
    else if(X>=65) cnt += 3;
}

console.log(cnt);