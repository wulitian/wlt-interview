// js双十一倒计时
// 结束时间-系统开始时间
// 定时器本身不准timeout是在限定时间内，interval是在限定时间后。
// chrome为了优化网页性能，使得用户在离开网页后，暂停网页的计时器、运动等耗性能的部分，故此问题只能使用异步解决，使得计时线程在后台一直运行
// 前端的计时逻辑永远不会准，即便你初始化时间采用服务器时间。
// 因为网络传输误差你不知道，同时setTimeout和setInterval并不会非常精确，所以不要依赖前端计时器来处理重要逻辑，需要结合后台来保障。

function fn() {
    let date1 = new Date();//可以借助服务器辅助时间
    let date2 = new Date(2022, 11, 11, 0, 0, 0);
    let minutesVal = 60 * 1000;
    let dateValue = date2.getTime() - date1.getTime();
    let days = Math.floor(dateValue / (24 * 60 * minutesVal));
    let hoursValue = dateValue % (24 * 60 * minutesVal);
    let hours = Math.floor(hoursValue / (60 * minutesVal));
    let minutesValue = hoursValue % (60 * minutesVal);
    let minutes = Math.floor(minutesValue / minutesVal);
    let secondValue = minutesValue % (minutesVal);
    let second = Math.floor(secondValue / 1000);
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        second: second
    }
}

let diffTime = fn();
let str = `相差 ${diffTime.days}天 ${diffTime.hours}小时 ${diffTime.minutes}分 ${diffTime.second}秒`;
console.log(str);
