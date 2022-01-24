const fs =require('fs');
const str = fs.readFileSync('a.txt').toString().trim();

const words = [];

let isTag = false;
let i=0
let word = '';

while(i!==str.length){
    if(str[i]==='<'){
        if(word!==''){
            word = word.split('').reverse().join('');
            words.push(word);
            word=''
        }
        isTag = true;
    }
    if(isTag===true)    word+= str[i];
    if(str[i]==='>'){
        isTag = false;
        words.push(word);
        word = '';
    }
    else if(isTag===false){
        if(str[i]!==' ') word += str[i];
        else if(str[i]===' '){
            word = word.split('').reverse().join('');
            words.push(word);
            word = '';
            words.push(' ');
        }
    }
    i++
}
if(word!==''){
    word = word.split('').reverse().join('');
    words.push(word);
}

console.log(words.join(''));