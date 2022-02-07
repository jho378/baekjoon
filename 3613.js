const fs = require('fs');
const str = fs.readFileSync('/dev/stdin').toString().trim();

let isError = false;
let variable = '';

if(str.includes('_')){
    let upper = false;
    if(str[0]==='_' || str[str.length-1] === '_') isError = true;
    for(let i=0; i<str.length; i++){
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)< 90){
            isError = true;
            break;
        }  
        else{
            if(str.charCodeAt(i)>=97 && upper){
                variable += String.fromCharCode(str.charCodeAt(i) - 32); 
                upper = false;
            } 
            else if(str.charCodeAt(i)>=97) variable+= str[i];
            else{
                if(upper===true)  isError = true;
                upper = true;
            }
        }
    }   
}
else{
    if(str.charCodeAt(0)>=65 && str.charCodeAt(0)<=90) isError = true;
    for(let i=0; i<str.length; i++){
        if(str[i]==='_'){
            isError = true;
            break;
        }
        else{
            if(str.charCodeAt(i)>=97) variable+= str[i];
            else variable+= '_'+String.fromCharCode(str.charCodeAt(i)+32);
        }
    }
}

if(isError) console.log('Error!')
else console.log(variable);