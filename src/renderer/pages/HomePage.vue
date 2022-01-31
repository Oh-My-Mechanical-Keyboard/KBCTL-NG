<template>
  <div class="home-page">
    <h1>This is home page.</h1>
    <keyboard-test></keyboard-test>
  </div>
</template>

<script>
import KeyboardTest from '@/components/KeyboardTest/index.vue'
export default {
  name: 'home',
  components: { KeyboardTest }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
