import {getCurrentUrl, getUuid} from "../utils";

class Behavior {
    // 收集pv，uv(服务端进行统计的)
    pv() {
        const log = {
            type: 'behavior',
            subType: 'pv',
            startTime: performance.now(),
            pageURL: getCurrentUrl(),
            referrer: document.referrer,
            uuid: getUuid(),
        }
        console.log(log)
    }

    // 页面停留时长(时间每个页面传一下进入时的事件即可暂时不实现)
    stayTime() {
        window.onbeforeunload = e => {
            const log = {
                type: 'behavior',
                subType: 'page-access-duration',
                startTime: performance.now(),
                pageURL: getCurrentUrl(),
                uuid: getUuid(),
            }
            console.log(log)
        }
    }

    // 监听用户点击
    watchClick() {
        ['mousedown', 'touchstart'].forEach(eventType => {
            let timer
            window.addEventListener(eventType, event => {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    const target = event.target
                    const { top, left } = target.getBoundingClientRect()
                    const log = {
                        top,
                        left,
                        eventType,
                        pageHeight: document.documentElement.scrollHeight || document.body.scrollHeight,
                        scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
                        type: 'behavior',
                        subType: 'click',
                        target: target.tagName,
                        paths: event.path?.map(item => item.tagName).filter(Boolean),
                        startTime: event.timeStamp,
                        pageURL: getCurrentUrl(),
                        outerHTML: target.outerHTML,
                        innerHTML: target.innerHTML,
                        width: target.offsetWidth,
                        height: target.offsetHeight,
                        viewport: {
                            width: window.innerWidth,
                            height: window.innerHeight,
                        },
                        uuid: getUuid(),
                    }
                    console.log(log)
                }, 500)
            })
        })
    }

    init() {
        this.pv()
        this.stayTime()
        this.watchClick()
    }

}

export default Behavior
