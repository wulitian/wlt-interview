// 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。
// 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
// 示例 1：
// 输入：n = 12
// 输出：3
// 解释：12 = 4 + 4 + 4
// 示例 2：
// 输入：n = 13
// 输出：2
// 解释：13 = 4 + 9
function getNum(num) {
    let newNum = Math.floor(Math.sqrt(num));
    let res = 0;
    let count = 0;
    for (let i = 1; i <= newNum; i++) {
        let c = 0;
        let n = i;
        while (res < num) {
            let pow = Math.pow(n, 2);
            if (num < res + pow) {
                n--;
            } else {
                res += pow;
                c++;
            }
        }
        console.log('c',c)
        if (count === 0 || count > c) {
            count = c;
        }
        res = 0;
    }
    return count;
}

console.log(getNum(12))
console.log(getNum(13))


