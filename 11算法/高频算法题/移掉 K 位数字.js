// 给你一个以字符串表示的非负整数 num 和一个整数 k ，移除这个数中的 k 位数字，使得剩下的数字最小。请你以字符串形式返回这个最小的数字。
// 示例 1 ：
// 输入：num = "1432219", k = 3
// 输出："1219"
// 解释：移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219 。
// 示例 2 ：
// 输入：num = "10200", k = 1
// 输出："200"
// 解释：移掉首位的 1 剩下的数字为 200. 注意输出不能有任何前导零。
// 示例 3 ：
// 输入：num = "10", k = 2
// 输出："0"
// 解释：从原数字移除所有的数字，剩余为空就是 0 。
function fn(str, k) {
    let stock = [];
    for (let i = 0; i < str.length; i++) {
        while (stock.length > 0 && str[i] < stock[stock.length - 1] && k > 0) {
            stock.pop();
            k--;
        }
        stock.push(str[i])
    }
    while (k > 0) {
        stock.pop();
        k--;
    }
    let res = stock.join('').replace(/^[0]+/, '');
    return res === '' ? '0' : res;
}

console.log(fn('1432219', 3))
console.log(fn('10200', 1))
console.log(fn('10', 2))
