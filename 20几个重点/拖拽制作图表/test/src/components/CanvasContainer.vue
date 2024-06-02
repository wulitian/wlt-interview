<template>
  <div class="canvas-container">
    <template v-for="(item) in canvasArr" :key="item.charts.id">
      <vue-draggable-resizable
        :ref="item.charts.id"
        :x="item.container.left.replace('px','')"
        :y="item.container.top.replace('px','')"
        :w="item.container.width.replace('px','')"
        :h="item.container.height.replace('px','')"
        :min-width="200"
        :min-height="200"
        :parent="true"
        :snap="true"
        :snapTolerance="1"
        :disable-user-select="false"
        @resizing="onResizing"
        @resize-stop="onResizestop"
        @dragging="onDragging"
        @drag-stop="onDragstop"
        @activated="onActivated(item.charts.id)"
      >
        <div
          :id="item.charts.id"
          :style="{width: item.container.width,height: item.container.height}">
        </div>
      </vue-draggable-resizable>
    </template>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted, PropType, computed, watch, reactive, nextTick,
} from 'vue';
import * as echarts from 'echarts';
import { defaultProps, EditorProps, GlobalDataProps } from '@/defaultProps';
import { useStore } from 'vuex';
import { EChartsType } from 'echarts/core';
import initHotKeys from '@/utils/initHotKeys';

export default defineComponent({
  props: {
    canvasArr: {
      type: Array as PropType<defaultProps[]>,
      required: true,
    },
  },
  setup(props) {
    initHotKeys();
    const store = useStore<GlobalDataProps>();
    const currentId = computed(() => store.state.editor.currentId);
    const currentComponent = computed(() => store.getters.getCurrentElement);
    const componentLen = computed(() => store.getters.getComponentsLen);
    const echartsEditor = computed(() => store.state.editor);
    const obj:{
      [key: string]: any
    } = {};
    const renderEcharts = (id:string, option:any) => {
      const myChart:any = echarts.init(document.getElementById(id));
      myChart.setOption(option);
      obj[id] = myChart;
      window.onresize = () => {
        myChart.resize();
      };
    };
    watch(echartsEditor, async (newValue, oldValue) => {
      await nextTick();
      if (currentId.value && componentLen.value !== 0 && currentComponent.value) {
        console.log(111);
        console.log(currentComponent);
        renderEcharts(currentId.value, currentComponent.value.charts.option);
      }
    }, { deep: true });
    watch(componentLen, async (newValue, oldValue) => {
      await nextTick();
      if (currentId.value && componentLen.value !== 0 && currentComponent.value) {
        renderEcharts(currentId.value, currentComponent.value.charts.option);
      }
      if (newValue < oldValue) {
        const box = document.getElementById(currentId.value);
        if (box && box.parentNode) {
          box.parentNode.removeChild(box);
        }
      }
      if (newValue === 0) {
        store.commit('updateCurrentId', '');
      }
    });

    const onResizing = (left:string, top:string, width:string, height:string) => {
    };
    const onResizestop = (left:string, top:string, width:string, height:string) => {
      store.commit('updateComponent', {
        key: 'width', value: `${width}px`, currentId, stateKey: 'container',
      });
      store.commit('updateComponent', {
        key: 'height', value: `${height}px`, currentId, stateKey: 'container',
      });
      store.commit('updateComponent', {
        key: 'left', value: `${left}px`, currentId, stateKey: 'container',
      });
      store.commit('updateComponent', {
        key: 'top', value: `${top}px`, currentId, stateKey: 'container',
      });
      nextTick(() => {
        obj[currentId.value].resize();
      });
    };

    const onDragging = (left:string, top:string) => {
    };

    const onDragstop = (left:string, top:string) => {
      store.commit('updateComponent', {
        key: 'left', value: `${left}px`, currentId, stateKey: 'container',
      });
      store.commit('updateComponent', {
        key: 'top', value: `${top}px`, currentId, stateKey: 'container',
      });
    };

    const onActivated = (id: string) => {
      store.commit('updateCurrentId', id);
    };
    onMounted(() => {
      props.canvasArr.forEach((item) => {
        console.log(item.charts.id);
        renderEcharts(item.charts.id, item.charts.option);
      });
    });
    return {
      onResizing,
      onResizestop,
      onDragging,
      onDragstop,
      onActivated,
      renderEcharts,
    };
  },
});

</script>

<style scoped lang="scss">
.canvas-container {
  background: #fff;
  position: fixed;
  top: 70px;
  min-width: 600px;
  min-height: 400px;
  bottom: 10px;
  right: 270px;
  left: 10px;
}
</style>
