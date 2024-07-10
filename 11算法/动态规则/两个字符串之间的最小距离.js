// 例如 A字符串为 "ABCABBA"，B字符串为 "CBABAC" 可以得到下图 m * n 的二维数组
// ，定义原点为(0,0)，终点为(m,n)，水平与垂直的每一条边距离为1，映射成坐标系。
// 从原点 (0,0) 到 (0,A) 为水平边，距离为1，从 (0,A) 到 (A,C) 为垂直边，距离为1；
// 假设两个字符串同一位置的两个字符相同，则可以作一个斜边，如 (A,C) 到 (B,B) 最短距离为斜边，距离同样为1。
// 作出所有的斜边，(0,0) 到 (B,B) 的距离为：1 个水平边 + 1 个垂直边 + 1 个斜边 = 3。
// 根据定义可知，，最短距离为9：
// 输入：ABC ABC
// 输出：3
// 输入：ABCABBA CBABAC
// 输出：9
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
