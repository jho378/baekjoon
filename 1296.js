const fs =require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const name = input[0];
const N = parseInt(input[1]);
const teams = [];
for(let i=2; i<N+2; i++) teams.push(input[i]);

for(let i=0; i<N; i++){
    for(let j=i+1; j<N; j++){
        if(teams[i]>teams[j]){
            let temp = teams[i];
            teams[i] = teams[j];
            teams[j] = temp;
        }
    }
}

let [lCnt, oCnt, vCnt, eCnt] = [0,0,0,0];

for(let i=0; i<name.length; i++){
    const x = name.slice(i, i+1)
    if(x === 'L')  lCnt+=1;
    else if(x === 'O') oCnt+=1;
    else if(x === 'V') vCnt+=1;
    else if (x === 'E') eCnt +=1;
    else continue;
}

teamsCnt = [];

for(let i=0; i<teams.length; i++){
    const tmp = new Array(4).fill(0);
    for(let j=0; j<teams[i].length; j++){
        const team = teams[i].slice(j, j+1);
        if(team === 'L')  tmp[0]+=1;
        else if(team === 'O') tmp[1]+=1;
        else if(team === 'V') tmp[2]+=1;
        else if (team === 'E') tmp[3] +=1;
        else ;
    }
    teamsCnt.push(tmp);
}

let res = [];
for(let i=0; i<N; i++){
    let L = lCnt+teamsCnt[i][0];
    let O = oCnt+teamsCnt[i][1];
    let V = vCnt+teamsCnt[i][2];
    let E = eCnt+teamsCnt[i][3];
    let _res = ((L+O)*(L+V)*(L+E)*(O+V)*(O+E)*(V+E))%100;
    res.push(_res);
}
let max = res.reduce((p,c) => Math.max(p,c),-1);

console.log(teams[res.indexOf(max)]);