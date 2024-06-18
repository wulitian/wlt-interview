// js去除字符串中连续重复的地方
function removeRepetition(str) {
    if (str !== '') {
        let result = str[0];
        for (let i = 1; i < str.length; i++) {
            if (str[i] !== str[i - 1]) {
                result += str[i];
            }
        }
    } else result = '';
    return result;
}

// js字符串去重
console.log(removeRepetition('345345333'))
let newStr = [...new Set('345345333')].join().replace(/\,/g, '')

console.log(newStr)
