const fs = require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split('\n');

const yy = parseInt(input[0].split(' ')[0]);
const mm = parseInt(input[0].split(' ')[1]);
const dd = parseInt(input[0].split(' ')[2]);

const _yy = parseInt(input[1].split(' ')[0]);
const _mm = parseInt(input[1].split(' ')[1]);
const _dd = parseInt(input[1].split(' ')[2]);

if(_yy - yy>=1001 || (_yy - yy === 1000 && _mm>mm) || (_yy - yy === 1000 && _mm===mm && _dd >= dd))    console.log('gg');
else{
    const start = new Date(yy, mm, dd);
    const end = new Date(_yy, _mm, _dd);

    const days = (end - start)/(24*60*60*1000);
    console.log(`D-${days}`);
}