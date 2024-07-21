// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 说明：每次只能向下或者向右移动一步。
// 示例 1：
// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7
// 解释：因为路径 1→3→1→1→1 的总和最小。
// 示例 2：
// 输入：grid = [[1,2,3],[4,5,6]]
// 输出：12
function fn(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let stateArr = new Array(arr.length).fill(0).map(() => new Array(arr[0].length).fill(0));
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (i === 0 && j === 0) {
                stateArr[i][j] = arr[i][j];
            }
            if (i === 0 && j > 0) {
                stateArr[i][j] = arr[i][j] + stateArr[i][j - 1];
            }
            if (i > 0 && j === 0) {
                stateArr[i][j] = arr[i][j] + stateArr[i - 1][j];
            }
            if (i > 0 && j > 0) {
                stateArr[i][j] = arr[i][j] + Math.min(stateArr[i][j - 1], stateArr[i - 1][j]);
            }
        }
    }
    console.log(stateArr)
    return stateArr[stateArr.length - 1][stateArr[0].length - 1]
}

console.log(fn([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))
console.log(fn([[1, 2, 3], [4, 5, 6]]))
console.log(fn([[1]]))
console.log(fn([]))
