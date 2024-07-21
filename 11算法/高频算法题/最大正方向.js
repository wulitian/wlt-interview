// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
// 示例 1：
// 输入：matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// 输出：4
// 示例 2：
// 输入：matrix = [["0","1"],["1","0"]]
// 输出：1
// 示例 3：
// 输入：matrix = [["0"]]
// 输出：0
function fn(arr) {
    if (arr.length === 0 || arr[0].length === 0) {
        return 0;
    }
    let x = arr.length;
    let y = arr[0].length;
    let max = 0;
    const dp = new Array(x).fill(0).map(() => new Array(y).fill(0));
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            if (arr[i][j] === '1') {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
                }
                max = Math.max(max, dp[i][j]);
            }
        }
    }
    return max * max;
}

console.log(fn([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]))
console.log(fn([["0", "1"], ["1", "0"]]))
console.log(fn([["0"]]))
