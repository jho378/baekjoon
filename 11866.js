const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(' ');

const [N, K] = input.map(e => parseInt(e));

class Node{
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

const head = new Node(null, null);

let tail = head;

let curr = new Node(null, head);



for (let i=1; i<N+1; i++){
    const node = new Node(i, null);
    tail.next = node;
    tail = node; 
}
tail.next = head;

const res = [];
let count = 0;
while(res.length !== N){
    curr.next = curr.next.next;
    if (curr.next.data !== null){
        count++;
    }
    if (count === K){
        res.push(curr.next.data);
        curr.next.data = null;
        count = 0;
    }
}

let answer = "<";
for (let i=0; i<res.length; i++){
    answer += res[i] + ', ';
}
answer = answer.substring(0, answer.length -2);
answer += ">";
console.log(answer);