// 给定一个数字 N，当它满足以下条件的时候返回 true：
// 原数字旋转 180° 以后可以得到新的数字。
// 如 0, 1, 6, 8, 9 旋转 180° 以后，得到了新的数字 0, 1, 9, 8, 6 。
// 2, 3, 4, 5, 7 旋转 180° 后，得到的不是数字。
// 易混淆数(confusing number) 在旋转180°以后，可以得到和原来不同的数，且新数字的每一位都是有效的。
const obj = {
    1: '1',
    6: '9',
    8: '8',
    9: '6',
    0: '0'
}

function fn(num) {
    let res = ''
    for (let i = 0; i < num.length; i++) {
        if(obj[num[i]]) {
            res += obj[num[i]];
        } else {
            return false;
        }
    }
    console.log(res)
    return res!=num
};
console.log(fn('6'));
console.log(fn('89'));
console.log(fn('11'));
console.log(fn('25'));
