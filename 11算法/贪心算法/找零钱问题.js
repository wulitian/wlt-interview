// ��������һ���̵��ϰ壬����Ҫ���˿����� n ԪǮ��������Ǯ����ֵΪ��100Ԫ��50Ԫ��20Ԫ��10Ԫ��5Ԫ��2Ԫ��1Ԫ��
// �����������ʹ������Ҫ��Ǯ���������٣�
// ���磺����Ҫ����126Ԫ��������Ǯ���������ٵķ���Ϊ100Ԫ1�ţ�20Ԫ1�ţ�5Ԫ1�ţ�1Ԫ1�š�

function getNum(moneyArr, money) {
    const length = moneyArr.length;
    let index = 0;
    let number = 0;
    while (money !== 0 && index < length) {
        let floor = Math.floor(money / moneyArr[index]);
        if (floor !== 0) {
            money -= moneyArr[index] * floor;
            number += floor;
            if (money === 0) {
                return number;
            }
        }
        index++;
    }
}

console.log(getNum([100, 50, 20, 10, 5, 2, 1], 126))
