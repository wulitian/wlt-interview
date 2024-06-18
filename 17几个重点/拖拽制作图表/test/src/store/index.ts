import { createStore } from 'vuex';
import editor from '@/store/editor';

const store = createStore({
  modules: {
    editor,
  },
});
export default store;
