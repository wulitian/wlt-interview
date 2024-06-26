// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
// 你可以按 任何顺序 返回答案。
// 输入：n = 4, k = 2
// 输出：
// [
//     [2,4],
//     [3,4],
//     [2,3],
//     [1,2],
//     [1,3],
//     [1,4],
// ]
// 示例 2：
// 输入：n = 1, k = 1
// 输出：[[1]]
function getRes(n, k) {
    let res = [];
    const getArr = (num,arr) => {
        if(arr.length===k) {
            res.push(arr.slice());
        }

        for (let i = num; i <= n; i++) {
            arr.push(i)
            getArr(i+1, arr);
            arr.pop();
        }
    }
    getArr(1, []);
    return res;
}

console.log(getRes(4,2))
