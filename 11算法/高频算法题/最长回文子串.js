// 给你一个字符串 s，找到 s 中最长的回文子串。
// 示例 1：
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：
// 输入：s = "cbbd"
// 输出："bb"
// 测试用例
function fn(s) {
    let left = 0;
    let right = 0;
    const getRes = (l,r) =>{
        while (l>=0&&r<s.length&&s[l]===s[r]){
            l--;
            r++;
        }
        if(r-l>right-left) {
            left = l;
            right = r;
        }
    }
    for (let i = 0; i < s.length; i++) {
        getRes(i,i);
        getRes(i,i+1);
    }
    return s.slice(left+1,right);
}
console.log(fn("babad")); // 输出: "bab" 或 "aba"
console.log(fn("cbbd"));  // 输出: "bb"
console.log(fn("a"));     // 输出: "a"
console.log(fn("ac"));    // 输出: "a" 或 "c"