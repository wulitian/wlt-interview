// ����һ������ n ������ ��Ϊ n ����ȫƽ�������������� ��
// ��ȫƽ���� ��һ����������ֵ������һ��������ƽ�������仰˵����ֵ����һ�������Գ˵Ļ������磬1��4��9 �� 16 ������ȫƽ�������� 3 �� 11 ���ǡ�
// ʾ�� 1��
// ���룺n = 12
// �����3
// ���ͣ�12 = 4 + 4 + 4
// ʾ�� 2��
// ���룺n = 13
// �����2
// ���ͣ�13 = 4 + 9
function getNum(num) {
    let newNum = Math.floor(Math.sqrt(num));
    let res = 0;
    let count = 0;
    for (let i = 1; i <= newNum; i++) {
        let c = 0;
        let n = i;
        while (res < num) {
            let pow = Math.pow(n, 2);
            if (num < res + pow) {
                n--;
            } else {
                res += pow;
                c++;
            }
        }
        console.log('c',c)
        if (count === 0 || count > c) {
            count = c;
        }
        res = 0;
    }
    return count;
}

console.log(getNum(12))
console.log(getNum(13))


