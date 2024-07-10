// 小朋友出操，按学号从小到大排成一列；
// 小明来迟了，请你给小明出个主意，让他尽快找到他应该排的位置。
// 算法复杂度不高于nLog(n)；学号为整数类型，队列规模 ≤ 10000；
// 示例 110：
// 输入：nums = [93,95,97,100,102,123,155]
// 输出：6

function fn(arr, num) {
    let low = 0;
    let height = arr.length - 1;
    let mid = Math.floor((height+low)/2)+low;
    while (low<height){
        if(arr[mid]<num) {
            low = mid;
            mid = Math.floor((height+low)/2)+low
        }
        if (arr[mid]>num) {
            height = mid;
            mid = Math.floor((height+low)/2)+low
        } else {
           return mid -1
        }
    }
    return mid -1;
}

console.log(fn([93, 95, 97, 100, 102, 123, 155], 110))
