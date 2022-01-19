const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const lines = parseInt(input[0].split(' ')[0]);
const table = parseInt(input[0].split(' ')[1]);
const orders = [];
for(let i=1; i<lines+1; i++) orders.push(input[i]);

const postIt = [];
const timer = [];

const order = (num, t) => {
    postIt.push(num);
    timer.push(t);
    console.log(postIt.join(' ').trim());
}
const sort = () => {
    for(let i=0; i<timer.length-1; i++){
        for(let j=i+1; j<timer.length; j++){
            if(timer[i]>timer[j]){
                const tmp = timer[i];
                timer[i] = timer[j];
                timer[j] = tmp;
                const _tmp = postIt[i];
                postIt[i] = postIt[j];
                postIt[j] = _tmp;
            }
            else if(timer[i]===timer[j]){
                if(postIt[i]>postIt[j]){
                    const tmp = timer[i];
                    timer[i] = timer[j];
                    timer[j] = tmp;
                    const _tmp = postIt[i];
                    postIt[i] = postIt[j];
                    postIt[j] = _tmp;
                }
            }
        }
    }
    if(postIt.length===0) console.log('sleep');
    else console.log(postIt.join(' ').trim());
};

const complete = (x) => {
    const _x = postIt.indexOf(x);
    postIt.splice(_x, 1);
    timer.splice(_x, 1);
    if(postIt.length===0) console.log('sleep');
    else console.log(postIt.join(' ').trim());
}

for(let i=0; i<orders.length; i++){
    const __order = orders[i].trim().split(' ');
    if(__order[0]==='sort') sort();
    else if(__order[0]==='complete'){
        const _x = parseInt(orders[i].split(' ')[1]);
        complete(_x);
    }
    else{
        const _order = orders[i].split(' ');
        const _table = parseInt(_order[1]);
        const time = parseInt(_order[2]);
        order(_table, time);
    }
}
