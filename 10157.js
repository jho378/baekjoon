const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const X = input[0].split(' ').map(e=>parseInt(e))[0];
const Y = input[0].split(' ').map(e=>parseInt(e))[1];

let num = parseInt(input[1]);
if(num>X*Y) console.log(0);
else{
    let det = (X+Y)*2 - 4;
    let cnt = 0;

    while(num>det){
        num-=det;
        det-=8;
        cnt+=1;
    }

    const coordinates = [cnt+1, cnt+1];

    if(num<Y-2*cnt){
        coordinates[1]+= num-1;
    } 
    else if(Y-2*cnt<=num && num<X+Y-4*cnt){
        coordinates[1]+= Y-2*cnt-1;
        coordinates[0]+= num - (Y-2*cnt-1) -1;
    }
    else if(X+Y-4*cnt<=num && num<2*Y+X-6*cnt-2){
        coordinates[1]+= Y-2*cnt-1;
        coordinates[0]+= X - 2*cnt -1;
        coordinates[1]-= num - (X+Y-4*cnt -2) -1
    }
    else{
        coordinates[0] += det - num + 1;
    }

    console.log(coordinates.join(' '));
}
