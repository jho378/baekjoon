const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0].split(' ')[0]);
const M = parseInt(input[0].split(' ')[1]);
const data = [];
for(let i=1; i<N+1; i++) data.push(input[i].trim().split(''));


for(let i=0; i<N; i++){
    for(let j=0; j<M; j++){
        if(data[i][j]==='-')    data[i][j] = '|';
        else if(data[i][j]==='|')   data[i][j] = '-';
        else if(data[i][j]=== '/') data[i][j] = '\\';
        else if(data[i][j]==='\\')  data[i][j] = '/';
        else if(data[i][j]==='^')   data[i][j] = '<';
        else if(data[i][j]==='<')   data[i][j] = 'v';
        else if(data[i][j]==='v')   data[i][j] = '>';
        else if(data[i][j]==='>')   data[i][j] = '^';
        else;
    }
}

for(let j=M-1; j>=0; j--){
    let str = '';
    for(let i=0; i<N; i++){
        str += data[i][j]    
    }   
    console.log(str);
}

