import { addCache, getCache, clearCache } from './cache'
import config from './config'
import {getUuid} from "./index";

// 封装基础上传方式sendBeacon与图片gif
const sendBeacon = (function(){
    if(!!window.navigator.sendBeacon){
        return window.navigator.sendBeacon.bind(window.navigator)
    }
    const reportImageBeacon = function(url, data){
        reportImage(url, data)
    }
    return reportImageBeacon
})()

// 常规上传
export function report(data, isImmediate = false) {
    if (!config.reportUrl) {
        console.error('请设置上传 url 地址')
    }

    const reportData = JSON.stringify({
        id: getUuid(),
        appID: config.appID,
        userID: config.userID,
        data,
    })

    if (isImmediate) {
        sendBeacon(config.reportUrl, reportData)
        return
    }

    if (window.requestIdleCallback) {
        window.requestIdleCallback(() => {
            sendBeacon(config.reportUrl, reportData)
        }, { timeout: 3000 })
    } else {
        setTimeout(() => {
            sendBeacon(config.reportUrl, reportData)
        })
    }
}
// 配合缓存延时上传
let timer = null
export function lazyReportCache(data, timeout = 3000) {
    addCache(data)
    clearTimeout(timer)
    timer = setTimeout(() => {
        const data = getCache()
        if (data.length) {
            report(data)
            clearCache()
        }
    }, timeout)
}

// xhr方式上传
export function reportWithXHR(data) {
    // 1. 创建 xhr 对象
    let xhr = new XMLHttpRequest()
    // 2. 调用 open 函数
    xhr.open('POST', config.reportUrl)
    // 3. 调用 send 函数
    xhr.send(JSON.stringify(data))
}

// 图片gif方式上传
export function reportImage(url, data) {
    const img = new Image();
    img.src = url + '?reportData=' + encodeURIComponent(JSON.stringify(data));
}

