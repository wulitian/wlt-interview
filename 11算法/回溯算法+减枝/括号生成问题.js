// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
// 示例 1：
// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：
// 输入：n = 1
// 输出：["()"]
function getRes(n) {
    let res = [];
    const getArr = (left, right, str) => {
        if (str.length === 2 * n) {
            res.push(str);
            return;
        }
        if (left > 0) {
            getArr(left-1, right, str + '(')
        }
        if (left < right) {
            getArr(left, right-1, str + ')')
        }
    }
    getArr(n, n, '');
    return res;
}

console.log(getRes(3))
