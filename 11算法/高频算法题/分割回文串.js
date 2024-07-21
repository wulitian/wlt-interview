// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是回文串。返回 s 所有可能的分割方案。
// 示例 1：
// 输入：s = "aab"
// 输出：[["a","a","b"],["aa","b"]]
// 示例 2：
// 输入：s = "a"
// 输出：[["a"]]
function fn(s) {
    let res = [];
    function isPalindrome(start, end) {
        while (start < end) {
            if (s[start] !== s[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }
    const dfs = (start, arr) => {
        if (start === s.length) {
            res.push([...arr]);
            return;
        }
        for (let end = start; end < s.length; end++) {
            if (isPalindrome(start, end)) {
                arr.push(s.substring(start, end + 1));
                dfs(end + 1, arr);
                arr.pop();
            }
        }
    }
    dfs(0, []);
    return res;
}

console.log(fn('aab'))
console.log(fn('a'))
