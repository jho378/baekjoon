const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const N = parseInt(input[0]);
const courses = [];
for(let i=1; i<N+1; i++){
    const course = input[i].split(' ').map(e => parseInt(e));
    courses.push(course.slice(1));
}

const M = parseInt(input[N+1]);

const students = [];
for(let i=N+2; i<N+M+2; i++){
    const student = input[i].split(' ').map(e => parseInt(e));
    students.push(student.slice(1));
}

for(let i=0; i<M; i++){
    let res = N;
    const _student = students[i];
    for(let j=0; j<N; j++){
        for(let k=0; k<courses[j].length; k++){
            if(_student.includes(courses[j][k])) continue;
            else {
                res--;
                break;
            }
        }
    }
    console.log(res);
}