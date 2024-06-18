import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import editor from '@/views/editor.vue';
import canvasContainer from '@/components/CanvasContainer.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'editor',
    component: editor,
  },
  {
    path: '/canvasContainer',
    name: 'canvasContainer',
    component: canvasContainer,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
