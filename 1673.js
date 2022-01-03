const fs =require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const data =[];
for(let i=0; i<input.length; i++)   data.push(input[i].split(' ').map(e => Number(e)));

data.forEach(arr => {
    const coupon = arr[0];
    const stamp = arr[1];
    let holdingCoupon = coupon;
    let holdingStamp = 0;
    let cnt = 0;

    while(true){
        if(holdingCoupon===0 && holdingStamp<stamp){
            console.log(cnt);
            break;
        }
        else{
        holdingStamp+= holdingCoupon;
        cnt+= holdingCoupon;
        holdingCoupon = 0;
        holdingCoupon+= Math.floor(holdingStamp/stamp);
        holdingStamp -= Math.floor(holdingStamp/stamp) * stamp;
        }
    }
})