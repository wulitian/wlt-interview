<template>
  <div class="pie">
    <div class="prop-item">
      <span class="label">图标题</span>
      <div class="prop-component">
        <a-input v-model:value="obj.title.text" @input="onChange()"></a-input>
      </div>
    </div>
    <div class="prop-item">
      <span class="label">图例</span>
      <div class="prop-component">
        <a-input
          v-for="(item,index) in obj.legend.data" :key="index"
          v-model:value="item.name"
          @input="onChange()"
          style="margin-bottom: 10px">
        </a-input>
      </div>
    </div>
    <div class="prop-item">
      <span class="label">雷达设置</span>
      <div class="prop-component">
        <div v-for="(item,index) in obj.radar.indicator" :key="index">
          <a-input
            v-model:value="item.name"
            @input="onChange()"
            style="margin-bottom: 10px">
          </a-input>
          <a-input
            v-model:value="item.max"
            @input="onChange()"
            style="margin-bottom: 10px">
          </a-input>
        </div>
      </div>
    </div>
    <div class="prop-item">
      <span class="label">图数据</span>
      <div class="prop-component">
        <div v-for="(item,index) in obj.series[0].data" :key="index">
          <a-input
            v-model:value="item.name"
            @input="onChange()"
            style="margin-bottom: 10px">
          </a-input>
          <a-input
            v-for="(item2,index2) in item.value.length"
            :key="item2"
            v-model:value="item.value[index2]"
            @input="onChange()"
            style="margin-bottom: 10px">
          </a-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, PropType, reactive,
} from 'vue';
import { cloneDeep } from 'lodash';

export default defineComponent({
  props: {
    option: {
      type: Object as PropType < any >,
      required: true,
    },
  },
  components: {
  },
  emits: ['change'],
  setup(props, context) {
    const cloneOption = cloneDeep(props.option);
    const obj = reactive(cloneOption);
    const onChange = () => {
      context.emit('change', obj);
    };
    return {
      obj,
      onChange,
    };
  },
});
</script>

<style scoped lang="scss">
.prop-item {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}
.label {
  width: 28%;
}
.prop-component {
  width: 70%;
}
</style>
