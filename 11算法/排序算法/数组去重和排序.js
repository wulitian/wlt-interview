// ����һ����������飬ɾ�����е��ظ�Ԫ�أ�ʹ��ÿ��Ԫ��ֻ����һ�Σ����Ұ��ճ��ֵĴ����Ӹߵ��ͽ���������ͬ���ִ������յ�һ�γ���˳������Ⱥ�����
// ���룺[1,3,3,3,2,4,4,4,5]
// �����[3,4,1,2,5]
function fn(arr) {
    arr.sort((x,y)=>{
        let a = arr.filter(item=>item===x).length;
        let b = arr.filter(item=>item===y).length;
        if(a!==b) {
            return b -a;
        } else {
          return x-y;
        }
    })
    let set = new Set(arr);
    return [...set];

}
console.log(fn([1,3,3,3,2,4,4,4,5]))

