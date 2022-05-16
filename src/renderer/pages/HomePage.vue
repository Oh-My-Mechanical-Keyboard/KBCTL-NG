<template>
  <div class="home-page">
    <h1>This is home page.</h1>
    <keyboard-layout></keyboard-layout>
  </div>
</template>

<script>
import KeyboardLayout from '@/components/KeyboardLayout/index.vue'
export default {
  name: 'home',
  components: { KeyboardLayout }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
