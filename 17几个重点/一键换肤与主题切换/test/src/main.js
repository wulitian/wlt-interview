import Vue from 'vue'
import App from './App.vue'

// 加载 element 组件库
import ElementUI from 'element-ui'

// 加载 element 组件库的样式
import 'element-ui/lib/theme-chalk/index.css'

// 全局注册 element 组件库
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
