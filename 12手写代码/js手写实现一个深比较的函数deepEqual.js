// obj:{a:{value:1,age:2},b:1} obj2:{a:{value:1,age:2}:b:1}
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true
    } else if (typeof obj1 === 'object' && obj1 != null && typeof obj2 === 'object' && obj2 != null) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            if (!deepEqual(keys1[key], keys2[key])) {
                return false;
            }
        }
        return true
    } else {
        return false
    }
}

const obj1 = {a: {value: 1, age: 2}, b: 1};
const obj2 = {a: {value: 1, age: 2}, b: 1};
// true
console.log(deepEqual(obj1, obj2));
