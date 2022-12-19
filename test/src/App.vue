<template>
  <div id="app">
    <div>
        <div>
            <router-link to="/count">Count</router-link>
        </div>
        <div>
            <router-link to="/count1">Count1</router-link>
        </div>
    </div>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
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
