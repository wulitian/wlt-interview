// 给定两个只包含数字的数组a，b，调整数组 a 里面的数字的顺序，使得尽可能多的a[i] > b[i]。
// 数组a和b中的数字各不相同。
// 输出所有可以达到最优结果的a数组的结果。
// 输入：a:[11,8,20]
// 输入：b:[10,13,7]
// 输出：1
// 最优结果只有一个，a = [11, 20, 8]，故输出1
function getRes(a, b) {
    let res = [];
    const dfs = (arr) =>{
        if(arr.length === a.length){
            res.push([...arr]);
        }
        for (let i = 0; i < a.length; i++) {
            if(a[i]<b[arr.length]) {
                continue;
            }
            if(arr.indexOf(a[i])===-1) {
                dfs([...arr,a[i]]);
            }
        }
    }
    dfs([]);
    return res;
}
console.log(getRes([11,8,20], [10,13,7]));
console.log(getRes([11,12,20], [10,13,7]));
console.log(getRes([1,2,3], [4,5,6]));