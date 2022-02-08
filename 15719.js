const fs= require('fs');
let data = fs.readFileSync('a.txt').toString().trim().split('\n');
const N = parseInt(data[0]);
let sum = 0;
let temp = "";

for(let i=0; i<data[1].length; i++){
    if(data[1][i]===" "){
        sum+= parseInt(temp);
        temp = "";
    }
    if(data[1][i]!==" ") temp+=data[1][i]
}
sum+=parseInt(temp)
const target = (N-1)*N/2;
console.log(sum-target);