// aaabb => a3b2

function encode(str) {
    let res = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++
        } else {
            res += str[i] + count;
            count = 1
        }
    }
    return res;
}

console.log(encode("aaabb"))
