// 给定一个整数 n ，返回 n! 结果中尾随零的数量。
// 提示 n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1
// 示例 1：
// 输入：n = 3
// 输出：0
// 解释：3! = 6 ，不含尾随 0
// 示例 2：
// 输入：n = 5
// 输出：1
// 解释：5! = 120 ，有一个尾随 0
// 示例 3：
// 输入：n = 0
// 输出：0
function fn(n) {
    if(n===0) {
        return 0;
    }
    function dfs(num) {
        if(num===0) {
            return 0
        }
        if(num===1) {
            return 1;
        }
        return num * dfs(num-1)
    }
    let res = dfs(n).toString();
    let count = 0;
    for (let i = res.length-1; i >= 0; i--) {
        if(res[i]==='0') {
            count++;
        }else{
            break;
        }
    }
    return count;
}
console.log(fn(3))
console.log(fn(5))
console.log(fn(0))
