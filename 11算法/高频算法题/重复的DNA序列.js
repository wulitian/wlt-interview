// DNA序列 由一系列核苷酸组成，缩写为 'A', 'C', 'G' 和 'T'.。
// 例如，"ACGAATTCCG" 是一个 DNA序列 。
// 在研究 DNA 时，识别 DNA 中的重复序列非常有用。
// 给定一个表示 DNA序列 的字符串 s ，返回所有在 DNA 分子中出现不止一次的 长度为 10 的序列(子字符串)。你可以按 任意顺序 返回答案。
// 示例 1：
// 输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// 输出：["AAAAACCCCC","CCCCCAAAAA"]
// 示例 2：
// 输入：s = "AAAAAAAAAAAAA"
// 输出：["AAAAAAAAAA"]

function fn(s) {
    let set1 = new Set();
    let set2 = new Set();
    for (let i = 0; i < s.length - 10; i++) {
        let curr = s.substring(i, i + 10);
        if (set1.has(curr)) {
            set2.add(curr);
        } else {
            set1.add(curr);
        }
    }
    return [...set2];
}

console.log(fn("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))
console.log(fn("AAAAAAAAAAAAA"))
