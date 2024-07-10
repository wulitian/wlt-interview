// 输入: 9
// 输出: 9=9，9=4+5，9=2+3+4，Result:3
// 说明: 整数 9 有三种表示方法，
// 第1个表达式只有1个自然数，最先输出，
// 第2个表达式有2个自然数，第2次序输出，
// 第3个表达式有3个自然数，
// 最后输出。每个表达式中的自然数都是按递增次序输出的。数字与符号之间无空格

function fn(num) {
    let res = [];
    let arr = [];
    for (let i = 0; i < 9; i++) {
        arr.push(i+1);
    }
    let left = 0;
    let right = 0;
    while (left<num&&right<num){
        let arrSlice = arr.slice(left,right+1);
        let arrSum = arrSlice.reduce((x,y)=>x+y);
        if(arrSum===9){
            res.push(arrSlice);
            right++
        } else if (arrSum<9) {
            right++
        } else if(arrSum>9) {
            left++
        }
    }
    return res;
}
console.log(fn(9))