const fs =require('fs');
const input = fs.readFileSync('a.txt').toString().trim().split(' ');

const original = parseInt(input[0]);
const newcomer = parseInt(input[1]);
const coupon = parseInt(input[2]);

let sum = original + newcomer;
let res = 0;
while(sum>=coupon){    
    const newCoupon = Math.floor(sum/coupon);  
    sum = sum - Math.floor(sum/coupon) * coupon + newCoupon;
    res += newCoupon;
}

console.log(res);

