// ����ڣ���˾���±���m ��Ա�������� n ���±���m �� n��ÿ��Ա�����ٷ� 1 ���±��������Էֶ����
// ���˷ֵ�����±��ĸ����� Max1 �����˷ֵ��ڶ����±������� Max2 ��Max1 - Max2 �� 3 ��
// ���˷ֵ��� n - 1 ���±������� Max(n-1)�����˷ֵ���n���±������� Max(n) ��Max(n-1) �C Max(n) �� 3,
// ���ж����ַ��±��ķ�����
// ÿһ������m n����ʾm��Ա����n���±���m �� n
// ����ж������±��ַ�
// ���� 2 4
// ��� 2
// �ַ���2��:4=1+3,4=2+2
// ע�⣺1+3��3+1��һ�ַַ�

function getRes(person, bing) {
    let set = new Set();
    function fn(arr) {
        if (arr.length === person) {
            if(arr.reduce((x,y)=>x+y)===bing) {
                set.add(arr.sort((x,y)=>x-y).join());
            }
            return;
        }
        for (let i = 1; i <= bing; i++) {
            if (arr.length > 1 && arr[arr.length - 1] - i> 3 ) {
                return;
            } else {
                fn([...arr, i])
            }
        }
    }
    fn([])
    return set.size;
}

console.log(getRes(2, 4))
