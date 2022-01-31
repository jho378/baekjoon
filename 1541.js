const fs= require('fs');
const input = fs.readFileSync('a.txt').toString().trim();

const idx = input.indexOf("-");
if(idx===-1){
    const sum = input.split('+').map(e => parseInt(e)).reduce((p,c) => p+c, 0);
    console.log(sum);
}
else{
    let sum = 0;
    let i=0;
    let str = "";

    while(i!==idx){
        if(input[i]!=="+") str+=input[i];
        else{
            sum+=parseInt(str);
            str = "";
        }
        i++
    }
    sum+=parseInt(str);
    str='';
    
    i++;
    while(i<input.length){
        if(input[i]!=='+' && input[i]!=='-') str+=input[i];
        else{

            sum-=parseInt(str);
            str="";
        }
        i++
    }
    sum-=parseInt(str);
    console.log(sum)
}
