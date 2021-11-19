const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
const total = parseInt(input[0]);
const N = parseInt(input[1]);
const data =[];
for(let i=2; i<N+2; i++)    data.push(input[i].split(' '));
const friends = [];
const friendsOfFriends = [];
for(i=0; i<N; i++){
    const x = parseInt(data[i][0]);
    const y = parseInt(data[i][1]);
    if(x === 1 && friends.indexOf(y) === -1) friends.push(y);
    else if(y ===1 && friends.indexOf(x) === -1)    friends.push(x);
}

for(i=0; i<N; i++){
    const x = parseInt(data[i][0]);
    const y = parseInt(data[i][1]);
    if(friends.indexOf(x)!== -1 && friends.indexOf(y) === -1)    friendsOfFriends.push(y);
    else if(friends.indexOf(y)!== -1 && friends.indexOf(x) === -1 ) friendsOfFriends.push(x);
}
let sum = 0 ;
for(i=2; i<=total; i++){
    if(friendsOfFriends.indexOf(i)!== -1)   sum += 1; 
}
console.log(friends.length + sum);