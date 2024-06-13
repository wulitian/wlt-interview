// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
// 示例 1:
// 输入: numRows = 5
// 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// 示例 2:
// 输入: numRows = 1
// 输出: [[1]]
function getRes(num) {
    let arr = new Array(num);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(i+1).fill(1);
    }
    for (let i = 2; i < num; i++) {
        for (let j = 1; j < arr[i].length-1; j++) {
            arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
        }
    }
    return arr;
}

console.log(getRes(5))
