<template>
  <div class="macro-page">
    <h1>This is macro page.</h1>
    <macro-record></macro-record>
  </div>
</template>

<script>
import MacroRecord from '@/components/MacroRecord/index.vue'
export default {
  name: 'macro',
  components: { MacroRecord }
}
</script>

<style scoped>
h1 {
  color: orange;
}
</style>
