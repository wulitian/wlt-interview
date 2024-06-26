// ����һ�������ظ����ֵ����� nums �������� ���п��ܵ�ȫ���� ������� ������˳�� ���ش𰸡�
// ʾ�� 1��
// ���룺nums = [1,2,3]
// �����[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// ʾ�� 2��
// ���룺nums = [0,1]
// �����[[0,1],[1,0]]
// ʾ�� 3��
// ���룺nums = [1]
// �����[[1]]

function getRes(numbers) {
    if(!numbers.length) return
    let res = [];
    const getArr = (arr) => {
        if(arr.length === numbers.length) {
            res.push(arr);
            return;
        }
        for (let i = 0; i < numbers.length; i++) {
            if(!arr.includes(numbers[i])) {
                getArr([...arr,numbers[i]])
            }
        }
    }
    getArr([]);
    return res;
}

console.log(getRes([1,2,3]))
