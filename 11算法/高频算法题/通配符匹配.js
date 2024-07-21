// 给你一个输入字符串 (s) 和一个字符模式 (p) ，请你实现一个支持 '?' 和 '*' 匹配规则的通配符匹配：
// '?' 可以匹配任何单个字符。
// '*' 可以匹配任意字符序列（包括空字符序列）。
// 判定匹配成功的充要条件是：字符模式必须能够 完全匹配 输入字符串（而不是部分匹配）。
// 示例 1：
// 输入：s = "aa", p = "a"
// 输出：false
// 解释："a" 无法匹配 "aa" 整个字符串。
// 示例 2：
// 输入：s = "aa", p = "*"
// 输出：true
// 解释：'*' 可以匹配任意字符串。
// 示例 3：
// 输入：s = "cb", p = "?a"
// 输出：false
// 解释：'?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。
function isMatch(s, p) {
    const m = s.length;
    const n = p.length;
    const dp = Array(m + 1).fill(false).map(() => Array(n + 1).fill(false));

    dp[0][0] = true;

    // Initialize dp for the case when s is empty
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            } else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = false;
            }
        }
    }

    return dp[m][n];
}

// 测试用例
// console.log(isMatch("aa", "a")); // 输出: false
// console.log(isMatch("aa", "*")); // 输出: true
// console.log(isMatch("cb", "?a")); // 输出: false
console.log(isMatch("adceb", "*a*b")); // 输出: true
// console.log(isMatch("acdcb", "a*c?b")); // 输出: false
// function fn() {
// }
// console.log(fn())
