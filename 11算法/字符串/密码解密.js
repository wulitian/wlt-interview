// 给定一段“密文”字符串 s，其中字符都是经过“密码本”映射的，现需要将“密文”解密并输出。
// 映射的规则（'a' ~ 'i'）分别用（'1' ~ '9'）表示；（'j' ~ 'z'）分别用（"10*" ~ "26*"）表示。
// 约束：映射始终唯一。
// 输入：20*19*20*
// 输出：tst
function fn(str) {
    let s = str;
    for (let i = 26; i >= 1; i--) {
        let key = i + (i > 9 ? '*' : '');
        let val = String.fromCharCode(i + 97 - 1);
        s = s.replaceAll(key, val)
    }
    return s;
}

console.log(fn('20*19*20*'))