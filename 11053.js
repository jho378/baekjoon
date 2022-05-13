const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const data = input[1].split(' ').map(e => parseInt(e));
const storage = new Array(N).fill(0);

for(let i=N-1; i>=0; i--){
    let count = 1;    
    for(let j=i+1; j<N; j++){
        if (data[i] >= data[j]){
            continue;
        }
        else if ( data[i] < data[j]){
            const post = storage.slice(j);
            const tmp = [];
            for (let idx=0; idx<post.length; idx++){
                if(data[i] < data[j+idx]){
                    tmp.push(post[idx]);
                }
            }
            const max = tmp.reduce((p,c) => Math.max(p,c), 0);
            count = max + 1;
            
            break;
        }
    }
    storage[i] = count;
}
console.log(storage.reduce((p,c) => Math.max(p,c), -1));
