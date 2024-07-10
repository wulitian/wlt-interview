// 幼儿园里有一个放倒的圆桶，它是一个线性结构，允许在桶的右边将篮球放入，可以在桶的左边和右边将篮球取出。
// 每个篮球有单独的编号，老师可以连续放入一个或多个篮球，小朋友可以在桶左边或右边将篮球取出，当桶只有一个篮球的情况下，必须从左边取出。
// 如老师按顺序放入1、2、3、4、5 共有 5 个编号的篮球，那么小朋友可以依次取出编号为1、2、3、4、5 或者 3、1、2、4、5 编号的篮球，无法取出 5、1、3、2、4 编号的篮球。
// 其中 3、1、2、4、5 的取出场景为：
// 简答起见，我们以 L 表示左，R表示右，此时取出篮球的依次取出序列为"RLLLL"。如果不能全部取出输出"NO"
// 输入：4,5,6,7,0,1,2（放入顺序）
// 输入：6,4,0,1,2,5,7（取出顺序）
// 输出：RLRRRLL

function fn(into, out){
    let arr = [];
    let res = [];
    for (let i = 0; i < into.length; i++) {
        arr.push(into[i]);
        const dfs = ()=> {
            if(out[0] === arr[0]) {
                out.shift();
                arr.shift();
                res.push('L');
                if(arr.length>0) {
                    dfs();
                }
            }
            if(out[0] === arr[arr.length-1] && arr.length>1) {
                out.shift();
                arr.pop();
                res.push('R');
                if(arr.length>0) {
                    dfs();
                }
            }
        }
        dfs()
    }
    if(arr.length === 0) {
        return res.join('');
    } else {
        return 'NO'
    }
}
console.log(fn([4,5,6,7,0,1,2],[6,4,0,1,2,5,7]))
console.log(fn([1,2,3,4],[1,2,3,5]))

