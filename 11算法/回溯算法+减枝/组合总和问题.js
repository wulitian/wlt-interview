// 输入：candidates = [2,3,6,7], target = 7
// 输出：[[2,2,3],[7]]
// 解释：
// 2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
// 7 也是一个候选， 7 = 7 。
// 仅有这两种组合。

function getSum(candidates, target) {
    let len = candidates.length;
    let temp = [];
    let res = [];
    const getArr = (temp, target, start) => {
        if (target === 0) {
            res.push(temp)
            return;
        } else {
            // [2, 3, 6, 7]
            for (let i = start; i < len; i++) {
                if (target - candidates[i] < 0) {
                    break;
                }
                temp.push(candidates[i]);
                console.log(111,temp,target - candidates[i],i)
                getArr(temp.slice(), target - candidates[i], i);
                temp.pop();
            }
        }
    }
    getArr(temp, target, 0);
    return res;
}

console.log(getSum([2, 3, 6, 7], 7))
