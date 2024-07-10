// 在学校中，N个小朋友站成一队， 第i个小朋友的身高为height[i]，
// 第i个小朋友可以看到的第一个比自己身高更高的小朋友j，那么j是i的好朋友(要求j > i)。
// 请重新生成一个列表，对应位置的输出是每个小朋友的好朋友位置，如果没有看到好朋友，请在该位置用0代替。
// 小朋友人数范围是 [0, 40000]。
// 输入[123,124,125,121,119,122,126,123]
// 输出 [1,2,6,5,5,6,0,0]
function fn(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let state = false;
        for (let j = i; j < arr.length; j++) {
            if(arr[i]<arr[j]) {
                res.push(j)
                state = true;
                break;
            }
        }
        if(!state) {
            res.push(0)
        }
    }
    return res;
}
console.log(fn([123,124,125,121,119,122,126,123]))
