const fs= require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++) data.push(input[i]);

const alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

for(let i=0; i<3; i++){
    const str = data[i];
    let isReal = true;
    const cntArr = new Array(26).fill(0);
    for(let j=0; j<str.length; j++){
        cntArr[alp.indexOf(str[j])]+=1;
        for(let k=0; k<26; k++){
            if(cntArr[k]===3){
                if(str[j+1]!==str[j] || str[j+1]===undefined) isReal = false;
                else cntArr[k] = -1;
            }   
        }
    }
    if(isReal) console.log('OK');
    else console.log('FAKE');
}

