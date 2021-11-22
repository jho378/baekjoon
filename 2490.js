const fs= require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split("\n");

const data = [];
for(let i=0; i<input.length; i++)   data.push(input[i].trim().split(" "));

for(i=0; i<data.length; i++){
    let zero = 0;
    let one = 0;
    for(let j=0; j<4; j++){
    if(data[i][j]==='0')    zero+=1;
    else if(data[i][j]==='1')   one +=1;
    }
    switch(one){
        case 0 : console.log('D'); break;
        case 1 : console.log('C'); break;
        case 2 : console.log('B'); break;
        case 3 : console.log('A'); break;
        case 4 : console.log('E'); break;
    }
}
