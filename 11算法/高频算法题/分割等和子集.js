// 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
// 示例 1：
// 输入：nums = [1,5,11,5]
// 输出：true
// 解释：数组可以分割成 [1, 5, 5] 和 [11] 。
// 示例 2：
// 输入：nums = [1,2,3,5]
// 输出：false
// 解释：数组不能分割成两个元素和相等的子集。
function canPartition(nums) {
    const totalSum = nums.reduce((a, b) => a + b, 0);

    // 如果总和是奇数，不能分割成两个和相等的子集
    if (totalSum % 2 !== 0) return false;

    const target = totalSum / 2;
    const dp = Array(target + 1).fill(false);
    dp[0] = true;

    for (const num of nums) {
        console.log(num);
        // 从目标和倒序更新 dp 数组
        for (let j = target; j >= num; j--) {
            console.log(dp[j],dp[j - num])
            dp[j] = dp[j] || dp[j - num];
        }
    }

    return dp[target];
}

// 测试用例
console.log(canPartition([1, 5, 11, 5])); // 输出: true (可以分成 [1, 5, 5] 和 [11])
console.log(canPartition([1, 2, 3, 5])); // 输出: false (不能分成两个和相等的子集)
console.log(canPartition([1, 2, 5])); // 输出: false (不能分成两个和相等的子集)
console.log(canPartition([2, 2, 3, 7])); // 输出: true (可以分成 [2, 2, 3] 和 [7])
