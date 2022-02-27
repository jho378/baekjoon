const fs= require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++) data.push(input[i]);

if(N<10){
    let i=1
    while(1){
        const _data = data.map(e => e.slice(e.length- i));
        if(_data.filter((e,idx) => _data.indexOf(e)===idx).length !== N) i++;
        else{
            console.log(i);
            break;
        } 
    }
}
else if(N<100){
    let i=2
    while(1){
        const _data = data.map(e => e.slice(e.length- i));
        if(_data.filter((e,idx) => _data.indexOf(e)===idx).length !== N) i++;
        else{
            console.log(i);
            break;
        } 
    }
}
else if(N<1000){
    let i=3
    while(1){
        const _data = data.map(e => e.slice(e.length- i));
        if(_data.filter((e,idx) => _data.indexOf(e)===idx).length !== N) i++;
        else{
            console.log(i);
            break;
        }
    }
}