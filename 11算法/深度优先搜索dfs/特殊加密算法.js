// 有一种特殊的加密算法，明文为一段数字串，经过密码本查找转换，生成另一段密文数字串。
// 规则如下：
// 明文为一段数字串由 0~9 组成
// 密码本为数字 0~9 组成的二维数组
// 需要按明文串的数字顺序在密码本里找到同样的数字串，密码本里的数字串是由相邻的单元格数字组成，上下和左右是相邻的，注意：对角线不相邻，同一个单元格的数字不能重复使用。
// 每一位明文对应密文即为密码本中找到的单元格所在的行和列序号（序号从0开始）组成的两个数宇。
// 如明文第 i 位 Data[i] 对应密码本单元格为 Book[x][y]，则明文第 i 位对应的密文为X Y，X和Y之间用空格隔开。
// 如果有多条密文，返回字符序最小的密文。
// 如果密码本无法匹配，返回"error"。
// 请你设计这个加密程序。
// 示例1：
// 密码本：
// 0 0 2
// 1 3 4
// 6 6 4
// 明文'3'密文'1 1'
// 示例2：
// 密码本：
// 0 0 2
// 1 3 4
// 6 6 4
// 明文'0 3'密文'0 1 1 1'
// 示例3：
// 密码本：
// 0 0 2 4
// 1 3 4 6
// 3 4 1 5
// 6 6 6 5
// 明文："0 0 2 4"，密文："0 0 0 1 0 2 0 3" 和 "0 0 0 1 0 2 1 2"，返回字典序最小的"0 0 0 1 0 2 0 3"

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