// ���� A�ַ���Ϊ "ABCABBA"��B�ַ���Ϊ "CBABAC" ���Եõ���ͼ m * n �Ķ�ά����
// ������ԭ��Ϊ(0,0)���յ�Ϊ(m,n)��ˮƽ�봹ֱ��ÿһ���߾���Ϊ1��ӳ�������ϵ��
// ��ԭ�� (0,0) �� (0,A) Ϊˮƽ�ߣ�����Ϊ1���� (0,A) �� (A,C) Ϊ��ֱ�ߣ�����Ϊ1��
// ���������ַ���ͬһλ�õ������ַ���ͬ���������һ��б�ߣ��� (A,C) �� (B,B) ��̾���Ϊб�ߣ�����ͬ��Ϊ1��
// �������е�б�ߣ�(0,0) �� (B,B) �ľ���Ϊ��1 ��ˮƽ�� + 1 ����ֱ�� + 1 ��б�� = 3��
// ���ݶ����֪������̾���Ϊ9��
// ���룺ABC ABC
// �����3
// ���룺ABCABBA CBABAC
// �����9
function getRes(str1, str2) {
    let A = str1.split('');
    let B = str2.split('');
    let arr = new Array(str1.length+1).fill(0).map(()=>new Array(str2.length+1).fill(0))

    for (let i = 0; i < arr[0].length; i++) {
        arr[0][i] = i;
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i][0] = i;
    }
    for (let i = 1; i < arr.length; i++) {
        for (let j = 1; j < arr[i].length; j++) {
            if(A[i-1] === B[j-1]) {
                arr[i][j] = Math.min(arr[i-1][j-1])+1;
            } else {
                arr[i][j] = Math.min(arr[i-1][j],arr[i][j-1])+1;
            }
        }
    }
    return arr[arr.length-1][arr[arr.length-1].length-1]
}

console.log(getRes('ABCABBA','CBABAC'))
