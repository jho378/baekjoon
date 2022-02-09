const fs= require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const datas = [];
for(let i=1; i<N+1; i++) datas.push(input[i]);

let max = 0;
for(let i=0; i<N; i++){
    const data = datas[i].split('');
    const friends = [];
    for(let j=0; j<N; j++){
        if(data[j]==='Y')   friends.push(j);
    }
    for(let j=0; j<friends.length; j++){
        const friend = datas[friends[j]];
        for(let k=0; k<N; k++){
            if(friend[k]==='Y') data[k] = 'Y'
        }
    }
    data[i] = 'N';
    const _friends = data.filter(e => e==='Y').length;
    max = Math.max(max, _friends);

}
console.log(max);