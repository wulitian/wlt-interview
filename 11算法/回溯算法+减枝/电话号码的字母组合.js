// ����һ������������ 2-9 ���ַ����������������ܱ�ʾ����ĸ��ϡ��𰸿��԰� ����˳�� ���ء�
// �������ֵ���ĸ��ӳ�����£���绰������ͬ����ע�� 1 ����Ӧ�κ���ĸ��
// const dic = {
//     2: 'abc',
//     3: 'def',
//     4: 'ghi',
//     5: 'jkl',
//     6: 'mno',
//     7: 'pqrs',
//     8: 'tuv',
//     9: 'wxyz',
// }
// ���룺digits = "23"
// �����["ad","ae","af","bd","be","bf","cd","ce","cf"]
// ʾ�� 2��
// ���룺digits = ""
// �����[]
// ʾ�� 3��
// ���룺digits = "2"
// �����["a","b","c"]

function getRes(digits) {
    if(!digits.length) {
        return;
    }
    const dic = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    let res = [];
    const getArr = (num, curr) => {
        if (curr.length === digits.length) {
            res.push(curr);
            return;
        }
        let curDic = dic[digits[num]]
        for (let curDicElement of curDic) {
            getArr(num + 1, curr + curDicElement);
        }
    }
    getArr(0, '');
    return res;
}

console.log(getRes('23'))
