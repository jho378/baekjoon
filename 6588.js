const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
const data = [];
for(let i=0; i<input.length-1; i++){
        data.push(parseInt(input[i]));
    }


const max = Math.max(...data);

const minor = [];
for(let i=3; i<max+1; i+=2){
    let isMinor = true;
    for(let j=2; j<=Math.sqrt(i); j++){
        if(i%j===0){
            isMinor = false;
            break;
        }
    }
    if (isMinor){
        minor.push(i);
    }
}

checkGoldBach = (num) => {
    
    let goldBachIsRight = false;
    for(let i=0; i<minor.length; i++){
        if (minor[i] >= num){
            break;
        }
        let restNum = num - minor[i];
        let restNumIsMinor = true;
        for(let j=2; j<=Math.sqrt(restNum); j++){
            if (restNum%j===0){
                restNumIsMinor = false;
                break;
            }
        }
        if (restNumIsMinor === true){
            console.log(`${num} = ${minor[i]} + ${restNum}`);
            goldBachIsRight = true;
        }
        
        if(goldBachIsRight===true){
            break;
        }
    }
    if(goldBachIsRight===false){
        console.log("Goldbach's conjecture is wrong.");
    }
}
for(let i=0; i<data.length; i++){
    checkGoldBach(data[i]);
}