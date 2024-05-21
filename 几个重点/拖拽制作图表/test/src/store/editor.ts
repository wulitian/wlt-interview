import { Module } from 'vuex';
import {
  EditorProps, defaultProps, GlobalDataProps, CommonComponentProps, chartsDefaultProps,
} from '@/defaultProps';
import store from '@/store/index';
import { cloneDeep } from 'lodash-es';
import { v4 as uuidv4 } from 'uuid';

export type MoveDirection = 'Up' | 'Down' | 'Left' | 'Right'
const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: [{
      container: {
        top: '10px',
        left: '10px',
        width: '200px',
        height: '200px',
        borderColor: '#000000',
        borderWidth: '1px',
        borderStyle: 'solid',
        position: 'absolute',
      },
      charts: {
        id: 'main',
        type: 'Pie',
        option: {
          title: {
            text: '饼图',
          },
          series: [
            {
              type: 'pie',
              data: [
                {
                  value: 335,
                  name: '直接访问',
                },
                {
                  value: 234,
                  name: '联盟广告',
                },
                {
                  value: 1548,
                  name: '搜索引擎',
                },
              ],
            },
          ],
        },
      },
    }],
    currentId: 'main',
    copiedComponent: null,
  },
  getters: {
    // eslint-disable-next-line max-len
    getCurrentElement: (state) => state.components.find((component) => component.charts.id === state.currentId),
    getComponentsLen: (state) => state.components.length,
  },
  mutations: {
    updateCurrentId: ((state, id: string) => {
      state.currentId = id;
    }),
    addComponent: ((state, component: defaultProps) => {
      state.components.push(component);
      state.currentId = component.charts.id;
    }),
    deleteComponent: ((state, id) => {
      const currentComponent = store.getters.getCurrentElement;
      if (currentComponent) {
        // eslint-disable-next-line max-len
        state.components = state.components.filter((component) => component.charts.id !== state.currentId);
        console.log(state.components);
      }
    }),
    updateComponent: ((state, {
      key, value, id, stateKey,
    }) => {
      // eslint-disable-next-line max-len
      const updatedComponent = state.components.find((component) => component.charts.id === (id || state.currentId));
      if (updatedComponent) {
        if (Array.isArray(key) && Array.isArray(value)) {
          key.forEach((keyName, index) => {
            updatedComponent[stateKey][keyName] = value[index];
          });
        } else if (typeof key === 'string') {
          updatedComponent[stateKey][key] = value;
        }
        console.log(state);
      }
    }),
    moveComponent(state, data: { direction: MoveDirection; amount: number; id: string }) {
      // eslint-disable-next-line max-len
      const currentComponent = state.components.find((component) => component.charts.id === state.currentId);
      if (currentComponent) {
        const oldTop = parseInt(currentComponent.container.top || '0', 10);
        const oldLeft = parseInt(currentComponent.container.left || '0', 10);
        const { direction, amount } = data;
        switch (direction) {
          case 'Up': {
            const newValue = `${oldTop - amount}px`;
            store.commit('updateComponent', {
              key: 'top', value: newValue, id: state.currentId, stateKey: 'container',
            });
            break;
          }
          case 'Down': {
            const newValue = `${oldTop + amount}px`;
            store.commit('updateComponent', {
              key: 'top', value: newValue, id: state.currentId, stateKey: 'container',
            });
            break;
          }
          case 'Left': {
            const newValue = `${oldLeft - amount}px`;
            store.commit('updateComponent', {
              key: 'left', value: newValue, id: state.currentId, stateKey: 'container',
            });
            break;
          }
          case 'Right': {
            const newValue = `${oldLeft + amount}px`;
            store.commit('updateComponent', {
              key: 'left', value: newValue, id: state.currentId, stateKey: 'container',
            });
            break;
          }

          default:
            break;
        }
      }
    },
    copyComponent(state, id) {
      const currentComponent = store.getters.getCurrentElement;
      if (currentComponent) {
        state.copiedComponent = currentComponent;
        console.log('已拷贝');
      }
    },
    pasteCopiedComponent: ((state) => {
      if (state.copiedComponent) {
        const clone = cloneDeep(state.copiedComponent);
        clone.charts.id = uuidv4();
        state.components.push(clone);
        console.log('已黏贴当前图层');
      }
    }),
  },
  actions: {},
};
export default editor;
