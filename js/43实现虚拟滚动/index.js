class VirtualList {
    constructor(containerSelection, listSelection) {
        this.oContainer = document.querySelector(containerSelection);
        this.oList = document.querySelector(listSelection);
        this.startIndex = 0;
        this.endIndex = 0;
        this.renderList = [];
        this.scrollStyle = {}
        this.state = {
            dataSource: [],
            itemHeight: 100,
            viewHeight: 0,
            maxCount: 0,
        };
    }

    init() {
        this.state.viewHeight = this.oContainer.offsetHeight;
        this.state.maxCount = Math.ceil(this.state.viewHeight / this.state.itemHeight) + 1;
        this.addData();
        this.render();
        this.bindEvent();
    }

    computedEndIndex() {
        const end = this.startIndex + this.state.maxCount;
        this.endIndex = this.state.dataSource[end] ? end : this.state.dataSource.length;
    }

    computedRenderList() {
        const otherCount = 10;
        let resEndIndex = this.endIndex + otherCount < this.state.dataSource.length ? this.endIndex + 10 : this.endIndex;
        this.renderList = this.state.dataSource.slice(this.startIndex, resEndIndex);
    }

    computedScrollStyle() {
        this.scrollStyle = {
            height: `${
                this.state.dataSource.length * this.state.itemHeight - this.state.itemHeight * this.startIndex
            }px`,
            transform: `translate3d(0, ${this.startIndex * this.state.itemHeight}px, 0)`
        }
    }

    handleScroll() {
        const {scrollTop} = this.oContainer;
        this.startIndex = Math.floor(scrollTop / this.state.itemHeight);
        this.render();
    }

    bindEvent() {
        this.oContainer.addEventListener('scroll', this.handleScroll.bind(this))
    }

    addData() {
        for (let i = 0; i < 10000; i++) {
            const len = this.state.dataSource.length;
            this.state.dataSource.push(len + 1)
        }
    }

    render() {
        this.computedEndIndex();
        this.computedRenderList();
        this.computedScrollStyle();
        const template = this.renderList.map(i => `<div class="virtual-list-item">${i}</div>`).join('')
        this.oList.innerHTML = template;
        this.oList.style.height = this.scrollStyle.height;
        this.oList.style.transform = this.scrollStyle.transform;
    }
}

let virtualList = new VirtualList('.virtual-container', '.virtual-list');
virtualList.init();
