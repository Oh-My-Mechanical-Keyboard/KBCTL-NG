<template>
  <div class="tool-page">
    <h1>This is tool page.</h1>
    <router-link
      to="/keyboardtset"
      class="keyboard-test"
    >
    Keyboard Test
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'tool-page'
}
</script>

<style scoped>
h1 {
  color: orange;
}
</style>
