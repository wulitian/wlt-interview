//js请把这个数组里面的数组替换成中文
let a = ['壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾', '佰', '仟', '万', '亿'];
let arr = ['壹', '贰', 3, 4, '伍'];
let ss = arr.toString().replace(/\d/g, function (n) {
    return a[n];
})
console.log(ss);

