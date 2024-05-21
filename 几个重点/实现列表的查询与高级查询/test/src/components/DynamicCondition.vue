<template>
  <div class="form">
    <div v-if="!conditionType">
      <span v-for="(item) in formReactive" :key="item.prop">
        <div style="display: inline-block;vertical-align: middle;margin-right: 20px;margin-top: 6px">
          <span style="vertical-align: middle;margin-right: 10px">{{ item.label }}:</span>
          <template v-if="item.formType==='a-switch'">
            <component
                :is="item.formType"
                v-model:checked="item.model"
                style="display: inline-block;vertical-align: middle;"
            >
            </component>
          </template>
          <component
              v-else
              :is="item.formType"
              v-model:value="item.model"
              style="display: inline-block;vertical-align: middle;width: auto;minWidth:60px"
          >
            <template v-if="item.optionVal">
                <component
                    style="width: auto;"
                    v-for="item2 in item.optionVal"
                    :key="item2.val"
                    :is="item.formType==='a-select'?item.formType+'-option':item.formType.replace('-group','')"
                    :value="item2.val"
                >
                  <span>{{ item2.label }}:</span>
                </component>
            </template>
          </component>
        </div>
      </span>
      <a-button type="primary" @click="getFormData" style="margin-top: 6px">获取表单数据</a-button>
    </div>
    <a-button type="primary" @click="conditionType=!conditionType" >切换</a-button>
    <a-button type="primary" @click="dialogFormVisible = true" v-if="conditionType">高级查询表单设置</a-button>
    <a-modal v-model:open="dialogFormVisible" title="表单设置" @ok="handleOk">
      <div style="margin-bottom: 20px;">
        <a-button-group>
          <a-button type="primary" @click="addCondition">新增条件</a-button>
          <a-button type="primary" @click="clearData">清空数据</a-button>
          <a-button type="primary" @click="deleteLast">删除最后一项</a-button>
        </a-button-group>
        <div class="box" v-for="(list,i) in conditionFormReactive" :key="i">
          <a-select style="width:200px" v-model:value="list.selectFormItem"
                    @change="handlerFormItemChange($event,list,i)">
            <a-select-option
                v-for="(option,index) in list.conditionForm"
                :key="index"
                :label="option.label"
                :value="option.label">
            </a-select-option>
          </a-select>
          <a-select style="width: 80px;margin-left: 4px;" v-model:value="list.selectConditionItem">
            <a-select-option
                v-for="(option,index) in list.conditionSignDic"
                :key="index"
                :label="option"
                :value="option">
            </a-select-option>
          </a-select>
          <div style="display: inline-block;vertical-align: bottom;margin-left: 4px;"
               v-if="list.selectedItem">
            <template v-if="list.selectedItem.formType==='a-switch'">
              <component
                  :is="list.selectedItem.formType"
                  v-model:checked="list.selectedItem.model"
                  style="display: inline-block;vertical-align: middle;"
              >
              </component>
            </template>
            <component
                v-else
                :is="list.selectedItem.formType"
                v-model:value="list.selectedItem.model"
                style="display: inline-block;vertical-align: bottom;width: auto;minWidth:60px"
            >
              <template v-if="list.selectedItem.optionVal">
                <component
                    style="width: auto;"
                    v-for="item2 in list.selectedItem.optionVal"
                    :key="item2.val"
                    :is="list.selectedItem.formType==='a-select'?list.selectedItem.formType+'-option':list.selectedItem.formType.replace('-group','')"
                    :value="item2.val"
                >
                  <span>{{ item2.label }}:</span>
                </component>
              </template>
            </component>
          </div>
        </div>
      </div>
      <template #footer>
        <a-button key="submit" type="primary" @click="handleOk">确认</a-button>
      </template>
    </a-modal>
  </div>
</template>

<script>
import {cloneDeep} from 'lodash'
import {defineComponent, reactive, ref, nextTick} from 'vue'

export default defineComponent({
  name: 'DynamicCondition',
  props: {
    dynamicCondition: {
      type: Array,
      required: true
    },
    type: {
      type: Boolean,
      required: true
    }
  },
  emits: ['getFormData', 'getDynamicData'],
  setup(props, context) {
    const dialogFormVisible = ref(false);
    const conditionType = ref(props.type);
    const form = cloneDeep(props.dynamicCondition)
    const conditionForm = cloneDeep(props.dynamicCondition)
    const conditionSignDic = ['=', '≠', 'like', '>', '≥', '<', '≤', '∈'];
    const formReactive = reactive(form)
    const conditionFormReactive = reactive([])
    const getFormData = () => {
      const obj = {}
      formReactive.forEach(item => {
        if (Array.isArray(item.model) ? item.model.length > 0 : true && item.model) {
          obj[item.prop] = item.model
        }
      })
      context.emit('getFormData', obj)
      console.log(obj)
    }
    const handleOk = () => {
      const obj = [];
      nextTick(() => {
        conditionFormReactive.forEach(e => {
          console.log(e.selectedItem)
          if (e.selectFormItem!=undefined && e.selectConditionItem!=undefined && e.selectedItem!=undefined && e.selectedItem.model!=undefined && (Array.isArray(e.selectedItem.model) ? e.selectedItem.model.length > 0 : true)) {
            obj.push([e.selectedItem.prop, e.selectConditionItem, e.selectedItem.model]);
          }
        })
        context.emit('getDynamicData', obj)
        dialogFormVisible.value = false;
      })
    }
    const handleCancel = () => {
      dialogFormVisible.value = true;
    }
    const addCondition = () => {
      const itemData = {
        conditionSignDic,
        conditionForm,
        selectFormItem: undefined,
        selectConditionItem: undefined,
        selectedItem: undefined
      }
      const obj = cloneDeep(itemData)
      conditionFormReactive.push(obj)
    }
    const deleteLast = () => {
      conditionFormReactive.pop()
    }
    const clearData = () => {
      conditionFormReactive.splice(0, conditionFormReactive.length)
    }
    const handlerFormItemChange = (event, list, i) => {
      conditionFormReactive[i].conditionForm.forEach((e) => {
        if (e.label === event) {
          list.selectedItem = cloneDeep(e)
        }
      })
    }
    return {
      formReactive,
      conditionFormReactive,
      dialogFormVisible,
      handlerFormItemChange,
      getFormData,
      handleOk,
      handleCancel,
      addCondition,
      deleteLast,
      clearData,
      conditionType
    }
  }
})
</script>

<style scoped>
.form {
  text-align: left;
}

.box {
  margin-top: 10px;
}
</style>
