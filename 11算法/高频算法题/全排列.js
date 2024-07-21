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
function fn(nums) {
    let res = [];
    let stateArr = new Array(nums.length).fill(false);
    const dfs = (arr) => {
        if (arr.length === nums.length) {
            res.push([...arr]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if(stateArr[i]) {
                continue;
            }
            arr.push(nums[i])
            stateArr[i] = true;
            dfs(arr)
            arr.pop();
            stateArr[i] = false;
        }
    }
    dfs([])
    return res;
}

console.log(fn([1, 2, 3]))
