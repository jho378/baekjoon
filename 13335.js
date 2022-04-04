const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const [n, bridge, weight] = input[0].split(' ').map(e => parseInt(e));

const trucks = input[1].split(' ').map(e => parseInt(e));

const onBridge = [];
const duration = [];

let time = 0;

while(trucks.length!==0 || onBridge.length!==0){
    if(onBridge.length!==0){
        for(let i=0; i<duration.length; i++){ 
            duration[i] +=1;    
        }
        if(duration[0]>bridge){
            onBridge.shift();
            duration.shift();
        }
    }
    const totalWeight = onBridge.reduce((p,c) => p+c, 0); 
    if (trucks.length!==0 && totalWeight + trucks[0] <= weight){
        onBridge.push(trucks.shift());
        duration.push(1);
    }
    time++;
}
console.log(time);