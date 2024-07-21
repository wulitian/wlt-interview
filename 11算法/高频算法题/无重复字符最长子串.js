// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串的长度。
// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:
// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
function fn(s) {
    let max = 0;
    let left = 0;
    let set = new Set();
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left])
            left++;
        }
        set.add(s[right]);
        max = Math.max(max, right - left + 1);
    }
    return max;
}

// 测试用例
console.log(fn("abcabcbb")); // 输出: 3 ("abc")
console.log(fn("bbbbb"));    // 输出: 1 ("b")
console.log(fn("pwwkew"));   // 输出: 3 ("wke")
console.log(fn(""));         // 输出: 0
console.log(fn("au"));       // 输出: 2 ("au")
console.log(fn("dvdf"));     // 输出: 3 ("vdf")
