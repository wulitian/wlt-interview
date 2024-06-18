<template>
  <div class="hello">
    <button @click="change('zh')">zh</button>
    <button @click="change('en')">en</button>
    <div>{{$t('hello')}}</div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {

    }
  },
  methods: {
    change(val) {
      if(val!=localStorage.getItem('lang') ){
        localStorage.setItem('lang',val);
        this.$i18n.locale = val;
      }
    }
  }
}
</script>

<style scoped>
</style>
