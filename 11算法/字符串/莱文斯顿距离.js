/***
 * 莱文斯坦距离，指两个字串之间，由一个转成另一个所需的最少编辑操作次数。
 允许的编辑操作包括：
 将一个字符替换成另一个字符
 插入一个字符
 删除一个字符
 */
let LWSDDistance = function(word1, word2) {
    const len1 = word1.length;
    const len2 = word2.length;
    const dp = Array.from(Array(len1 + 1), () => Array(len2 + 1))
    dp[0][0] = 0

    for (let i = 1; i <= len1; i++) dp[i][0] = dp[i - 1][0] + 1

    for (let i = 1; i <= len2; i++) dp[0][i] = dp[0][i - 1] + 1

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (word1[i - 1] === word2[j - 1])
                dp[i][j] = dp[i - 1][j - 1]
            else
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j-1]) + 1
        }
    }

    return dp[len1][len2]
};

console.log(LWSDDistance('hello', 'helooo'))