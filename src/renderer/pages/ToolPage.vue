<template>
  <div class="tool-page">
    <h1>This is tool page.</h1>
    <keyboard-test></keyboard-test>
  </div>
</template>

<script>
import KeyboardTest from '@/components/KeyboardTest/index.vue'

export default {
  name: 'tool-page',
  components: { KeyboardTest }
}
</script>

<style scoped>
h1 {
  color: green;
}
</style>
