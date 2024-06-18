// js判断字符串由数字和字母组成
function check(number) {
    let reg = /^[0-9a-zA-Z]*$/;
    if (reg.test(number)) {
        return true;
    } else {
        return false;
    }
}
console.log(check('12ad'))
