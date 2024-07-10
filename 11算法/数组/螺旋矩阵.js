// ����һ�� m �� n �еľ��� matrix ���밴�� ˳ʱ������˳�� �����ؾ����е�����Ԫ�ء�
// ���룺matrix = [[1,2,3],[4,5,6],[7,8,9]]
// �����[1,2,3,6,9,8,7,4,5]
// ���룺matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// �����[1,2,3,4,8,12,11,10,9,5,6,7]
function fn(arr) {
    let left = 0;
    let right = arr[0].length-1;
    let top = 0;
    let bottom = arr.length-1;
    let res = [];
    while(true) {
        for (let i = left; i <= right; i++) {
            res.push(arr[top][i])
        }
        top++;
        if(top>bottom) break;
        for (let i = top; i <= bottom; i++) {
            res.push(arr[i][right])
        }
        right--;
        if(right<left) break;
        for (let i = right; i >= left; i--) {
            res.push(arr[bottom][i])
        }
        bottom--;
        if(bottom<top) break;
        for (let i = bottom; i >= top; i--) {
            res.push(arr[i][left])
        }
        left++;
        if(left>right) break;
    }
    return res;
};
console.log(fn([[1,2,3],[4,5,6],[7,8,9]]));
console.log(fn([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
