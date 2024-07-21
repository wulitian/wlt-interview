// 给你一个字符串数组 words ，找出并返回 length(words[i]) * length(words[j]) 的最大值，并且这两个单词不含有公共字母。如果不存在这样的两个单词，返回 0 。
// 示例 1：
// 输入：words = ["abcw","baz","foo","bar","xtfn","abcdef"]
// 输出：16
// 解释：这两个单词为 "abcw", "xtfn"。
// 示例 2：
// 输入：words = ["a","ab","abc","d","cd","bcd","abcd"]
// 输出：4
// 解释：这两个单词为 "ab", "cd"。
// 示例 3：
// 输入：words = ["a","aa","aaa","aaaa"]
// 输出：0
// 解释：不存在这样的两个单词。
function maxProduct(words) {
    const n = words.length;
    const masks = new Array(n).fill(0);
    const lens = new Array(n).fill(0);

    // 预处理每个单词的位掩码和长度
    for (let i = 0; i < n; i++) {
        let bitmask = 0;
        for (const char of words[i]) {
            bitmask |= 1 << (char.charCodeAt(0) - 'a'.charCodeAt(0));
        }
        masks[i] = bitmask;
        lens[i] = words[i].length;
    }

    let maxProduct = 0;

    // 计算最大乘积
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((masks[i] & masks[j]) === 0) { // 没有共同字母
                maxProduct = Math.max(maxProduct, lens[i] * lens[j]);
            }
        }
    }

    return maxProduct;
}

// 测试用例
console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"])); // 输出: 16
console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"])); // 输出: 4
console.log(maxProduct(["a", "aa", "aaa", "aaaa"])); // 输出: 0
