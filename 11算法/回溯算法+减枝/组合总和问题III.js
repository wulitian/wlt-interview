// �ҳ��������֮��Ϊ n �� k ��������ϡ������ֻ������ 1 - 9 ��������������ÿ������в������ظ������֡�
// ˵����
// �������ֶ�����������
// �⼯���ܰ����ظ�����ϡ�
// ʾ�� 1:
// ����: k = 3, n = 7
// ���: [[1,2,4]]
// ʾ�� 2:
// ����: k = 3, n = 9
// ���: [[1,2,6], [1,3,5], [2,3,4]]
function getRes(k, n) {
    let res = [];
    const getArr = (num, arr) => {
        if (arr.length === k && arr.reduce((x, y) => x + y) === n) {
            res.push(arr.slice());
            return;
        }
        for (let i = num; i <= 9; i++) {
            arr.push(i)
            getArr(i + 1, arr);
            arr.pop();
        }
    }
    getArr(1, []);
    return res;
}

console.log(getRes(3, 9))
