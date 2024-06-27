function mergeSort(arr) {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let middleIndex = Math.floor(len / 2);
    let left = arr.slice(0, middleIndex);
    let right = arr.slice(middleIndex);
    console.log('left', left)
    console.log('right', right)
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    console.log('result', result)
    return result;
}
function quickSort(arr) {
    let len = arr.length;
    if(len<2) {
        return arr;
    }
    let pos = Math.floor(len/2);
    let mid = arr.splice(pos,1);
    let left = [];
    let right = [];
    console.log(mid)
    console.log(left)
    for (let i = 0; i < arr.length; i++) {
        console.log(i)
        if(arr[i]<mid) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),...mid,...quickSort(right)];
}
console.log(quickSort([1, 4, 3, 2, 6, 9, 8, 7, 5]))