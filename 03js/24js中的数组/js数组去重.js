//js数组去重
let arr = ['1', '1', 3, 1, 4, 6, 4, 2, 9, 11, 4, '1', '20', '20', 30, '3'];

// 1.将数组第一位放在新数组中，遍历原数组
function fn1(oldArr) {
    let newArr = [oldArr[0]];
    for (let i = 1; i < oldArr.length; i++) {
        let repeat = false;
        for (let j = 0; j < newArr.length; j++) {
            if (oldArr[i] === newArr[j]) {
                repeat = true;
                break;
            }
        }
        if (!repeat) {
            newArr.push(oldArr[i])
        }
    }
    console.log(newArr)
}

fn1(arr)

// 2.将数组先sort()排序之后前后比较(当数据类型存在不同时会导致不准)
function fn2(oldArr) {
    let arr = oldArr.sort(function (a, b) {
        return a - b
    })
    let newArr = [oldArr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] !== arr[i]) {
            newArr.push(arr[i])
        }
    }
    console.log(newArr)
}

fn2(arr)

// 3.利用对象属性的特性，如果没有改属性存入新数组
function fn3(oldArr) {
    let newArr = []
    let obj = {}
    for (let i = 0; i < oldArr.length; i++) {
        if (!obj[typeof oldArr[i] + oldArr[i]]) {
            obj[typeof oldArr[i] + oldArr[i]] = 1
            newArr.push(oldArr[i])
        }
    }
    console.log(newArr)
}

fn3(arr)

// 4.利用数组下标indexOf
function fn4(oldArr) {
    let newArr = []
    for (let i = 0; i < oldArr.length; i++) {
        if (newArr.indexOf(oldArr[i]) == -1) {
            newArr.push(oldArr[i])
        }
    }
    console.log(newArr)
}

fn4(arr)

// 5.利用数组lastIndexOf
function fn5(oldArr) {
    let newArr = []
    for (let i = 0; i < oldArr.length; i++) {
        if (newArr.indexOf(oldArr[i]) == -1) {
            newArr.push(oldArr[i])
        }
    }
    console.log(newArr)
}

fn5(arr)

// 6.利用includes
function fn6(oldArr) {
    let newArr = []
    for (let i = 0; i < oldArr.length; i++) {
        if (!newArr.includes(oldArr[i])) {
            newArr.push(oldArr[i])
        }
    }
    console.log(newArr)
}

fn6(arr)

// 7.利用forEach+includes
function fn7(oldArr) {
    let newArr = []
    oldArr.forEach((e, i) => {
        if (!newArr.includes(oldArr[i])) {
            newArr.push(oldArr[i])
        }
    })
    console.log(newArr)
}

fn7(arr)

// 8.利用filter+includes
function fn8(oldArr) {
    let newArr = []
    oldArr.filter((e) => {
        return newArr.includes(e) ? '' : newArr.push(e)
    })
    console.log(newArr)
}

fn8(arr)

// 9.利用reduce+includes
function fn9(oldArr) {
    let newArr = oldArr.reduce(function (prev, cur) {
        return prev.includes(cur) ? prev : [...prev, cur]
    }, [])
    console.log(newArr)
}

fn9(arr)

// 10.利用splice
function fn10(oldArr) {
    let copyOldArr = JSON.parse(JSON.stringify(oldArr));
    for (let i = 0; i < copyOldArr.length; i++) {
        for (let j = i + 1; j < copyOldArr.length; j++) {
            if (copyOldArr[i] === copyOldArr[j]) {
                copyOldArr.splice(j, 1);
                j--;
            }
        }
    }
    console.log(copyOldArr)
}

fn10(arr)

// 11.利用hasOwnProperty
function fn11(oldArr) {
    let newArr = []
    let obj = {}
    for (let i = 0; i < oldArr.length; i++) {
        if (!obj.hasOwnProperty(typeof oldArr[i] + oldArr[i])) {
            obj[typeof oldArr[i] + oldArr[i]] = 1
            newArr.push(oldArr[i])
        }
    }
    console.log(newArr)
}

fn11(arr)

// 12.利用map
function fn12(oldArr) {
    let map = new Map();
    let newArr = []
    for (let i = 0; i < oldArr.length; i++) {
        if (!map.has(typeof oldArr[i] + oldArr[i])) {
            map.set(typeof oldArr[i] + oldArr[i], 1)
            newArr.push(oldArr[i])
        }
    }
    console.log(newArr)
}

fn12(arr)

// 13.利用ES6中的set
function fn13(oldArr) {
    let newArr = Array.from(new Set(oldArr));
    console.log(newArr)
}

fn13(arr)

