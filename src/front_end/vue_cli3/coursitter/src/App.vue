<template>
  <div id="app">
    <!-- <img alt="Vue logo" src=".\assets\New Mockup 1.png"> -->
    <myNavbar v-bind:msg="1234"></myNavbar>
    <indexBody>asd</indexBody>
  </div>
</template>

<script>
import MyNavbar from './components/myNavbay.vue'
import IndexBody from './components/indexBody.vue'

export default {
  name: 'app',
  components: {
    "myNavbar":MyNavbar,
    "indexBody":IndexBody,
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
