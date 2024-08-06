// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
// 示例 1：
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 示例 2：
// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
// 示例 3：
// 输入：nums = [1]
// 输出：[[1]]

function getRes(numbers) {
    if(!numbers.length) return
    let res = [];
    let used = new Array(numbers.length).fill(false)
    const getArr = (arr) => {
        if(arr.length === numbers.length) {
            res.push([...arr]);
            return;
        }
        for (let i = 0; i < numbers.length; i++) {
            if(used[i]) {
                continue;
            }
            used[i] = true;
            arr.push(numbers[i]);
            getArr(arr);
            arr.pop();
            used[i] = false;
        }
    }
    getArr([]);
    return res;
}

console.log(getRes([1,2,3]))
