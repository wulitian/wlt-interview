// С���ѳ��٣���ѧ�Ŵ�С�����ų�һ�У�
// С�������ˣ������С���������⣬���������ҵ���Ӧ���ŵ�λ�á�
// �㷨���ӶȲ�����nLog(n)��ѧ��Ϊ�������ͣ����й�ģ �� 10000��
// ʾ�� 110��
// ���룺nums = [93,95,97,100,102,123,155]
// �����6

function fn(arr, num) {
    let low = 0;
    let height = arr.length - 1;
    let mid = Math.floor((height+low)/2)+low;
    while (low<height){
        if(arr[mid]<num) {
            low = mid;
            mid = Math.floor((height+low)/2)+low
        }
        if (arr[mid]>num) {
            height = mid;
            mid = Math.floor((height+low)/2)+low
        } else {
           return mid -1
        }
    }
    return mid -1;
}

console.log(fn([93, 95, 97, 100, 102, 123, 155], 110))
