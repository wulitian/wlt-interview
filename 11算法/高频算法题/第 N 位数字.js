// 给你一个整数 n ，请你在无限的整数序列 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...] 中找出并返回第 n 位上的数字。
// 示例 1：
// 输入：n = 3
// 输出：3
// 示例 2：
// 输入：n = 11
// 输出：0
// 解释：第 11 位数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是 0 ，它是 10 的一部分。
function findNthDigit(n) {
    // 1. 确定数字的位数（1位数、2位数、3位数等）
    let digitLength = 1; // 数字位数
    let count = 9; // 当前位数数字总个数
    let start = 1; // 当前位数数字起始值

    while (n > digitLength * count) {
        n -= digitLength * count;
        digitLength += 1;
        count *= 10;
        start *= 10;
    }

    // 2. 确定具体的数字
    start += Math.floor((n - 1) / digitLength);

    // 3. 确定具体的数字位
    const s = start.toString();
    const index = (n - 1) % digitLength;

    return parseInt(s[index]);
}

// 测试用例
console.log(findNthDigit(3)); // 输出: 3
console.log(findNthDigit(11)); // 输出: 0
console.log(findNthDigit(12)); // 输出: 1
console.log(findNthDigit(15)); // 输出: 2
console.log(findNthDigit(1000)); // 输出: 3
