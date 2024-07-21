// 示例 1：
// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.
// 示例 2：
// 输入：l1 = [0], l2 = [0]
// 输出：[0]
// 示例 3：
// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// 输出：[8,9,9,9,0,0,0,1]
const list = {
    value: 2,
    next: {
        value: 4,
        next: {
            value: 3,
            next: null
        }
    }
}
const list2 = {
    value: 5,
    next: {
        value: 6,
        next: {
            value: 4,
            next: null
        }
    }
}
function fn(list1, list2) {
    let str1 = ''
    let str2 = ''
    let res;
    let node1 = list1;
    let node2 = list2;
    while(node1) {
        str1+=node1.value+'';
        node1 = node1.next
    }
    while(node2) {
        str2+=node2.value+'';
        node2 = node2.next
    }
    res = parseInt(str1.split('').reverse().join(''))+parseInt(str2.split('').reverse().join(''))
    return [...res.toString().split('').reverse().map((e)=>parseInt(e))];
};
console.log(fn(list,list2))