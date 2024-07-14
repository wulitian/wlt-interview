// 输入：
// [[0,0,0],
//  [0,1,0],
//  [1,1,1]]
//
// 输出：
// 4
// 输入：
// [[0,0,1],
//  [0,1,0],
//  [1,1,1]]
//
// 输出：
// 4
function getRes(arr) {
    let res = [];
    let num = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if(arr[i][j] === 1) {
                res.push([i,j]);
                let count = 0;
                while(res.length>0) {
                    let [nodeX,nodeY] = res.shift();
                    let offsets = [[0,-1],[0,1],[-1,0],[1,0]];
                    for (let z = 0; z < offsets.length; z++) {
                        let [x,y] = offsets[z];
                        let offsetX = x+nodeX;
                        let offsetY = y+nodeY;
                        if(offsetX<arr.length&&
                            offsetX>=0&&
                            offsetY<arr[0].length&&
                            offsetY>=0&&
                            arr[offsetX][offsetY] === 1
                        ) {
                            res.push([offsetX, offsetY])
                            arr[offsetX][offsetY] = 0;
                            count++;
                        }
                    }
                }
                num.push(count?count:1);
                count = 0;
            }
        }
    }
    return num;
}

console.log(getRes([
    [1,1,1],
    [0,0,0],
    [0,1,1]]
))