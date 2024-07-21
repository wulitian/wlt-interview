// 给你一个满足下述两条属性的 m x n 整数矩阵：
// 每行中的整数从左到右按非严格递增顺序排列。
// 每行的第一个整数大于前一行的最后一个整数。
// 给你一个整数 target ，如果 target 在矩阵中，返回 true ；否则，返回 false 。
// 示例 1：
// 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// 输出：true
// 示例 2：
// 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// 输出：false
function fn(arr, target) {
    let m = arr.length;
    let n = arr[0].length;
    let left = 0;
    let right = m * n - 1;
    while (left <= right) {
        const mid = Math.floor((right + left) / 2);
        let val = arr[Math.floor(mid / n)][mid % n];
        if (val === target) {
            return true;
        } else if (target < val) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return false;
}

console.log(fn([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3))
console.log(fn([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13))
