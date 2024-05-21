<template>
  <div class="container">
    <div class="header">
      <div class="icon-group">
        <span class="iconfont">&#xe7d8;</span>
        <div class="icon-group-child">
          <a-row>
            <a-col class="icon-one" :span="8" @click="addModule('pie')">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-bingtu"></use>
                </svg>
                <div class="icon-title">饼图</div>
            </a-col>
            <a-col class="icon-one" :span="8" @click="addModule('line')">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zhexian"></use>
              </svg>
              <div class="icon-title">折线图</div>
            </a-col>
            <a-col class="icon-one" :span="8" @click="addModule('histogram')">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-duijizhutu"></use>
              </svg>
              <div class="icon-title">柱状图</div>
            </a-col>
            <a-col class="icon-one" :span="8" @click="addModule('scatterPlot')">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-qipaotu"></use>
              </svg>
              <div class="icon-title">散点图</div>
            </a-col>
            <a-col class="icon-one" :span="8" @click="addModule('dashboard')">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yibiaopan1"></use>
              </svg>
              <div class="icon-title">仪表盘</div>
            </a-col>
            <a-col class="icon-one" :span="8" @click="addModule('radar')">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-leidatu1"></use>
              </svg>
              <div class="icon-title">雷达图</div>
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="icon-group">
        <span class="iconfont">&#xe651;</span>
        <div class="icon-group-child">
          <a-row>
            <a-col class="icon-one" :span="8" >
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-ic_wenbenkuang"></use>
                </svg>
                <div class="icon-title">文本框</div>
              </div>
            </a-col>
            <a-col class="icon-one" :span="8">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-paomadengicon"></use>
              </svg>
              <div class="icon-title">跑马灯</div>
            </a-col>
            <a-col class="icon-one" :span="8">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-zu"></use>
              </svg>
              <div class="icon-title">超链接</div>
            </a-col>
            <a-col class="icon-one" :span="8">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shijian2"></use>
              </svg>
              <div class="icon-title">实时时间</div>
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="icon-group">
        <span class="iconfont">&#xe63e;</span>
        <div class="icon-group-child">
          <a-row>
            <a-col class="icon-one" :span="8" >
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-tupian2"></use>
                </svg>
                <div class="icon-title">图片</div>
              </div>
            </a-col>
            <a-col class="icon-one" :span="8">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tupian-kuang"></use>
              </svg>
              <div class="icon-title">图片框</div>
            </a-col>
            <a-col class="icon-one" :span="8">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-lunbotu"></use>
              </svg>
              <div class="icon-title">轮播图</div>
            </a-col>
            <a-col class="icon-one" :span="8">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-iframe"></use>
              </svg>
              <div class="icon-title">外嵌网址</div>
            </a-col>
            <a-col class="icon-one" :span="8">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shipin1"></use>
              </svg>
              <div class="icon-title">视频</div>
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="icon-group">
        <span class="iconfont">&#xe640;</span>
        <div class="icon-group-child">
          <a-row>
            <a-col class="icon-one" :span="8" >
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-fanpaiqi"></use>
                </svg>
                <div class="icon-title">翻牌器</div>
              </div>
            </a-col>
            <a-col class="icon-one" :span="8">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-kuai"></use>
              </svg>
              <div class="icon-title">颜色块</div>
            </a-col>
            <a-col class="icon-one" :span="8">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jindutiao"></use>
              </svg>
              <div class="icon-title">进度条</div>
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="icon-group">
        <span class="iconfont">&#xe629;</span>
        <div class="icon-group-child">
          <a-row>
            <a-col class="icon-one" :span="8" >
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-biaoge1"></use>
                </svg>
                <div class="icon-title">表格</div>
              </div>
            </a-col>
            <a-col class="icon-one" :span="8">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tab"></use>
              </svg>
              <div class="icon-title">选项卡</div>
            </a-col>
          </a-row>
        </div>
      </div>
      <div class="icon-group">
        <span class="iconfont">&#xe70d;</span>
      </div>
      <div class="icon-group">
        <span class="iconfont">&#xe858;</span>
      </div>
      <div class="icon-group">
        <span class="iconfont">&#xe7d9;</span>
      </div>
    </div>
    <div class="main">
      <canvas-container :canvasArr="canvasArr" ></canvas-container>
    </div>
    <div class="rAside">
      <props-table :props="currentElement" @change="handleChange"></props-table>
<!--      {{canvasArr}}-->
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import CanvasContainer from '@/components/CanvasContainer.vue';
import PropsTable from '@/components/PropsTable.vue';
import {
  Dashboard, GlobalDataProps, Histogram, Line, Pie, Radar, ScatterPlot,
} from '@/defaultProps';
import { useStore } from 'vuex';
import { cloneDeep } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

export default defineComponent({
  components: {
    CanvasContainer,
    PropsTable,
  },

  setup() {
    const store = useStore<GlobalDataProps>();
    const canvasArr = computed(() => store.state.editor.components);
    const currentElement = computed(() => store.getters.getCurrentElement);
    const addModule = (type:string) => {
      if (type === 'pie') {
        const pie = cloneDeep(Pie);
        pie.charts.id = uuidv4();
        store.commit('addComponent', pie);
        store.commit('updateCurrentId', pie.charts.id);
      } else if (type === 'line') {
        const line = cloneDeep(Line);
        line.charts.id = uuidv4();
        store.commit('addComponent', line);
        store.commit('updateCurrentId', line.charts.id);
      } else if (type === 'histogram') {
        const histogram = cloneDeep(Histogram);
        histogram.charts.id = uuidv4();
        store.commit('addComponent', histogram);
        store.commit('updateCurrentId', histogram.charts.id);
      } else if (type === 'scatterPlot') {
        const scatterPlot = cloneDeep(ScatterPlot);
        scatterPlot.charts.id = uuidv4();
        store.commit('addComponent', scatterPlot);
        store.commit('updateCurrentId', scatterPlot.charts.id);
      } else if (type === 'dashboard') {
        const dashboard = cloneDeep(Dashboard);
        dashboard.charts.id = uuidv4();
        store.commit('addComponent', dashboard);
        store.commit('updateCurrentId', dashboard.charts.id);
      } else if (type === 'radar') {
        const radar = cloneDeep(Radar);
        radar.charts.id = uuidv4();
        store.commit('addComponent', radar);
        store.commit('updateCurrentId', radar.charts.id);
      }
    };
    const handleChange = (e: any) => {
      console.log(e);
      store.commit('updateComponent', e);
    };
    return {
      canvasArr,
      currentElement,
      addModule,
      handleChange,
    };
  },
});

</script>

<style scoped lang="scss">
.container{
  height: 100%;
  background: #ffffff;
  padding: 60px 300px 0 160px;
}
.header,.lAside,.rAside,.main{
  position: fixed;
  background: #ffffff;
}
.main{
  overflow: auto;
  top: 60px;
  left: 0;
  right: 300px;
  bottom: 0;
}
.header{
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  z-index: 1;
  box-shadow: 0px 5px 4px #fdf2f2;
}
.lAside{
  padding: 10px;
  overflow: auto;
  top: 60px;
  left: 0;
  width: 160px;
  height: 100%;
  box-shadow: 0px 0px 10px #fdf2f2;
}
.rAside{
  padding: 10px;
  box-sizing: border-box;
  overflow: auto;
  top: 60px;
  right: 0;
  width: 300px;
  height: 100%;
  box-shadow: 0px 0px 10px #fdf2f2;
}
.icon {
  width: 40px;
  height: 40px;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
.iconfont{
  font-size: 28px;
  color: #999999;
}
.icon-group{
  position: relative;
  margin-left: 10px;
  width: 60px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
  display: inline-block;
}
.icon-group:hover>.iconfont{
  color: #000000;
}
.icon-group:hover>.icon-group-child{
  display: inline-block;
}
.icon-group-child{
  position: absolute;
  top: 60px;
  left: 0;
  background: #fbfbfb;
  width: 360px;
  height: 300px;
  border: 1px solid #ddd;
  display: none;
}
.icon-title{
  line-height: 26px;
  font-size: 14px;
  color: #999999;
}
.icon-one{
  position: relative;
}
.icon-one:hover .icon{
  color: #ffffff;
  font-size: 20px;
  width: 50px;
  height: 50px;
}
.icon-one:hover .icon-title{
  color: #9397d6;
}

</style>
