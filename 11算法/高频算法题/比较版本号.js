// 给你两个 版本号字符串 version1 和 version2 ，请你比较它们。版本号由被点 '.' 分开的修订号组成。修订号的值 是它 转换为整数 并忽略前导零。
// 比较版本号时，请按 从左到右的顺序 依次比较它们的修订号。如果其中一个版本字符串的修订号较少，则将缺失的修订号视为 0。
// 返回规则如下：
// 如果 version1 < version2 返回 -1，
// 如果 version1 > version2 返回 1，
// 除此之外返回 0。
// 示例 1：
// 输入：version1 = "1.2", version2 = "1.10"
// 输出：-1
// 解释：
// version1 的第二个修订号为 "2"，version2 的第二个修订号为 "10"：2 < 10，所以 version1 < version2。
// 示例 2：
// 输入：version1 = "1.01", version2 = "1.001"
// 输出：0
// 解释：
// 忽略前导零，"01" 和 "001" 都代表相同的整数 "1"。
// 示例 3：
// 输入：version1 = "1.0", version2 = "1.0.0.0"
// 输出：0
// 解释：
// version1 有更少的修订号，每个缺失的修订号按 "0" 处理。
function fn(version1, version2) {
    let v1 = version1.split('.').map(Number);
    let v2 = version2.split('.').map(Number);
    let len = Math.max(v1.length, v2.length);
    for (let i = 0; i < len; i++) {
        const num1 = v1[i] || 0;
        const num2 = v2[i] || 0;
        if (num1 > num2) {
            return 1
        }
        if (num1 < num2) {
            return -1
        }
    }
    return 0;
}

console.log(fn('1.2','1.10'))
console.log(fn('1.01', '1.001'))
console.log(fn('1.0','1.0.0.0'))
