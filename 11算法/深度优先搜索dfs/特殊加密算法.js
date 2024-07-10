// ��һ������ļ����㷨������Ϊһ�����ִ����������뱾����ת����������һ���������ִ���
// �������£�
// ����Ϊһ�����ִ��� 0~9 ���
// ���뱾Ϊ���� 0~9 ��ɵĶ�ά����
// ��Ҫ�����Ĵ�������˳�������뱾���ҵ�ͬ�������ִ������뱾������ִ��������ڵĵ�Ԫ��������ɣ����º����������ڵģ�ע�⣺�Խ��߲����ڣ�ͬһ����Ԫ������ֲ����ظ�ʹ�á�
// ÿһλ���Ķ�Ӧ���ļ�Ϊ���뱾���ҵ��ĵ�Ԫ�����ڵ��к�����ţ���Ŵ�0��ʼ����ɵ��������
// �����ĵ� i λ Data[i] ��Ӧ���뱾��Ԫ��Ϊ Book[x][y]�������ĵ� i λ��Ӧ������ΪX Y��X��Y֮���ÿո������
// ����ж������ģ������ַ�����С�����ġ�
// ������뱾�޷�ƥ�䣬����"error"��
// �������������ܳ���
// ʾ��1��
// ���뱾��
// 0 0 2
// 1 3 4
// 6 6 4
// ����'3'����'1 1'
// ʾ��2��
// ���뱾��
// 0 0 2
// 1 3 4
// 6 6 4
// ����'0 3'����'0 1 1 1'
// ʾ��3��
// ���뱾��
// 0 0 2 4
// 1 3 4 6
// 3 4 1 5
// 6 6 6 5
// ���ģ�"0 0 2 4"�����ģ�"0 0 0 1 0 2 0 3" �� "0 0 0 1 0 2 1 2"�������ֵ�����С��"0 0 0 1 0 2 0 3"

function getRes(word, ming) {
    const offsets = [
        [-1,0],
        [0,-1],
        [0,1],
        [1,0]
    ]
    const dfs = (x,y,index,path,used) =>{
        if(index === ming.length) {
            return true;
        }
        for (let [offsetX,offsetY] of offsets) {
            const newX = x + offsetX;
            const newY = y + offsetY;
            if(
                newX<0||
                newX>=word.length||
                newY<0||
                newY>=word.length||
                used[newX][newY]||
                word[newX][newY]!=ming[index]
            ) {
                continue;
            }
            path.push(`${newX} ${newY}`);
            used[newX][newY] = true;
            if(dfs(newX,newY,index+1,path,used)) {
                return true
            }
            used[newX][newY] = false;
            path.pop();
        }
        return false;
    }
    let starts = [];
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < word[0].length; j++) {
            if(word[i][j] === ming[0]) {
                starts.push([i, j])
            }
        }
    }
    for (let [x, y] of starts) {
        let used = new Array(word.length).fill(false).map(()=>new Array(word[0].length).fill(false));
        used[x][y] = true;
        const path = [];
        path.push(`${x} ${y}`);
        if(dfs(x,y,1,path,used)) {
            return path.join(' ');
        }
    }
    return 'error'
}

console.log(getRes([[0,0,2],[1,3,4],[6,6,4]],[0,3]))