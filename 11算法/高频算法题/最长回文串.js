// 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串的长度。
// 在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。
// 示例 1:
// 输入:s = "abccccdd"
// 输出:7
// 解释:我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
// 示例 2:
// 输入:s = "a"
// 输出:1
// 解释：可以构造的最长回文串是"a"，它的长度是 1。
function fn(s) {
    const obj = {};
    let sum = 0;
    let state = false;
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            obj[s[i]]++;
        } else {
            obj[s[i]] = 1;
        }
    }
    Object.values(obj).forEach(e => {
        if (e % 2 === 0) {
            sum += e;
        } else {
            sum += e - 1;
            state = true;
        }
    })
    if (state) {
        sum += 1;
    }
    return sum;
}

console.log(fn('abccccdd'))
console.log(fn('a'))
