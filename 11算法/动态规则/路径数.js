// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
// 问总共有多少条不同的路径？
// 输入：m = 3(纵向), n = 2(横向)
// 输出：3
// 输入：m = 3(纵向), n = 7(横向)
// 输出：28
function getNum(m, n) {
    if (m < 1 && n < 1) {
        return 0;
    }
    let arr = [];
    for (let i = 0; i < m; i++) {
        arr[i] = new Array(n);
    }

    for (let i = 0; i < m; i++) {
        arr[i][0] = 1;
    }

    for (let i = 0; i < n; i++) {
        arr[0][i] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
        }
    }
    console.log(arr)
    return arr[m - 1][n - 1];
}

console.log(getNum(3, 2))
