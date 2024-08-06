// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
// 示例 1：
// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// 示例 2：
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

function getRes(numbers) {
    if(!numbers.length) return
    let res = [];
    let used = new Array(numbers.length).fill(false);
    const getArr = (arr) => {
        if(arr.length === numbers.length) {
            res.push([...arr]);
            return;
        }
        for (let i = 0; i < numbers.length; i++) {
            if(used[i] || (i > 0 && numbers[i] === numbers[i - 1] && used[i - 1])) {
                continue
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

console.log(getRes([1,1,2]))
