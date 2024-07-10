// 输入小明身高为100
// 其他学生身高为95 96 97 98 99 101 102 103 104 105
// 结果：99 101 98 102 97 103 96 104 95 105
// 小明身高100，班级学生10个，
// 身高分别为95 96 97 98 99 101 102 103 104 105，
// 按身高差排序后结果为：99 101 98 102 97 103 96 104 95 105。

function fn(num, arr) {
    arr.sort((x,y)=>{
        let absA = Math.abs(x-num);
        let absB = Math.abs(y-num);
        if(absA!==absB) {
            return absA -absB;
        } else {
          return x-y;
        }
    })
    return arr;

}
console.log(fn(100,[95,96,97,98,99,101,102,103,104,105]))