// ����m�����飬ÿ�����鶼�Ѿ����������ź����ˡ���������Ҫ��������ͬ��������ѡ������������ÿ������ѡһ�������Ҽ������ǵľ��롣
// ��������a��b֮��ľ��붨��Ϊ���ǲ�ľ���ֵ|a-b|������������ȥ�ҵ�������
//
// ���룺
// [[1,2,3],
//  [4,5],
//  [1,2,3]]
// ����� 4
// ���ͣ�
// һ�ֵõ��� 4 �ķ����Ǵӵ�һ��������ߵ�����������ѡ�� 1��ͬʱ�ӵڶ���������ѡ�� 5 ��

let maxDistance = function(arrays) {
    let res = 0, min = Infinity, max = -Infinity
    for(let i = 0; i < arrays.length; i++){
        let start = arrays[i][0]
        let end = arrays[i][arrays[i].length-1]
        res = Math.max(res,max-start,end-min)
        max = Math.max(max,end)
        min = Math.min(min,start)
    }
    return res
};
console.log(maxDistance([[1,2,3], [4,5], [1,2,3]]));