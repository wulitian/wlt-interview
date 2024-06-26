// js在10000下不重复的数字中随机抽取5000不重复样本，多次操作获得的不同结果
// 1、第一种是最耗费性能的方法是每次去除的数字都要通过循环或者indexOf判断是否在新的数组中；
// 2、第二个是从10000个数字中随机取一个，放到一个新的数组中，然后删除这个数字；这样5000次都能保证都不重复；
// 3、数组去重的思想，将10000个数字都当成对象的下标，但是占用内存太多；
// 4、最佳方案是从10000个数字中随机取出一个，然后把数组最后一个元素填充到取出的空缺处；这样数组长度编程9999，进行5000次即可完成题目的要求；看似用splice删除数组中的一项挺容易的；为什么要数组最后一个元素填补到随机取出的空缺呢？这个涉及到内存的知识，假设你随机去到的是第10个数字，用splice删除第10个数字，那么实际上计算机会把后面9990个数字都向前移动一个单位；导致时间复杂度特标高；
// let arr = [];
// let newArr = []
// for (let i = 0; i <10000 ; i++) {
//     arr[i] = i;
// }
// for (let i = 0; i <5000 ; i++) {
//     let random = Math.round(Math.random()*arr.length-1)
//     newArr.push(arr[random]);
//     arr[random] = arr[arr.length-1];//最后一项放在当前要删除的项目
//     arr.length = arr.length-1;//删除最后一项
// }
// console.log(newArr);

// js在15到30之间生成30个数平均值范围在20在24之间
// let arr = [15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let newArr = []
for (let i = 0; i < 15; i++) {
    let random = ((Math.random()) + i + 15).toFixed(2);
    newArr.push(random);
    let arr = [];
    for (let j = 1; j < 9; j++) {
        if (40 - random + j >= 15 && 40 - random + j <= 30) {
            arr.push(40 - random + j)
        }
    }
    let random2 = (Math.random() * arr.length + arr[0]).toFixed(2);
    newArr.push(random2);
}
console.log(newArr);
let sum = newArr.reduce((prev, next, index, array) => parseInt(prev) + parseInt(next))
console.log('reduce', sum)
console.log(sum / 30);

