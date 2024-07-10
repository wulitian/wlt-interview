// 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。
// 两个相邻元素间的距离为 1 。
// 输入：
// [[0,0,0],
//  [0,1,0],
//  [1,1,1]]
//
// 输出：
// [[0,0,0],
//  [0,1,0],
//  [1,2,1]]

function getRes(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if(arr[i][j] === 0) {
                res.push([i,j]);
            }else {
                arr[i][j] = -1;
            }
        }
    }
    while(res.length>0) {
        let [nodeX,nodeY] = res.shift();
        let offsets = [[0,-1],[0,1],[-1,0],[1,0]];
        for (let i = 0; i < offsets.length; i++) {
            let [x,y] = offsets[i];
            let offsetX = x+nodeX;
            let offsetY = y+nodeY;
            if(offsetX<arr.length&&
                offsetX>=0&&
                offsetY<arr[0].length&&
                offsetY>=0&&
                arr[offsetX][offsetY] === -1
            ) {
                arr[offsetX][offsetY] = arr[nodeX][nodeY]+1;
                res.push([offsetX, offsetY])
            }
        }
    }
    return arr;
}

console.log(getRes([[0,0,0],[0,1,0],[1,1,1]]))