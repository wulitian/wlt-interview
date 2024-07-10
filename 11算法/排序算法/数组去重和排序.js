// 给定一个乱序的数组，删除所有的重复元素，使得每个元素只出现一次，并且按照出现的次数从高到低进行排序，相同出现次数按照第一次出现顺序进行先后排序。
// 输入：[1,3,3,3,2,4,4,4,5]
// 输出：[3,4,1,2,5]
function fn(arr) {
    arr.sort((x,y)=>{
        let a = arr.filter(item=>item===x).length;
        let b = arr.filter(item=>item===y).length;
        if(a!==b) {
            return b -a;
        } else {
          return x-y;
        }
    })
    let set = new Set(arr);
    return [...set];

}
console.log(fn([1,3,3,3,2,4,4,4,5]))

