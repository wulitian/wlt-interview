// ���룺candidates = [2,3,6,7], target = 7
// �����[[2,2,3],[7]]
// ���ͣ�
// 2 �� 3 �����γ�һ���ѡ��2 + 2 + 3 = 7 ��ע�� 2 ����ʹ�ö�Ρ�
// 7 Ҳ��һ����ѡ�� 7 = 7 ��
// ������������ϡ�

function getSum(candidates, target) {
    let len = candidates.length;
    let temp = [];
    let res = [];
    const getArr = (temp, target, start) => {
        if (target === 0) {
            res.push(temp)
            return;
        } else {
            // [2, 3, 6, 7]
            for (let i = start; i < len; i++) {
                if (target - candidates[i] < 0) {
                    break;
                }
                temp.push(candidates[i]);
                console.log(111,temp,target - candidates[i],i)
                getArr(temp.slice(), target - candidates[i], i);
                temp.pop();
            }
        }
    }
    getArr(temp, target, 0);
    return res;
}

console.log(getSum([2, 3, 6, 7], 7))
