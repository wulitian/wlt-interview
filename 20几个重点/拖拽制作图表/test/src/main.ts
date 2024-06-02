import { createApp } from 'vue';
import VueDraggableResizable from 'vue-draggable-resizable';
import 'vue-draggable-resizable/style.css';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/iconfont/iconfont.js';
import '@/assets/iconfont/iconfont.css';
import '@/assets/theme/index.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

createApp(App)
  .component('vue-draggable-resizable', VueDraggableResizable)
  .use(Antd)
  .use(store)
  .use(router)
  .mount('#app');
