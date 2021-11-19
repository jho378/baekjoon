const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[1]);
const data =[];
for(let i=2; i<N+2; i++)    data.push(input[i].split(' '));

const friends = [];
const friendsOfFriends = [];
for(i=0; i<N; i++){
    const x = parseInt(data[i][0]);
    const y = parseInt(data[i][1]);

    if(x === 1 && !(friends.includes(y))) friends.push(y);
}

for(i=0; i<N; i++){
    const x = parseInt(data[i][0]);
    const y = parseInt(data[i][1]);
    if(friends.includes(x) && !(friends.includes(y)))    friendsOfFriends.push(y);
    else if(friends.includes(y) && !(friends.includes(x))) friendsOfFriends.push(x);
}
console.log(friends.length + friendsOfFriends.filter(e => e!==1).length);