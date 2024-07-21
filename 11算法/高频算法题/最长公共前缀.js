// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。
// 示例 1：
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
// 示例 2：
// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。
function fn(arr) {
    if(arr.length<2) {
        return arr.join('');
    }
    let res = '';
    for (let i = 0; i < arr[0].length; i++) {
        let s = arr[0][i];
        let state = true;
        for (let j = 0; j < arr.length; j++) {
            if (i >= arr[j].length || s !== arr[j][i]) {
                state = false;
                return res;
            }
        }
        res += s;
    }
    return res;
};
console.log(fn(["flower"]))
console.log(fn(["flower", "flow", "flight"]))
console.log(fn(["dog", "racecar", "car"]))
