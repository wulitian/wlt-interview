// 给你一个非常大的整数 n 和一个整数数字 x ，大整数 n 用一个字符串表示。n 中每一位数字和数字 x 都处于闭区间 [1, 9] 中，且 n 可能表示一个 负数 。
// 你打算通过在 n 的十进制表示的任意位置插入 x 来 最大化 n 的 数值。但 不能 在负号的左边插入 x 。
// 例如，如果 n = 73 且 x = 6 ，那么最佳方案是将 6 插入 7 和 3 之间，使 n = 763 。
// 如果 n = -55 且 x = 2 ，那么最佳方案是将 2 插在第一个 5 之前，使 n = -255 。
// 返回插入操作后，用字符串表示的 n 的最大值。
// 示例 1：
// 输入：n = "99", x = 9
// 输出："999"
// 解释：不管在哪里插入 9 ，结果都是相同的。
// 示例 2：
// 输入：n = "-13", x = 2
// 输出："-123"
// 解释：向 n 中插入 x 可以得到 -213、-123 或者 -132 ，三者中最大的是 -123 。
function fn(n, x) {
    let i = 0;
    if (parseInt(n) >= 0) {
        while (i < n.length) {
            if (parseInt(n[i]) < x) {
                return n.slice(0, i) + x + n.slice(i)
            }
            i++;
        }
        return n+x;
    } else {
        i+=1;
        while (i < n.length) {
            if (parseInt(n[i]) > x) {
                return n.slice(0, i) + x + n.slice(i)
            }
            i++;
        }
        return n+x;
    }
}

console.log(fn('99', 9))
console.log(fn('-13', 2))
