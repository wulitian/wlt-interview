// Wonderland是小王居住地一家很受欢迎的游乐园。Wonderland目前有4种售票方式，分别为一日票（1天）、三日票（3天）、周票（7天）和月票（30天）。
// 每种售票方式的价格由一个数组给出，每种票据在票面时限内可以无限制地进行游玩。例如：
// 小王计划在接下来一年多次游玩该游乐园。小王计划地游玩日期将由一个数组给出。
// 小王在第10日买了一张三日票，小王可以在第10日、第11日和第12日进行无限制地游玩。
// 小王计划在接下来一年多次游玩该游乐园。小王计划地游玩日期将由一个数组给出。
// 现在，请您根据给出地售票价格数组和小王计划游玩日期数组，返回游玩计划所需要地最低消费。
// 输入：5 14 30 100
// 输入: 1 3 5 20 21 200 202 230
// 输出：40
// 解释：根据售票价格数组和游玩日期数组给出的信息，发现每次去玩的时候买一张一日票是最省钱的，所以小王会卖8张一日票，每张5元，最低花费是40元。
function getRes(cost, day) {
    const [dayCost1, dayCost3, dayCost7, dayCost30] = cost;
    let max = day[day.length - 1];
    let arr = new Array(max+1).fill(0);
    let start = 1;
    while(start<=max) {
        if(day.indexOf(start)!==-1) {
            let day1 = (start>1?arr[start-1]:0)+dayCost1;
            let day3 = (start>3?arr[start-3]:0)+dayCost3;
            let day7 = (start>7?arr[start-7]:0)+dayCost7;
            let day30 = (start>30?arr[start-30]:0)+dayCost30;
            arr[start] = Math.min(day1,day3,day7,day30);
        } else {
            arr[start] = arr[start-1];
        }
        start++;
    }
    console.log(arr);
    return arr[max];
}

console.log(getRes([5, 14, 30, 100], [1, 3, 5, 20, 21, 200, 202, 230]))
