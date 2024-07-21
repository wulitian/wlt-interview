// 典型的多分支递归问题
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
// 示例 1：
// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：
// 输入：n = 1
// 输出：["()"]
// 提示：
// 1 <= n <= 8
function fn(num) {
    let res = [];
    const dfs = (left,right,str) => {
        if(str.length === 2*num) {
            res.push(str);
            return;
        }
        if(left>0) {
            dfs(left-1,right,str+'(');
        }
        if(right>left) {
            dfs(left,right-1,str+')');
        }
    }
    dfs(num,num,'');
    return res
};
console.log(fn(3))
console.log(fn(2))
console.log(fn(1))