// js实现千位分隔符
// 将第一个逗号前面的数字作为第一组，后面所有数字为第二组，第二组是由多个三位的数字组合而成的，整体需要匹配捕获，但是每个三位数不需要匹配捕获所以加？：。
// RegExp.$1获取第一个分组，RegExp.$2获取第二个分组。
// match返回匹配到的数据，是数组类型。
function getStr(str) {
    let s = str;
    let reg = /^([1-9]\d{0,2})((?:\d{3})+)$/;
    if (reg.test(str)) {
        s = str.replace(reg, function () {
            return RegExp.$1 + ',' + RegExp.$2.match(/\d{3}/g);
        })
    }
    return s
}

console.log(getStr('123456789'));//123,456,789

function getStr2(str) {
    let count = 0;
    let strNew = '';
    for (let i = str.length; i >= 0; i--) {
        if (count % 3 === 0 && count != 0) {
            strNew += ',';
        }
        strNew += str.substr(i, 1);
        count++;
    }
    return strNew.split('').reverse().join('');
}
console.log(getStr2('60123761'));

