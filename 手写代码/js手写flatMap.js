// [1,[2],3,[4,[5]]] -> [1,2,3,4,5]
function flatMap(arr) {
    const res = [];
    arr.forEach((e) => {
        if (Array.isArray(e)) {
            const fm = flatMap(e);
            res.push(...fm)
        } else {
            res.push(e)
        }
    })
    return res
}

let arr = [1, [2], 3, [4, [5]]];
const newArray = flatMap(arr);
console.log(newArray);
