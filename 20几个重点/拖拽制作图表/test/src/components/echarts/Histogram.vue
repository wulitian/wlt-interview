<template>
  <div class="pie">
    <div class="prop-item">
      <span class="label">图标题</span>
      <div class="prop-component">
        <a-input v-model:value="obj.title.text" @input="onChange()"></a-input>
      </div>
    </div>
    <div class="prop-item">
      <span class="label">图x坐标</span>
      <div class="prop-component">
        <a-input
          v-for="(item,index) in obj.xAxis.data" :key="index"
          v-model:value="item.value"
          @input="onChange()"
          style="margin-bottom: 10px">
        </a-input>
      </div>
    </div>
    <div class="prop-item">
      <span class="label">图数据</span>
      <div class="prop-component">
        <div v-for="(item,index) in obj.series[0].data" :key="index">
          <a-input
            v-model:value="item.value"
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
