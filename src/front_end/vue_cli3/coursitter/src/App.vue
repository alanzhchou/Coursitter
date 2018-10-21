<template>
  <div id="app">
    <!-- <img alt="Vue logo" src=".\assets\New Mockup 1.png"> -->
    <navTop v-bind:msg="1234"></navTop>
  </div>
</template>

<script>
import NavTop from './components/nav.vue'

export default {
  name: 'app',
  components: {
    "navTop":NavTop,
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
