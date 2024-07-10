// ����һ������СдӢ����ĸ���ַ���s�Լ�һ������shift������shift[i] = [direction, amount]��
// direction����Ϊ0����ʾ���ƣ���1����ʾ���ƣ���
// amount��ʾs�����Ƶ�λ����
// ���� 1 λ��ʾ�Ƴ�s�ĵ�һ���ַ����������ַ����뵽 s �Ľ�β��
// ���Ƶأ����� 1 λ��ʾ�Ƴ�s�����һ���ַ����������ַ����뵽 s �Ŀ�ͷ��
// ������ַ����������в����󣬷������ս����
// ���룺s = "abc", shift = [[0,1],[1,2]]
// �����"cab"
// ���ͣ�
// [0,1] ��ʾ���� 1 λ�� "abc" -> "bca"
// [1,2] ��ʾ���� 2 λ�� "bca" -> "cab"

function fn(str, arr) {
    let res = str;
    for (let i = 0; i < arr.length; i++) {
        let [x, y] = arr[i];
        let left = '';
        let right = '';
        if (x === 0) {
            right = res.slice(0, y);
            left = res.slice(y);
        } else {
            right = res.slice(0, -y);
            left = res.slice(-y);
        }
        res = left + right
        console.log('res', res)
    }
    return res;
};
console.log(fn('abc', [[0, 1], [1, 2]]));
console.log(fn('abcdefg', [[1, 1], [1, 1], [0, 2], [1, 3]]))
