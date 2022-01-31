<template>
  <div class="keyboard-page">
    <h1>This is keyboard page.</h1>
    <keyboard-layout></keyboard-layout>
  </div>
</template>

<script>
import KeyboardLayout from '@/components/KeyboardLayout/index.vue'

export default {
  name: 'keyboard',
  components: { KeyboardLayout }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
