// js判断当天是星期几
function weekDay() {
    let date = new Date();
    let week = date.getDay()
    switch (week) {
        case 0:
            console.log('星期日');
            break;
        case 1:
            console.log('星期一');
            break;
        case 2:
            console.log('星期二');
            break;
        case 3:
            console.log('星期三');
            break;
        case 4:
            console.log('星期四');
            break;
        case 5:
            console.log('星期五');
            break;
        case 6:
            console.log('星期六');
            break;
        default:
            break;
    }
}
weekDay()
