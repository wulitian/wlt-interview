import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import enLocale from '@/assets/locales/en.json'
import zhLocale from '@/assets/locales/zh.json'
Vue.use(VueI18n)
Vue.config.productionTip = false
//将刚刚locales创建的文件分别引入并输出成i18n需要的格式
const locales = {
  zh: {
    ...zhLocale,
  },
  en: {
    ...enLocale,
  },
}
const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'zh', // 从缓存中获取当前的语言类型 ,
  messages: locales
});

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
