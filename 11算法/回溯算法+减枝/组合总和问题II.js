// 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的每个数字在每个组合中只能使用一次。
// 注意：解集不能包含重复的组合。
// 示例 1:
// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 输出:
// [
//     [1,1,6],
//     [1,2,5],
//     [1,7],
//     [2,6]
// ]
// 示例 2:
//
// 输入: candidates = [2,5,2,1,2], target = 5,
// 输出:
// [
//     [1,2,2],
//     [5]
// ]
function getRes(candidates, target) {
    candidates.sort((a, b) => a - b);
    let res = [];
    const getArr = (num, arr) => {
        if (arr.length > candidates.length) {
            return;
        }
        if (arr.length > 0 && arr.reduce((x, y) => x + y) === target) {
            res.push(arr.slice());
            return;
        }
        for (let i = num; i < candidates.length; i++) {
            if (i - 1 >= num && candidates[i] === candidates[i - 1]) {
                continue;
            }
            arr.push(candidates[i])
            getArr(i + 1, arr);
            arr.pop();
        }
    }
    getArr(0, []);
    return res;
}

console.log(getRes([2, 5, 2, 1, 2], 5))
