// ��������ֻ�������ֵ�����a��b���������� a ��������ֵ�˳��ʹ�þ����ܶ��a[i] > b[i]��
// ����a��b�е����ָ�����ͬ��
// ������п��Դﵽ���Ž����a����Ľ����
// ���룺a:[11,8,20]
// ���룺b:[10,13,7]
// �����1
// ���Ž��ֻ��һ����a = [11, 20, 8]�������1
function getRes(a, b) {
    let res = [];
    const dfs = (arr) =>{
        if(arr.length === a.length){
            res.push([...arr]);
        }
        for (let i = 0; i < a.length; i++) {
            if(a[i]<b[arr.length]) {
                continue;
            }
            if(arr.indexOf(a[i])===-1) {
                dfs([...arr,a[i]]);
            }
        }
    }
    dfs([]);
    return res;
}
console.log(getRes([11,8,20], [10,13,7]));
console.log(getRes([11,12,20], [10,13,7]));
console.log(getRes([1,2,3], [4,5,6]));