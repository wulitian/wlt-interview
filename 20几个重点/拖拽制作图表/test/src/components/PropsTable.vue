<template>
  <div class="props-table">
    <div
        v-for="(value, key) in finalContainerProps"
        :key="key"
        class="prop-item"
    >
      <span class="label" v-if="value.text">{{value.text}}</span>
      <div class="prop-component">
        <component v-if="value"
                   :is="value.component"
                   :[value.valueProp]="value.value"
                   v-bind="value.extraProps"
                   v-on="value.events"
        >
          <template v-if="value.options">
            <component
                v-for="(option, key) in value.options"
                :key="key"
                :is="value.subComponent"
                :value="option.value"
            >
              <render-vnode :v-node="option.text"></render-vnode>
            </component>
          </template>
        </component>
      </div>
    </div>
    <div class="echarts-option">
      <component
                 :is="finalEchartsProps?.type"
                 :option="finalEchartsProps?.option"
                 @change="optionChange"
      >
      </component>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, PropType, VNode,
} from 'vue';
import ColorPicker from '@/components/ColorPicker.vue';
import shadowPicker from '@/components/ShadowPicker.vue';
import Pie from '@/components/echarts/Pie.vue';
import Line from '@/components/echarts/Line.vue';
import Dashboard from '@/components/echarts/Dashboard.vue';
import Histogram from '@/components/echarts/Histogram.vue';
import Radar from '@/components/echarts/Radar.vue';
import ScatterPlot from '@/components/echarts/ScatterPlot.vue';
import { reduce } from 'lodash';
import { useStore } from 'vuex';
import { containerDefaultProps, defaultProps, GlobalDataProps } from '../defaultProps';
import { mapPropsToForms } from '../propsMap';

interface FormProps {
  component: string;
  subComponent?: string;
  extraProps?: { [key: string]: any };
  text?: string;
  options?: { text: string | VNode; value: any }[];
  valueProp: string;
  eventName: string;
  value: string;
  events: { [key: string]: any };
}
export default defineComponent({
  name: 'propsTable',
  props: {
    props: {
      type: Object as PropType < defaultProps >,
    },
  },
  components: {
    ColorPicker,
    shadowPicker,
    Pie,
    Line,
    Dashboard,
    Histogram,
    Radar,
    ScatterPlot,
  },
  emits: ['change'],
  setup(props, context) {
    const store = useStore<GlobalDataProps>();
    const currentId = computed(() => store.state.editor.currentId);
    const finalContainerProps = computed(() => reduce(
      props?.props?.container,
      (result, value, key) => {
        const newKey = key as keyof containerDefaultProps;
        const item = mapPropsToForms[newKey];
        if (item) {
          const {
            valueProp = 'value', eventName = 'change', initalTransform, afterTransform,
          } = item;
          const newItem: FormProps = {
            ...item,
            value: initalTransform ? initalTransform(value) : value,
            valueProp,
            eventName,
            events: {
              [eventName]: (e: any) => {
                context.emit('change', {
                  key,
                  value: afterTransform ? afterTransform(e) : e,
                  id: currentId.value,
                  stateKey: 'container',
                });
              },
            },
          };
          result[newKey] = newItem;
        }
        return result;
      },
      {} as { [key: string]: FormProps },
    ));
    const finalEchartsProps = computed(() => props?.props?.charts);
    console.log(finalEchartsProps);
    const optionChange = (e:object) => {
      context.emit('change', {
        key: 'option',
        value: e,
        id: currentId.value,
        stateKey: 'charts',
      });
    };
    return {
      finalContainerProps,
      finalEchartsProps,
      optionChange,
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
.prop-item.no-text {
  display: inline-block;
  margin: 0 10px 0 0;
}
#item-fontWeight {
  margin-left: 28%;
}
.component-a-select .ant-select {
  width: 150px;
}
.prop-component.component-shadow-picker, .prop-component.component-image-processer, .prop-component.component-background-processer {
  width: 100%;
}
</style>
