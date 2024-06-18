// js中有一个数组，其中保存的都是小写英文字符串，现在要把它按照除了第一个字母外的字符的字典顺序排序
// 若 a 小于 b，即 a - b 小于零，则返回一个小于零的值，数组将按照升序排列。
// 若 a 等于 b，则返回 0。
// 若 a 大于 b, 即 a - b 大于零，则返回一个大于零的值，数组将按照降序排列。
function selector(x, y) {
    if (typeof x == 'string' & typeof y == 'string') {
        let a = x.slice(1);
        let b = y.slice(1);
        if (a > b) {
            return 1
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    }
}
let arr = ['ac', 'ab', 'ca'];
arr.sort(selector)
console.log(arr)
