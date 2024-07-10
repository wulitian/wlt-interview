// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
// 示例 1：
// 输入：nums = [10,9,8,7,6,5,4,3,2,1]
// 输出：1

function getRes(numbers) {
    let sum = numbers.reduce((x,y)=>x+y);
    let res = Infinity;
    const getArr = (arr) => {
        if(arr.length === 5) {
            let sum2 = arr.reduce((x,y)=>x+y);
            let sum3 = sum-sum2;
            let sum4 = Math.abs(sum3-sum2);
            if(sum4<res) {
                res = sum4;
            }
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

console.log(getRes([10,9,8,7,6,5,4,3,2,1]))
