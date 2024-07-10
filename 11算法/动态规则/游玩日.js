// Wonderland��С����ס��һ�Һ��ܻ�ӭ������԰��WonderlandĿǰ��4����Ʊ��ʽ���ֱ�Ϊһ��Ʊ��1�죩������Ʊ��3�죩����Ʊ��7�죩����Ʊ��30�죩��
// ÿ����Ʊ��ʽ�ļ۸���һ�����������ÿ��Ʊ����Ʊ��ʱ���ڿ��������Ƶؽ������档���磺
// С���ƻ��ڽ�����һ�������������԰��С���ƻ����������ڽ���һ�����������
// С���ڵ�10������һ������Ʊ��С�������ڵ�10�ա���11�պ͵�12�ս��������Ƶ����档
// С���ƻ��ڽ�����һ�������������԰��С���ƻ����������ڽ���һ�����������
// ���ڣ��������ݸ�������Ʊ�۸������С���ƻ������������飬��������ƻ�����Ҫ��������ѡ�
// ���룺5 14 30 100
// ����: 1 3 5 20 21 200 202 230
// �����40
// ���ͣ�������Ʊ�۸�������������������������Ϣ������ÿ��ȥ���ʱ����һ��һ��Ʊ����ʡǮ�ģ�����С������8��һ��Ʊ��ÿ��5Ԫ����ͻ�����40Ԫ��
function getRes(cost, day) {
    const [dayCost1, dayCost3, dayCost7, dayCost30] = cost;
    let max = day[day.length - 1];
    let arr = new Array(max+1).fill(0);
    let start = 1;
    while(start<=max) {
        if(day.indexOf(start)!==-1) {
            let day1 = (start>1?arr[start-1]:0)+dayCost1;
            let day3 = (start>3?arr[start-3]:0)+dayCost3;
            let day7 = (start>7?arr[start-7]:0)+dayCost7;
            let day30 = (start>30?arr[start-30]:0)+dayCost30;
            arr[start] = Math.min(day1,day3,day7,day30);
        } else {
            arr[start] = arr[start-1];
        }
        start++;
    }
    console.log(arr);
    return arr[max];
}

console.log(getRes([5, 14, 30, 100], [1, 3, 5, 20, 21, 200, 202, 230]))
