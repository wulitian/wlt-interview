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
    const getArr = (arr) => {
        if(arr.length === numbers.length) {
            res.push(arr);
            return;
        }
        for (let i = 0; i < numbers.length; i++) {
            if(!arr.includes(numbers[i])) {
                getArr([...arr,numbers[i]])
            }
        }
    }
    getArr([]);
    return res;
}

console.log(getRes([1,2,3]))
