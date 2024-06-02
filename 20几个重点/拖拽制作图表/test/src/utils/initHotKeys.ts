import useHotKey from '@/hooks/HotKeys';
import { useStore } from 'vuex';
import { defaultProps } from '@/defaultProps';
import { computed } from 'vue';
import { HotkeysEvent, KeyHandler } from 'hotkeys-js';

const wrap = (callback: KeyHandler) => {
  const wrapperFn = (e: KeyboardEvent, event: HotkeysEvent) => {
    e.preventDefault();
    callback(e, event);
  };
  return wrapperFn;
};
export default function initHotKeys() {
  const store = useStore<defaultProps>();
  const currentId = computed(() => store.state.editor.currentId);
  useHotKey('ctrl+c, command+c', () => {
    store.commit('copyComponent', currentId);
  });
  useHotKey('ctrl+v, command+v', () => {
    store.commit('pasteCopiedComponent');
  });
  useHotKey('backspace, delete', () => {
    store.commit('deleteComponent', currentId);
  });
  useHotKey('up', wrap(() => {
    store.commit('moveComponent', { direction: 'Up', amount: 1, id: currentId });
  }));
  useHotKey('down', wrap(() => {
    store.commit('moveComponent', { direction: 'Down', amount: 1, id: currentId });
  }));
  useHotKey('left', wrap(() => {
    store.commit('moveComponent', { direction: 'Left', amount: 1, id: currentId });
  }));
  useHotKey('right', wrap(() => {
    store.commit('moveComponent', { direction: 'Right', amount: 1, id: currentId });
  }));
  useHotKey('shift+up', () => {
    store.commit('moveComponent', { direction: 'Up', amount: 10, id: currentId });
  });
  useHotKey('shift+down', () => {
    store.commit('moveComponent', { direction: 'Down', amount: 10, id: currentId });
  });
  useHotKey('shift+left', () => {
    store.commit('moveComponent', { direction: 'Left', amount: 10, id: currentId });
  });
  useHotKey('shift+right', () => {
    store.commit('moveComponent', { direction: 'Right', amount: 10, id: currentId });
  });
}
