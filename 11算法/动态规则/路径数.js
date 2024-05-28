// һ��������λ��һ�� m x n ��������Ͻ� ����ʼ������ͼ�б��Ϊ ��Start�� ����
// ������ÿ��ֻ�����»��������ƶ�һ������������ͼ�ﵽ��������½ǣ�����ͼ�б��Ϊ ��Finish�� ����
// ���ܹ��ж�������ͬ��·����
// ���룺m = 3(����), n = 2(����)
// �����3
// ���룺m = 3(����), n = 7(����)
// �����28
function getNum(m, n) {
    if (m < 1 && n < 1) {
        return 0;
    }
    let arr = [];
    for (let i = 0; i < m; i++) {
        arr[i] = new Array(n);
    }

    for (let i = 0; i < m; i++) {
        arr[i][0] = 1;
    }

    for (let i = 0; i < n; i++) {
        arr[0][i] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
        }
    }
    console.log(arr)
    return arr[m - 1][n - 1];
}

console.log(getNum(3, 2))
