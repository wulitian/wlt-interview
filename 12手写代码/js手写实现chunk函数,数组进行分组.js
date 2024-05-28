// chunk([1,2,3,4,5,6,7],3) => [[1,2,3],[4,5,6],[7]]

function chunk(arr, num) {
    let res = [];
    for (let i = 0; i < arr.length; i += num) {
        res.push(arr.slice(i, i + num))
    }
    return res
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3));
