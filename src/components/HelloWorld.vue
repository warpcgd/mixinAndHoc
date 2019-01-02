<template>
  <div>
    <h1>1.mixButton</h1>
    <div style="width:70%;margin:0 auto">
       <mixButton @click="mixinClick">mixButton</mixButton>
    </div>
    <br>
    <br>
    <br>
    <br>
    <h1>2.HocButton</h1>
    <div style="width:70%;margin:0 auto">
       <HocButton @click="HOCclick">HocButton</HocButton>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// import mixinsTabPane from './mixinsTabPane.js'
// import HocTabPane from './HocTabPane.js'
import mixButton from './mixButton.js'
import HocButton from './HocButton.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    // mixinsTabPane,
    // HocTabPane,
    mixButton,
    HocButton
  },
  mounted () {
    // console.log(this)
    // console.log(Vue.options)
  },
  methods: {
    mixinClick () {
      console.log('mixinClick')
    },
    HOCclick () {
      console.log('HOCclick')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
