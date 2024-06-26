// 改变原数组7种方法push,unshift,pop,shift,splice,sort,reverse

//1.push返回索引值
// let arr = ['a','b','c']
// let a = arr.push('x');
// console.log(a)
// console.log(arr)

//2.unshift返回索引值
// let arr = ['a','b','c']
// let a = arr.unshift('x');
// console.log(a)
// console.log(arr)

//3.pop返回移除的元素
// let arr = ['a','b','c']
// let a = arr.pop();
// console.log(a)
// console.log(arr)

//4.shift返回移除的元素
// let arr = ['a','b','c']
// let a = arr.shift();
// console.log(a)
// console.log(arr)

//5.splice返回剪切的数组
// let arr = ['a','b','c']
// let a = arr.splice(1,2);
// console.log(a)
// console.log(arr)

//6.sort返回排序后的数组
// let arr = ['d','b','c']
// let a = arr.sort();
// console.log(a)
// console.log(arr)

//7.reverse返回翻转后的数组
// let arr = ['d','b','c']
// let a = arr.reverse();
// console.log(a)
// console.log(arr)

// 不改变原数组的方法concat(),slice(),join(),indexOf(),lastIndexOf(),filter(),map(),every(),some(),forEach(),find(),findIndex(),includes()，Array.isArray()

// 1. concat(),返回拼接后的数组
// let arr = ['d','b','c']
// let arr2 = ['d','b','c']
// let a = arr.concat(arr2);
// console.log(a)
// console.log(arr)

// 2. slice(),返回剪切的数组
// let arr = ['d','b','c']
// let a = arr.slice(1,2);
// console.log(a)
// console.log(arr)

// 3. join(),返回转换后的字符串
// let arr = ['d','b','c']
// let a = arr.join(',')
// console.log(a)
// console.log(arr)

// 4. indexOf(),查找某一个元素返回第一个数组下标如果没有匹配返回-1
// let arr = ['d','b','c']
// let a = arr.indexOf(',')
// console.log(a)
// console.log(arr)

// 5. lastIndexOf(),重后向前查找某一个元素返回第一个数组下标如果没有匹配返回-1
// let arr = ['d','b','c']
// let a = arr.lastIndexOf(',')
// console.log(a)
// console.log(arr)

// 6. filter(),返回在原数组结果基础上过滤后的结果
// let arr = ['d','b','c']
// let a = arr.filter(function (cur,index,array) {
//     return cur!='b'
// })
// console.log(a)
// console.log(arr)

// 7. map(),返回格式化后的数组
// let arr = ['d','b','c']
// let a = arr.map(function (cur,index,array) {
//     return cur!='b'
// })
// console.log(a)
// console.log(arr)

// 8. every(),对每一项进行检测如果都满足条件返回true
// let arr = ['d','b','c']
// let a = arr.every(function (cur,index,array) {
//     return cur!='b'
// })
// console.log(a)
// console.log(arr)

// 9. some(),只要检测到一个满足条件就返回true并停止执行
// let arr = ['d','b','c']
// let a = arr.some(function (cur,index,array) {
//     return cur!='b'
// })
// console.log(a)
// console.log(arr)

// 10. forEach(),没有返回值遍历每一项
// let arr = ['d','b','c']
// arr.forEach(function (cur,index,array) {
//     console.log(cur)
// })
// console.log(a)
// console.log(arr)

// 11. find(),ES6返回第一次满足条件的元素，找不到返回undefined
// let arr = ['d','b','c']
// let a = arr.find(function (cur,index,array) {
//     return cur!='b'
// })
// console.log(a)
// console.log(arr)

// 12. findIndex(),返回第一个满足条件的下标，并停止寻找区别是findIndex() 的参数为一个回调函数,且一般用于对象数组
// let arr = ['d','b','c']
// let a = arr.findIndex(function (cur,index,array) {
//     return cur==='b'
// })
// console.log(a)
// console.log(arr)

// 13. includes()如果包含返回true，适用于简单数组与some类似
// let arr = ['d','b','c']
// let a = arr.includes('b')
// console.log(a)
// console.log(arr)

// 13. Array.isArray()可以判断元素是否为数组,是返回true
// let arr = ['d','b','c']
// let a = Array.isArray(arr)
// console.log(a)
// console.log(arr)

