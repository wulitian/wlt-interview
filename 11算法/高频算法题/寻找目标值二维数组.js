// m*n 的二维数组 plants 记录了园林景观的植物排布情况，具有以下特性：
// 每行中，每棵植物的右侧相邻植物不矮于该植物；
// 每列中，每棵植物的下侧相邻植物不矮于该植物。
// 请判断 plants 中是否存在目标高度值 target。
// 示例 1：
// 输入：plants =
// [[2,3,6,8],
// [4,5,8,9],
// [5,9,10,12]], target = 8
// 输出：true
// 示例 2：
// 输入：plants = [[1,3,5],[2,5,7]], target = 4
// 输出：false
function fn(arr, num) {
    let row = 0;
    let col = arr[0].length - 1;
    while (row < arr.length && col >= 0) {
        if(arr[row][col] === num) {
            return true;
        } else if(arr[row][col] > num) {
            col--;
        } else {
            row++
        }
    }
    return false;
}

console.log(fn([[2, 3, 6, 8], [4, 5, 8, 9], [5, 9, 10, 12]], 8))
console.log(fn([[1, 3, 5], [2, 5, 7]], 4))
