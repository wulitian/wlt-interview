// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
// 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
// 示例 1：
// 输入：num1 = "11", num2 = "123"
// 输出："134"
// 示例 2：
// 输入：num1 = "456", num2 = "77"
// 输出："533"
// 示例 3：
// 输入：num1 = "0", num2 = "0"
// 输出："0"
function fn(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let jw = 0;
    let res = '';
    while (i >= 0 || j >= 0) {
        let x = parseInt(num1[i]) || 0;
        let y = parseInt(num2[j]) || 0;
        let sum = x + y + jw;
        res = sum % 10 + res;
        jw = Math.floor(sum / 10);
        i--;
        j--;
    }
    return res;
}

console.log(fn('11', '123'))
console.log(fn('456', '77'))
console.log(fn('0', '0'))
