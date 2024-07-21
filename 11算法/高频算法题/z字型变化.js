// 示例 1：
// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"
// 示例 2：
// 输入：s = "PAYPALISHIRING", numRows = 4
// 输出："PINALSIGYAHRPI"
// 解释：
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// 示例 3：
// 输入：s = "A", numRows = 1
// 输出："A"
function fn(s, row) {
    let arr = new Array(Math.min(row, s.length)).fill('');
    let state = false;
    let currIndex = 0;
    for (let i = 0; i < s.length; i++) {
        if (currIndex === 0 || currIndex === row - 1) {
            state = !state;
        }
        arr[currIndex]+=s[i];
        currIndex = state ? currIndex + 1 : currIndex - 1
    }
    return arr.reduce((x,y)=>x+y);
}

// 测试用例
console.log(fn("PAYPALISHIRING", 3)); // 输出: "PAHNAPLSIIGYIR"
console.log(fn("PAYPALISHIRING", 4)); // 输出: "PINALSIGYAHRPI"
console.log(fn("A", 1));              // 输出: "A"
