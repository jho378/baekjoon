const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = [];
for(let i=1; i<N+1; i++)    data.push(input[i].split(' '));

const swap = (x, y) => {
    let temp = y;
    y = x;
    x = temp;
}

for(i=0; i<N; i++){
    for(let j=0; j<5; j++){
        for(let k=j+1; k<5; k++){
            if(parseInt(data[i][j]) > parseInt(data[i][k])){
                let temp = data[i][k];
                data[i][k] = data[i][j];
                data[i][j] = temp;
            }   // }   swap(data[i][j], data[i][k]);
        }
    }
    if(parseInt(data[i][3]) - parseInt(data[i][1]) >= 4)    console.log('KIN');
    else    console.log(parseInt(data[i][1]) + parseInt(data[i][2]) + parseInt(data[i][3]));
}

// swap을 외부에서 저렇게 정의해두고 이용하려고 하면 scope issue때문에 제대로 되지 않아요.