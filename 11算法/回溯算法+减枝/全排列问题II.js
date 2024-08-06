// ����һ���ɰ����ظ����ֵ����� nums ��������˳�� �������в��ظ���ȫ���С�
// ʾ�� 1��
// ���룺nums = [1,1,2]
// �����
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// ʾ�� 2��
// ���룺nums = [1,2,3]
// �����[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

function getRes(numbers) {
    if(!numbers.length) return
    let res = [];
    let used = new Array(numbers.length).fill(false);
    const getArr = (arr) => {
        if(arr.length === numbers.length) {
            res.push([...arr]);
            return;
        }
        for (let i = 0; i < numbers.length; i++) {
            if(used[i] || (i > 0 && numbers[i] === numbers[i - 1] && used[i - 1])) {
                continue
            }
            used[i] = true;
            arr.push(numbers[i]);
            getArr(arr);
            arr.pop();
            used[i] = false;
        }
    }
    getArr([]);
    return res;
}

console.log(getRes([1,1,2]))
