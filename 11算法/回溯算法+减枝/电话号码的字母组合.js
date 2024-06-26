// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
// const dic = {
//     2: 'abc',
//     3: 'def',
//     4: 'ghi',
//     5: 'jkl',
//     6: 'mno',
//     7: 'pqrs',
//     8: 'tuv',
//     9: 'wxyz',
// }
// 输入：digits = "23"
// 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
// 示例 2：
// 输入：digits = ""
// 输出：[]
// 示例 3：
// 输入：digits = "2"
// 输出：["a","b","c"]

function getRes(digits) {
    if(!digits.length) {
        return;
    }
    const dic = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    let res = [];
    const getArr = (num, curr) => {
        if (curr.length === digits.length) {
            res.push(curr);
            return;
        }
        let curDic = dic[digits[num]]
        for (let curDicElement of curDic) {
            getArr(num + 1, curr + curDicElement);
        }
    }
    getArr(0, '');
    return res;
}

console.log(getRes('23'))
