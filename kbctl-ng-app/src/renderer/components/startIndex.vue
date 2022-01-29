<template>
  <div id="wrapper">
    <main>
      <div class="side-bar">
        <keyboard-test></keyboard-test>
      </div>
      <div class="function-area">
      </div>
    </main>
  </div>
</template>

<script>
  import KeyboardTest from './KeyboardTest/KeyboardTest'
  export default {
    name: 'welcome',
    components: { KeyboardTest }
  }
</script>

<style>

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }
</style>
