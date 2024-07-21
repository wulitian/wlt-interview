// 给定一组单词words，编写一个程序，找出其中的最长单词，且该单词由这组单词中的其他单词组合而成。若有多个长度相同的结果，返回其中字典序最小的一项，若没有符合要求的单词则返回空字符串。
// 示例：
// 输入： ["cat","banana","dog","nana","walk","walker","dogwalker"]
// 输出： "dogwalker"
// 解释： "dogwalker"可由"dog"和"walker"组成。
function fn(words) {
    const wordSet = new Set(words);
    words.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return b.length - a.length;
    });

    function canForm(word, wordSet) {
        for (let i = 1; i < word.length; i++) {
            const prefix = word.slice(0, i);
            const suffix = word.slice(i);
            if (wordSet.has(prefix) && (wordSet.has(suffix) || canForm(suffix, wordSet))) {
                return true;
            }
        }
        return false;
    }

    for (const word of words) {
        if (canForm(word, wordSet)) {
            return word;
        }
    }

    return '';
}

// 测试用例
console.log(fn(["cat", "banana", "dog", "nana", "walk", "walker", "dogwalker"])); // 输出: "dogwalker"
console.log(fn(["a", "b", "ab", "abc"])); // 输出: "ab"
console.log(fn(["abcd", "ab", "cd", "abcdcd"])); // 输出: "abcdcd"
