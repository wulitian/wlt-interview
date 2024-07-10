// 中秋节，公司分月饼，m 个员工，买了 n 个月饼，m ≤ n，每个员工至少分 1 个月饼，但可以分多个，
// 单人分到最多月饼的个数是 Max1 ，单人分到第二多月饼个数是 Max2 ，Max1 - Max2 ≤ 3 ，
// 单人分到第 n - 1 多月饼个数是 Max(n-1)，单人分到第n多月饼个数是 Max(n) ，Max(n-1) – Max(n) ≤ 3,
// 问有多少种分月饼的方法？
// 每一行输入m n，表示m个员工，n个月饼，m ≤ n
// 输出有多少种月饼分法
// 输入 2 4
// 输出 2
// 分法有2种:4=1+3,4=2+2
// 注意：1+3和3+1算一种分法

function getRes(person, bing) {
    let set = new Set();
    function fn(arr) {
        if (arr.length === person) {
            if(arr.reduce((x,y)=>x+y)===bing) {
                set.add(arr.sort((x,y)=>x-y).join());
            }
            return;
        }
        for (let i = 1; i <= bing; i++) {
            if (arr.length > 1 && arr[arr.length - 1] - i> 3 ) {
                return;
            } else {
                fn([...arr, i])
            }
        }
    }
    fn([])
    return set.size;
}

console.log(getRes(2, 4))
