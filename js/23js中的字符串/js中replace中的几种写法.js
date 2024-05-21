let str = 'border-bottom-color';
let strRg = str.replace(/\-([a-z])/g, '$1')
console.log(strRg);

let strRg2 = str.replace(/\-(?<a>[a-z])/g, `'$<a>'`)
console.log(strRg2);

let strRg3 = str.replace('-', '')
console.log(strRg3);

let strRg4 = str.replace(/\-([a-z])/g, (val, val2) => {
    console.log(val)
    console.log(val2)
    return val2.toUpperCase()
})
console.log(strRg4);
let strRg5 = str.replace(/\-([a-z])/g, function () {
    return RegExp.$1.toUpperCase();
})
console.log(strRg5);
