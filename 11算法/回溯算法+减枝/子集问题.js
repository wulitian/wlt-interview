// ����һ���������� nums �������е�Ԫ�� ������ͬ �����ظ��������п��ܵ��Ӽ����ݼ�����
// �⼯ ���� �����ظ����Ӽ�������԰� ����˳�� ���ؽ⼯��
// ʾ�� 1��
// ���룺nums = [1,2,3]
// �����[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// ʾ�� 2��
// ���룺nums = [0]
// �����[[],[0]]
function getRes(numbers) {
    let res = [];
    const getArr = (num,arr) => {
        res.push(arr.slice());
        for (let i = num; i < numbers.length; i++) {
            arr.push(numbers[i])
            getArr(i+1, arr);
            arr.pop();
        }
    }
    getArr(0, []);
    return res;
}

console.log(getRes([1,2,3]))
