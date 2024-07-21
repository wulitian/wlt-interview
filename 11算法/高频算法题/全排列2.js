// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
// 示例 1：
// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
// [1,2,1],
// [2,1,1]]
// 示例 2：
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
function fn(nums) {
    let res = [];
    let stateArr = new Array(nums.length).fill(false);
    const dfs = (arr) => {
        if(arr.length === nums.length) {
            res.push([...arr]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (stateArr[i]) {
                continue;
            }
            if (i > 0 && nums[i] === nums[i - 1] && !stateArr[i - 1]) {
                continue;
            }
            stateArr[i] = true;
            arr.push(nums[i]);
            dfs(arr);
            stateArr[i] = false;
            arr.pop();
        }
    }
    dfs([]);
    return res;
}

console.log(fn([1, 1, 2]))
