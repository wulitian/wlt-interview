// ����һ������ N��������������������ʱ�򷵻� true��
// ԭ������ת 180�� �Ժ���Եõ��µ����֡�
// �� 0, 1, 6, 8, 9 ��ת 180�� �Ժ󣬵õ����µ����� 0, 1, 9, 8, 6 ��
// 2, 3, 4, 5, 7 ��ת 180�� �󣬵õ��Ĳ������֡�
// �׻�����(confusing number) ����ת180���Ժ󣬿��Եõ���ԭ����ͬ�������������ֵ�ÿһλ������Ч�ġ�
const obj = {
    1: '1',
    6: '9',
    8: '8',
    9: '6',
    0: '0'
}

function fn(num) {
    let res = ''
    for (let i = 0; i < num.length; i++) {
        if(obj[num[i]]) {
            res += obj[num[i]];
        } else {
            return false;
        }
    }
    console.log(res)
    return res!=num
};
console.log(fn('6'));
console.log(fn('89'));
console.log(fn('11'));
console.log(fn('25'));
