const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++)    data.push(input[i].trim().split(' '));
let total = 0;
let special = 0;
for(i=0; i<N; i++){
    const hh = parseInt(data[i][0].trim().slice(0, 2));
    const mm = parseInt(data[i][0].trim().slice(3, 5));
    const dd = parseInt(data[i][1]);
    total += dd;
    if(hh>= 7 && hh<=17)    special += dd;
    else if(hh===6 && mm + dd >= 60)    special += mm+dd-60;
    else if(hh===18 && mm+dd>=60)   special += 60 - mm;
    else if(hh===18 && mm+dd<60)    special += dd;
    else continue;
}


console.log(total * 5 + special * 5);