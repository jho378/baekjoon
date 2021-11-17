const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split("\n");

const N = parseInt(input[0]);
const data =[];
for(let i=1; i<N+1; i++) data.push(input[i].split(" "));

for(i=0; i<data.length; i++){
    const a = parseInt(data[i][0])%10;
    const b = parseInt(data[i][1]) % 4;
    if(a===1)   console.log(1);
    else if(a===2){
        if(b===1)   console.log(2);
        if(b===2)   console.log(4);
        if(b===3)   console.log(8);
        if(b===0)   console.log(6);
    }
    else if(a===3){
        if(b===1)   console.log(3);
        if(b===2)   console.log(9);
        if(b===3)   console.log(7);
        if(b===0)   console.log(1);
    }
    else if(a===4){
        if(b===1 || b===3)   console.log(4);
        if(b===2 || b===0)   console.log(6);
    }
    else if(a===5)  console.log(5);
    else if(a===6)  console.log(6);
    else if(a===7){
        if(b===1)   console.log(7);
        if(b===2)   console.log(9);
        if(b===3)   console.log(3);
        if(b===0)   console.log(1);
    }
    else if(a===8){
        if(b===1)   console.log(8);
        if(b===2)   console.log(4);
        if(b===3)   console.log(2);
        if(b===0)   console.log(6);
    }
    else if(a===9){
        if(b===1 || b===3)   console.log(9);
        if(b===2 || b===0)   console.log(1);
    }
    else if(a===0)  console.log(10);
    else ; 
}