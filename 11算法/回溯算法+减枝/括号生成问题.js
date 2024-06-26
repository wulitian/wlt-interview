// ���� n �����������ŵĶ������������һ�������������ܹ��������п��ܵĲ��� ��Ч�� ������ϡ�
// ʾ�� 1��
// ���룺n = 3
// �����["((()))","(()())","(())()","()(())","()()()"]
// ʾ�� 2��
// ���룺n = 1
// �����["()"]
function getRes(n) {
    let res = [];
    const getArr = (left, right, str) => {
        if (str.length === 2 * n) {
            res.push(str);
            return;
        }
        if (left > 0) {
            getArr(left-1, right, str + '(')
        }
        if (left < right) {
            getArr(left, right-1, str + ')')
        }
    }
    getArr(n, n, '');
    return res;
}

console.log(getRes(3))
