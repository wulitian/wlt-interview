class VirtualList {
    constructor(container, list) {
        this.oContainer = document.querySelector(container)
        this.oList = document.querySelector(list)
        this.startIndex = 0
        this.endIndex = 0
        this.renderList = []
        this.scrollStyle = {}
        this.state = {
            dataSource: [],
            itemHeight: 100,
            viewHeight: 0,
            maxCount: 0
        }
    }

    computedViewHeight() {
        this.state.viewHeight = this.oContainer.offsetHeight;
    }

    computedMaxCount() {
        this.state.maxCount = Math.ceil(this.state.viewHeight / this.state.itemHeight) + 1;
    }

    computedStartIndex() {
        const {scrollTop} = this.oContainer;
        this.startIndex = Math.floor(scrollTop / this.state.itemHeight);
    }

    computedEndIndex() {
        this.endIndex = this.startIndex + this.state.maxCount;
    }

    computedRenderList() {
        this.renderList = this.state.dataSource.slice(this.startIndex, this.endIndex)
    }

    computedScrollStyle() {
        this.scrollStyle = {
            height: `${this.state.dataSource.length * this.state.itemHeight - this.startIndex * this.state.itemHeight}px`,
            transform: `translateY(${this.startIndex * this.state.itemHeight}px)`
        }
    }

    addEvent() {
        this.oContainer.addEventListener('scroll', this.handleScroll.bind(this))
    }

    handleScroll() {
        this.computedStartIndex();
        this.render();
    }
    addData() {
        for (let i = 0; i < 1000; i++) {
            this.state.dataSource.push(i+1);
        }
    }
    render() {
        this.computedEndIndex();
        this.computedRenderList();
        this.computedScrollStyle();
        const template = this.renderList.map(item=>{
            return `<div class="virtual-list-item">${item}</div>`
        }).join('');
        this.oList.innerHTML = template;
        this.oList.style.height = this.scrollStyle.height;
        this.oList.style.transform = this.scrollStyle.transform;
    }

    init() {
        this.computedViewHeight();
        this.computedMaxCount();
        this.addData();
        this.render();
        this.addEvent();
    }


}

let virtualList = new VirtualList('.virtual-container', '.virtual-list');
virtualList.init();
