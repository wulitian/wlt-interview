// ����������ȵ��ַ������� Math.random().toString(36)��󳤶���11
function getRandom(n) {
    let res = Math.random().toString(36).slice(2, 2 + n);
    while (n > 11) {
        n-=11
        res += Math.random().toString(36).slice(2, 2 + n);
    }
    return res;
}

console.log(getRandom(14))