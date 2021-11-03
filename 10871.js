const fs =require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const N = parseInt(input[0].split(" ")[0]);
const X = parseInt(input[0].split(" ")[1]);

let data = [];
data = input[1].split(" ")

let str = ''
for(i=0; i<N; i++){
        if(Number(data[i])<X)
        str += data[i] + " ";
}

console.log(str);
