const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = parseInt(input[0]);
const data = [];

for(let i=1; i<N+1; i++){
    data.push(parseInt(input[i]));
}

for(let j=0; j<data.length; j++){
    for(let k=j+1; k<data.length; k++){
        if(data[j]>data[k]){
            let temp = data[j];
            data[j] = data[k];
            data[k] = temp;
        }
    }
}

for(i=0;  i<data.length; i++) console.log(data[i]);


// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// const N = parseInt(input[0]);
// const data = [];
// const swap = (x,y) => {
//     if(x<=y) return;
//     if(x>y){
//         let temp = x;
//         x = y;
//         y = temp;
//     }
// }


// for(let i=1; i<N+1; i++){
//     data.push(parseInt(input[i]));
// }



// for(let j=0; j<data.length; j++){
//     for(let k=j+1; k<data.length; k++){
//         swap(data[j], data[k]);
//     }
// }

// for(i=0;  i<data.length; i++) console.log(data[i]);