// aCd123 => acb123
// 正则写法
function lowerCase(str) {
    return str.replace(/([A-Z])/g, (l) => l.toLowerCase())
}
// 通过code码值A：65，a:97,差值32
function lowerCase2(str) {
    let res = "";
    for (let s of str) {
        let charCode = s.charCodeAt(0);
        if(charCode>='A'.charCodeAt(0)&&charCode<='Z'.charCodeAt(0)) {
            s = String.fromCharCode(charCode + 32);
        }
        res += s
    }
    return res;
}
console.log(lowerCase('aCd123'))
console.log(lowerCase2('aCd123'))
