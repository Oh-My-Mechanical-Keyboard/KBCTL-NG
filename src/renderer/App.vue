<template>
  <div id="app">
    <div class="sidebar">
      <navigation-bar></navigation-bar>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar/index.vue'
export default {
  name: 'kbctl-ng',
  components: {
    NavigationBar
  }
}
</script>

<style>
*, *:before, *:after {
  box-sizing: border-box;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
