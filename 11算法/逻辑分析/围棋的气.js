// ºÚÆå×Ó[[0,5],[8,9],[9,0]]
// °×Æå×Ó[[5,0],[9,9],[9,8]]

function includes(black, white, res, x, y) {
    let arr = [...black, ...white, ...res]
    for (let i = 0; i < arr.length; i++) {
        let [itemX, itemY] = arr[i];
        if (itemX === x && itemY === y) {
            return true
        }
    }
    return false
}

function getRes(black, white) {
    let res = [];
    let res2 = [];
    for (let i = 0; i < black.length; i++) {
        let [x, y] = black[i];
        if (x - 1 > 0 && !includes(black, white, res, x - 1, y)) {
            res.push([x - 1, y]);
        }
        if (x + 1 < 18 && !includes(black, white, res, x + 1, y)) {
            res.push([x + 1, y]);
        }
        if (y - 1 > 0 && !includes(black, white, res, x, y - 1)) {
            res.push([x, y - 1]);
        }
        if (y + 1 < 18 && !includes(black, white, res, x, y + 1)) {
            res.push([x, y + 1]);
        }
    }
    for (let i = 0; i < white.length; i++) {
        let [x, y] = white[i];
        if (x - 1 > 0 && !includes(black, white, res2, x - 1, y)) {
            res2.push([x - 1, y]);
        }
        if (x + 1 < 18 && !includes(black, white, res2, x + 1, y)) {
            res2.push([x + 1, y]);
        }
        if (y - 1 > 0 && !includes(black, white, res2, x, y - 1)) {
            res2.push([x, y - 1]);
        }
        if (y + 1 < 18 && !includes(black, white, res2, x, y + 1)) {
            res2.push([x, y + 1]);
        }
    }
    return [res.length, res2.length];
}

console.log(getRes([[0, 5], [8, 9], [9, 10]], [[5, 0], [9, 9], [9, 8]]))
