// 示例 1：
// 输入: s = "leetcode", wordDict = ["leet", "code"]
// 输出: true
// 解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。
// 示例 2：
// 输入: s = "applepenapple", wordDict = ["apple", "pen"]
// 输出: true
// 解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
//      注意，你可以重复使用字典中的单词。
// 示例 3：
// 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// 输出: false

function getState(s, wordDict) {
    const n = s.length;
    const set = new Set(wordDict);
    let arr = new Array(n + 1).fill(false);
    arr[0] = true;
    for(let i = 1; i <= n; i++) {
        for(let j = 0; j < i; j++) {
            if(arr[j] && set.has(s.substr(j, i-j))) {//动态转移方程
                arr[i] = true;
                break;
            }
        }
    }
    return arr[n];
}

console.log(getState("catsandog", ["cats", "dog", "sand", "and", "cat"]))
console.log(getState("leetcode", ["leet", "code"]))
