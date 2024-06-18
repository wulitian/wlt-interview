let time = 0
let a = setInterval(function () {
    if (time > 10) {
        time = 0
        return false
    }
    time++;
    console.log(time)
}, 1000)

