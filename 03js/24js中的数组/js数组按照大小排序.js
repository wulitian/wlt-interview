// 数组按照从大到小的顺序排序；let arr=['90px','100px','10px','45px','30px'];
let arr = ['90px', '100px', '10px', '45px', '30px'];
arr.sort((a, b) => {
    a = parseInt(a);
    b = parseInt(b);
    return a - b
})
console.log(arr)

