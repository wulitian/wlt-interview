// ����һ�������Ǹ������� m x n ���� grid �����ҳ�һ�������Ͻǵ����½ǵ�·����ʹ��·���ϵ������ܺ�Ϊ��С��
// ���룺grid = [[1,3,1],[1,5,1],[4,2,1]]
// �����7
// ���ͣ���Ϊ·�� 1��3��1��1��1 ���ܺ���С��
function getNum(arr) {
    let m = arr.length;
    let n = arr[0].length;
    let newArr = new Array(arr.length).fill(new Array(arr[0].length));
    newArr[0][0] = arr[0][0];
    for (let i = 1; i < n; i++) {
        newArr[0][i] = newArr[0][i - 1] + arr[0][i];
    }

    for (let i = 1; i < m; i++) {
        newArr[i][0] = newArr[i - 1][0] + arr[i][0];
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
           newArr[i][j] = Math.min(newArr[i - 1][j], newArr[i][j - 1]) + arr[i][j];
        }
    }
    console.log(newArr)
    return newArr[m-1][n-1]
}

console.log(getNum([[1,3,1],[1,5,1],[4,2,1]]))
