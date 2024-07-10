// 给定一个包含小写英文字母的字符串s以及一个矩阵shift，其中shift[i] = [direction, amount]：
// direction可以为0（表示左移）或1（表示右移）。
// amount表示s左右移的位数。
// 左移 1 位表示移除s的第一个字符，并将该字符插入到 s 的结尾。
// 类似地，右移 1 位表示移除s的最后一个字符，并将该字符插入到 s 的开头。
// 对这个字符串进行所有操作后，返回最终结果。
// 输入：s = "abc", shift = [[0,1],[1,2]]
// 输出："cab"
// 解释：
// [0,1] 表示左移 1 位。 "abc" -> "bca"
// [1,2] 表示右移 2 位。 "bca" -> "cab"

function fn(str, arr) {
    let res = str;
    for (let i = 0; i < arr.length; i++) {
        let [x, y] = arr[i];
        let left = '';
        let right = '';
        if (x === 0) {
            right = res.slice(0, y);
            left = res.slice(y);
        } else {
            right = res.slice(0, -y);
            left = res.slice(-y);
        }
        res = left + right
        console.log('res', res)
    }
    return res;
};
console.log(fn('abc', [[0, 1], [1, 2]]));
console.log(fn('abcdefg', [[1, 1], [1, 1], [0, 2], [1, 3]]))
