// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
// 你返回所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
// 示例 1：
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 解释：
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
// 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
// 注意，输出的顺序和三元组的顺序并不重要。
// 示例 2：
// 输入：nums = [0,1,1]
// 输出：[]
// 解释：唯一可能的三元组和不为 0 。
// 示例 3：
// 输入：nums = [0,0,0]
// 输出：[[0,0,0]]
// 解释：唯一可能的三元组和为 0 。
// function fn(nums) {
//     nums.sort((x,y)=>x-y);
//     let res = [];
//     const dfs = (start, arr) => {
//         if(arr.length === 3) {
//             if(arr.reduce((x,y)=>x+y)===0) {
//                 res.push([...arr]);
//             }
//             return
//         }
//
//         for (let i = start; i < nums.length; i++) {
//             if (i > start && nums[i] === nums[i - 1]) {
//                 continue;
//             }
//             arr.push(nums[i])
//             dfs(i+1,arr);
//             arr.pop();
//         }
//     }
//     dfs(0,[]);
//     return res;
// };
function fn(arr) {
    arr.sort((x, y) => x - y);
    let res = [];
    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue; // 2. 跳过重复元素
        }
        let left = i + 1;
        let right = arr.length - 1;
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            if (sum === 0) {
                while (left < right && arr[left] === arr[left + 1]) {
                    left++;
                }
                while (left < right && arr[right] === arr[right - 1]) {
                    right--;
                }
                res.push([arr[i], arr[left], arr[right]])
                left++;
                right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return res;
}

console.log(fn([-1, 0, 1, 2, -1, -4]))
console.log(fn([0, 1, 1]))
console.log(fn([0, 0, 0]))
