// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
// 输出：7
// 解释：因为路径 1→3→1→1→1 的总和最小。
function getNum(arr) {
    let m = arr.length;
    let n = arr[0].length;
    let newArr = new Array(arr.length).fill(new Array(arr[0].length));
    newArr[0][0] = arr[0][0];
    for (let i = 1; i < n; i++) {
        newArr[0][i] = newArr[0][i - 1] + arr[0][i];
    }

    for (let i = 1; i < m; i++) {
        newArr[i][0] = newArr[i - 1][0] + arr[i][0];
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
           newArr[i][j] = Math.min(newArr[i - 1][j], newArr[i][j - 1]) + arr[i][j];
        }
    }
    console.log(newArr)
    return newArr[m-1][n-1]
}

console.log(getNum([[1,3,1],[1,5,1],[4,2,1]]))
