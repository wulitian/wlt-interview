// ����: 9
// ���: 9=9��9=4+5��9=2+3+4��Result:3
// ˵��: ���� 9 �����ֱ�ʾ������
// ��1�����ʽֻ��1����Ȼ�������������
// ��2�����ʽ��2����Ȼ������2���������
// ��3�����ʽ��3����Ȼ����
// ��������ÿ�����ʽ�е���Ȼ�����ǰ�������������ġ����������֮���޿ո�

function fn(num) {
    let res = [];
    let arr = [];
    for (let i = 0; i < 9; i++) {
        arr.push(i+1);
    }
    let left = 0;
    let right = 0;
    while (left<num&&right<num){
        let arrSlice = arr.slice(left,right+1);
        let arrSum = arrSlice.reduce((x,y)=>x+y);
        if(arrSum===9){
            res.push(arrSlice);
            right++
        } else if (arrSum<9) {
            right++
        } else if(arrSum>9) {
            left++
        }
    }
    return res;
}
console.log(fn(9))