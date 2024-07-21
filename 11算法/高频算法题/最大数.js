// 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。
// 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。
// 示例 1：
// 输入：nums = [10,2]
// 输出："210"
// 示例 2：
// 输入：nums = [3,30,34,5,9]
// 输出："9534330"
function fn(nums) {
    if (nums.every(num => num === 0)) return "0";
    nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
    return nums.join('');
}
console.log(fn([10,2]))
console.log(fn([3,30,34,5,9]))
