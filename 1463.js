const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');
const N = parseInt(input[0]);

let result = 0;
const arr = [0, 0, 1, 1, 2, 3];
for(let i=6; i<N+1; i++){
    if (i%6===0){
        let min = Math.min(arr[i-1]+1, arr[i/3]+1);
        arr[i] = Math.min(min, arr[i/2] + 1);
    }   else if(i%3===0){
        arr[i] = Math.min(arr[i-1]+1, arr[i/3]+1);
    }   else if (i%2===0){
        arr[i] = Math.min(arr[i-1]+1, arr[i/2]+1);
    }   else {
        arr[i] = arr[i-1]+1; 
    }
}
console.log(arr);
console.log(arr[N]);
// class Node{
//     constructor(data, left=null, center=null, right=null, count=0){
//         this.data = data,
//         this.left = left,
//         this.center = center,
//         this.right = right,
//         this.count = count;
//     }
// }

// const init = new Node(N, null, null, null, 0);

// const arr = [];
// const traverse = (node) => {
//     if(node.data === 1){
//         arr.push(node.count);
//         return;
//     }
//     if(node.data % 3 === 0){
//         const _node = new Node(node.data/3, null, null, null, node.count+1);
//         node.left = _node;
//         traverse(node.left);
//     }
//     if(node.data % 2 === 0){
//         const _node = new Node(node.data/2, null, null, null, node.count+1);
//         node.center = _node;
//         traverse(node.center);
//     }
//     const _node = new Node(node.data-1, null, null, null, node.count+1);
//     node.right = _node;
//     traverse(node.right);
// }
// traverse(init);
// console.log(Math.min(...arr))

