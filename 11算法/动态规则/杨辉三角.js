// ����һ���Ǹ����� numRows�����ɡ�������ǡ���ǰ numRows �С�
// �ڡ�������ǡ��У�ÿ�����������Ϸ������Ϸ������ĺ͡�
// ʾ�� 1:
// ����: numRows = 5
// ���: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// ʾ�� 2:
// ����: numRows = 1
// ���: [[1]]
function getRes(num) {
    let arr = new Array(num);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(i+1).fill(1);
    }
    for (let i = 2; i < num; i++) {
        for (let j = 1; j < arr[i].length-1; j++) {
            arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
        }
    }
    return arr;
}

console.log(getRes(5))
