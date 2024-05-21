<template>
  <dynamic-condition
      @getFormData="getFormData"
      @getDynamicData="getDynamicData"
      :dynamicCondition="dynamicCondition"
      :type="type"
  />
</template>

<script>
import DynamicCondition from '@/components/DynamicCondition.vue'
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    DynamicCondition
  },
  setup() {
    // formItem,conditionItem
    const type = true;
    const dynamicCondition = [
      {
        label: '姓名',
        prop: 'name',
        formType: 'a-input',
        model: undefined,
        isShow: true
      },
      {
        label: '性别',
        prop: 'sex',
        formType: 'a-radio-group',
        optionVal: [
          {
            label: '男',
            val: 0
          },
          {
            label: '女',
            val: 1
          }
        ],
        model: 0,
        isShow: true
      },
      {
        label: '爱好',
        prop: 'hobby',
        formType: 'a-checkbox-group',
        optionVal: [
          {
            label: '篮球',
            val: 0
          },
          {
            label: '足球',
            val: 1
          }
        ],
        model: [],
        isShow: true
      },
      {
        label: '12123',
        prop: 'name34',
        formType: 'a-input',
        model: undefined,
        isShow: false
      },
      {
        label: '年龄',
        prop: 'age',
        formType: 'a-input-number',
        model: undefined,
        isShow: true
      },
      {
        label: '省份',
        prop: 'province',
        formType: 'a-select',
        optionVal: [
          {
            label: '吉林省',
            val: 0
          },
          {
            label: '甘肃省',
            val: 1
          }
        ],
        model: undefined,
        isShow: true
      },
      {
        label: '启用状态',
        prop: 'state',
        formType: 'a-switch',
        model: false,
        isShow: true
      },
      {
        label: '出生时分秒',
        prop: 'timePoint',
        formType: 'a-time-picker',
        model: null,
        isShow: true
      },
      {
        label: '出生年月日',
        prop: 'birthday',
        formType: 'a-date-picker',
        model: null,
        isShow: true
      }
    ]
    const getFormData = (data) => {
      console.log(data)
    }
    const getDynamicData = (data) => {
      console.log(data)
    }
    return {
      type,
      dynamicCondition,
      getFormData,
      getDynamicData
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
