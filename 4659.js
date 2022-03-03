const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

for(let i=0; i<input.length-1; i++){
    const str = input[i];
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let bool = false;
    for(let j=0; j<vowels.length; j++){
        if(str.includes(vowels[j])) bool = true;
    }
    const arr = [];
    for(let j=0; j<str.length; j++){
        if(vowels.includes(str[j])) arr.push(0);
        else arr.push(1);
    }
    let continuos = 1;
    for(let j=0; j<arr.length; j++){
        if(arr[j]===arr[j+1]) continuos+=1;
        else continuos = 1;
        
        if(continuos===3){
            bool = false;
            break;
        }
    }
    for(let j=0; j<str.length; j++){
        if(str[j]===str[j+1]){
            if(str[j]!=='e' && str[j]!=='o') bool = false;
        }
    }
    if(bool===true) console.log('<'+str+'> is acceptable.');
    else    console.log('<'+str+'> is not acceptable.')
}