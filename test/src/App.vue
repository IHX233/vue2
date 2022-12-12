<template>
  <div id="app">
    <Count></Count>
    <count-1></count-1>
  </div>
</template>

<script>
import Count from './components/count'
import Count1 from './components/count1'

export default {
  name: 'App',
  components: {
    Count,Count1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
