// ������������ n �� k�����ط�Χ [1, n] �����п��ܵ� k ��������ϡ�
// ����԰� �κ�˳�� ���ش𰸡�
// ���룺n = 4, k = 2
// �����
// [
//     [2,4],
//     [3,4],
//     [2,3],
//     [1,2],
//     [1,3],
//     [1,4],
// ]
// ʾ�� 2��
// ���룺n = 1, k = 1
// �����[[1]]
function getRes(n, k) {
    let res = [];
    const getArr = (num,arr) => {
        if(arr.length===k) {
            res.push(arr.slice());
        }

        for (let i = num; i <= n; i++) {
            arr.push(i)
            getArr(i+1, arr);
            arr.pop();
        }
    }
    getArr(1, []);
    return res;
}

console.log(getRes(4,2))
