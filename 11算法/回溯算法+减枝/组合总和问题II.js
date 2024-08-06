// ����һ������ candidates ��һ��Ŀ���� target ���ҳ� candidates �����п���ʹ���ֺ�Ϊ target ����ϡ�
// candidates �е�ÿ��������ÿ�������ֻ��ʹ��һ�Ρ�
// ע�⣺�⼯���ܰ����ظ�����ϡ�
// ʾ�� 1:
// ����: candidates = [10,1,2,7,6,1,5], target = 8,
// ���:
// [
//     [1,1,6],
//     [1,2,5],
//     [1,7],
//     [2,6]
// ]
// ʾ�� 2:
//
// ����: candidates = [2,5,2,1,2], target = 5,
// ���:
// [
//     [1,2,2],
//     [5]
// ]
function getRes(candidates, target) {
    candidates.sort((a, b) => a - b);
    let res = [];
    const getArr = (num, arr) => {
        if (arr.length > candidates.length) {
            return;
        }
        if (arr.length > 0 && arr.reduce((x, y) => x + y) === target) {
            res.push(arr.slice());
            return;
        }
        for (let i = num; i < candidates.length; i++) {
            if (i - 1 >= num && candidates[i] === candidates[i - 1]) {
                continue;
            }
            arr.push(candidates[i])
            getArr(i + 1, arr);
            arr.pop();
        }
    }
    getArr(0, []);
    return res;
}

console.log(getRes([2, 5, 2, 1, 2], 5))
