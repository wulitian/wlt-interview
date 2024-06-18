<template>
  <div class="hello">
    <el-button @click="changeTopicByColor">切换主题</el-button>
    <el-button @click="changeTopicByItem('dark')">主题1</el-button>
    <el-button @click="changeTopicByItem('light')">主题2</el-button>
    <el-button>默认</el-button>
    <el-button type="primary">主要</el-button>
    <el-button type="success">成功</el-button>
    <el-button type="info">信息</el-button>
    <el-button type="warning">警告</el-button>
    <el-button type="danger">危险</el-button>
  </div>
</template>

<script>
import { generateColors, writeNewStyle} from '@/utils/color'
export default {
  name: 'HelloWorld',
  data(){
    return {
      originalStylesheetCount: -1
    }
  },
  mounted() {
  },
  methods: {
    changeTopicByColor(){
      let color = '#ffa200';
      let colors = generateColors(color);
      console.log(colors)
      writeNewStyle(colors, this.originalStylesheetCount);
    },
    changeTopicByItem(item){
      console.log(item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
